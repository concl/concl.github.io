import { useState, useEffect, useRef } from 'react'

import { initBuffers } from "./helpers/init_buffers.js";
import { drawScene } from "./helpers/draw_scene.js";

import vsSource from "./shaders/VertexShader.glsl?raw";
import fsSource from "./shaders/FragmentShader.glsl?raw";

import "./MandelbrotViewer.css";
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
    const shader: WebGLShader | null = gl.createShader(type);

    // Send the source to the shader object

    gl.shaderSource(shader!, source);

    // Compile the shader program

    gl.compileShader(shader!);
    // See if it compiled successfully

    if (!gl.getShaderParameter(shader!, gl.COMPILE_STATUS)) {
        alert(
            `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader!)}`,
        );
        gl.deleteShader(shader!);
        return null;
    }

    return shader!;
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    // Create the shader program

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram!, vertexShader!);
    gl.attachShader(shaderProgram!, fragmentShader!);
    gl.linkProgram(shaderProgram!);

    // If creating the shader program failed, alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert(
            `Unable to initialize the shader program: ${gl.getProgramInfoLog(
                shaderProgram,
            )}`,
        );
        return null;
    }
    
    return shaderProgram;
}


let then = 0;
let zoom = 40.0;
let position = [-0.648625, -0.425];
let velocity = [0.0, 0.0];
const friction = 0.90;

// Draw the scene repeatedly
function render(gl, programInfo, buffers, now) {
    now *= 0.001; // convert to seconds
    deltaTime = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, position, zoom);
    //   squareRotation += deltaTime;

    requestAnimationFrame((now) => render(gl, programInfo, buffers, now));
}

let deltaTime = 0;

function main() {
    const canvas: HTMLCanvasElement | null = document.querySelector("#mandelbrot-canvas");
    if (canvas === null) {
        alert(
            "Cannot find canvas element"
        );
        return;
    }

    // Initialize the GL context
    const gl: WebGLRenderingContext | null = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert(
            "Unable to initialize WebGL. Your browser or machine may not support it.",
        );
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    if (shaderProgram === null) {
        return;
    }

    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
            vertexColor: gl.getAttribLocation(shaderProgram, "interpolatedPosition"),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
            maxIter: gl.getUniformLocation(shaderProgram, "uMaxIter"),
            zoom: gl.getUniformLocation(shaderProgram, "uZoom"),
            position: gl.getUniformLocation(shaderProgram, "uPosition"),
        }
    };

    const buffers = initBuffers(gl);
    drawScene(gl, programInfo, buffers, position, zoom);
    requestAnimationFrame((now) => render(gl, programInfo, buffers, now));
};


const canvasWidth = 1024;
const canvasHeight = 1024;
const frameRate = 60;

function MandelbrotViewer() {
    const [active, setActive] = useState(true);
    const [dragging, setDragging] = useState(true);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const lastPosRef = useRef<{ x: number; y: number } | null>(null);

    // reset on mount
    useEffect(() => {
        then = 0;
        zoom = 40.0;
        position = [-0.648625, -0.425];
        velocity = [0.0, 0.0];
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        function handleWheel(e: WheelEvent) {
            if (!active) return;
            e.preventDefault();
            const delta = Math.sign(e.deltaY);
            if (delta < 0) zoom *= 1.1;
            else zoom /= 1.1;

            // console.log("zoom:", zoom);
        }

        function handleMouseMove(e: MouseEvent) {
            if (!dragging || !lastPosRef.current) return;

            const dx = e.clientX - lastPosRef.current.x;
            const dy = e.clientY - lastPosRef.current.y;

            // update “camera” in complex plane
            position[0] -= (dx / zoom) * 0.0025 * (800 / canvasWidth);
            position[1] += (dy / zoom) * 0.0025 * (800 / canvasHeight);

            lastPosRef.current = { x: e.clientX, y: e.clientY };

            // console.log("position:", position);
        }
        function handleMouseDown(e: MouseEvent) {
            setDragging(true);
            lastPosRef.current = { x: e.clientX, y: e.clientY };
        }

        function handleMouseUp() {
            setDragging(false);
            lastPosRef.current = null;
        }

        canvas.addEventListener("wheel", handleWheel, { passive: false });

        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
        
    }, [active]); // re-run when active changes

    useEffect(()=> {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        main();
    }, []);
    return (
        <canvas 
            ref={canvasRef}
            id="mandelbrot-canvas"
            width = {canvasWidth} 
            height = {canvasHeight}
            onMouseDown={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >

        </canvas>
    )
}

export default MandelbrotViewer;
