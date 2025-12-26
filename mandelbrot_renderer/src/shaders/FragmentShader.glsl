

varying highp vec2 interpolatedPosition;

uniform highp float uZoom;
uniform highp vec2 uPosition;

uniform int uMaxIter;
const int MAX_ITER = 2048;

const highp vec4 interior = vec4(0.0, 0.0, 0.0, 1.0);
// #663498
const highp vec4 far = vec4(102.0/255.0, 52.0/255.0, 152.0/255.0, 1.0);

// #40FF40
const highp vec4 mid = vec4(64.0/255.0, 1.0, 64.0/255.0, 1.0);

// #FFFF40
const highp vec4 near = vec4(1.0, 1.0, 64.0/255.0, 1.0);


highp vec2 c_mul(highp vec2 a, highp vec2 b) {
    return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

highp vec2 c_add(highp vec2 a, highp vec2 b) {
    return vec2(a.x + b.x, a.y + b.y);
}


void main() {

    highp vec2 z = vec2(0.0, 0.0);
    highp vec2 c = interpolatedPosition / uZoom + uPosition;

    int totalIter = uMaxIter;

    for (int iter = 0; iter < MAX_ITER; iter++) {
        if (iter >= uMaxIter) {
            totalIter = iter;
            break;
        }

        if (length(z) > 2.0) {
            totalIter = iter;
            break;
        }
        z = c_add(c_mul(z, z), c);
    }

    int iter = totalIter;
    if (iter == uMaxIter) {

        gl_FragColor = interior;
    
    } else {
        highp float t = float(iter) / float(uMaxIter);
        if (t < 0.0625) {
            highp float local_t = t / 0.0625 * 1.5;
            gl_FragColor = mix(far, mid, local_t);
        } else {
            highp float local_t = (t - 0.0625) / 0.0625;
            gl_FragColor = mix(mid, near, local_t);
        }
    }
}

