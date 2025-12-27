
# Mandelbrot Set Renderer in WebGL
## How I used WebGL to render the Mandelbrot Set
### Dec 27, 2025

The Mandelbrot set is a fractal that is defined by iterating a certain function on each point in the complex plane. If the sequence defined by this iteration for a given point doesn't diverge to infinity, then the point is part of the set, and if it does, then the point is not part of the set.

We display this fractal by treating the complex plane as a 2D grid, and coloring points that are part of the set black, and points that aren't part of the set according to how fast it diverges.


