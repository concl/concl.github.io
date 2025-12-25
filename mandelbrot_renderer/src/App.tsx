
import { useState, useEffect } from 'react'
import './App.css'


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
}


function App() {
  useEffect(main, []);
  return (
    <>
      <canvas id="mandelbrot-canvas" width="800" height="600">

      </canvas>
    </>
  )
}





export default App
