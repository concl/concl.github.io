
# Math Snippet 

$$
\begin{bmatrix}
\cos{(-\theta)} & -\sin{(-\theta)} & 0 \\
\sin{(-\theta)} & \cos{(-\theta)} & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

This matrix can be derived by recalling that a linear transformation can be described by the positions of the basis vectors after the transformation. We need only rotate the basis vectors corresponding to the X and Y axis by $-\theta$ around the Z-axis to find the rotation of any vector around the Z-axis.

Similarly, a rotation by $-\phi$ around the Y-axis can be represented by the following matrix:

$$
\begin{bmatrix}
\cos{(-\phi)} & 0 & \sin{(-\phi)} \\
0 & 1 & 0 \\
-\sin{(-\phi)} & 0 & \cos{(-\phi)}
\end{bmatrix}
$$

Simplifying, we get the following combined transformation:
$$
\begin{aligned}
T(P, C, \theta, \phi)

&=
\begin{bmatrix}
\cos{(-\phi)} & 0 & \sin{(-\phi)} \\
0 & 1 & 0 \\
-\sin{(-\phi)} & 0 & \cos{(-\phi)}
\end{bmatrix}
\begin{bmatrix}
\cos{(-\theta)} & -\sin{(-\theta)} & 0 \\
\sin{(-\theta)} & \cos{(-\theta)} & 0 \\
0 & 0 & 1
\end{bmatrix}
(P-C)

\\

&=
\begin{bmatrix}
\cos{(\phi)} & 0 & -\sin{(\phi)} \\
0 & 1 & 0 \\
\sin{(\phi)} & 0 & \cos{(\phi)}
\end{bmatrix}
\begin{bmatrix}
\cos{(\theta)} & \sin{(\theta)} & 0 \\
-\sin{(\theta)} & \cos{(\theta)} & 0 \\
0 & 0 & 1
\end{bmatrix}
(P-C)

\\

&=
\begin{bmatrix}
\cos{(\phi)} \cos{(\theta)} & \cos{(\phi)} \sin{(\theta)} & -\sin{(\phi)} \\
-\sin{(\theta)} & \cos{(\theta)} & 0 \\
\sin{(\phi)} \cos{(\theta)} & \sin{(\phi)} \sin{(\theta)} & \cos{(\phi)}
\end{bmatrix}
(P-C)
\end{aligned}
$$

Let's define the point transformed to be relative to the camera $P'$:

$$

P'= T(P, C, \theta, \phi) = 

\begin{bmatrix}
\cos{(\phi)} \cos{(\theta)} & \cos{(\phi)} \sin{(\theta)} & -\sin{(\phi)} \\
-\sin{(\theta)} & \cos{(\theta)} & 0 \\
\sin{(\phi)} \cos{(\theta)} & \sin{(\phi)} \sin{(\theta)} & \cos{(\phi)}
\end{bmatrix}
(P-C)

$$

Now, the Z-component of $P'$ represents the aligned distance from the camera. In other words, if $M$ is a plane that is orthogonal to the orientation of the camera (in the default orientation with all angles set to 0), and $M$ contains $P'$, then the distance between $M$ and the origin is the Z-component of $P'$. We can use this to implement the shrinking effect as objects get further by using a factor of $\frac{1}{P'_Z}$ in our fully transformed point, $Q$. Therefore, a possible formula for $Q$ is:

$$
Q = f(P') = \langle \frac{-P'_X}{P'_Z}, \frac{P'_Y}{P'_Z} \rangle
$$

(The factor of -1 in the X-component is so that a with a higher X-value than the camera will have a lower X-value on the 2D screen, which means that it will be depicted toward the left, which would preserve the right hand rule between the X, Y, and Z axes.)

## Projecting Curves

Now that we have a formula for projecting points, we can project all curves that are parametrized in 3D.

### Lines

Lines in 3D are parametrized by:

$$
\vec{r}(t) = \vec{d}t + \vec{p_0}
$$

where $\vec{d}$ is a vector specifying the orientation of the line, and $\vec{p_0}$ is a point on the line.

If we plug this into our perspective projection (without loss of generality disregarding the rotation of the camera), we get:

$$
\begin{aligned}
\vec{r}_{transformed}(t)

=
\langle \frac{-\vec{d}_x t - \vec{p_0}_x}{\vec{d}_z t + \vec{p_0}_z}, \frac{\vec{d}_y t + \vec{p_0}_y}{\vec{d}_z t + \vec{p_0}_z} \rangle

\\

=
\frac{1}{\vec{d}_z t + \vec{p_0}_z}
\langle -\vec{d}_x t - \vec{p_0}_x, \vec{d}_y t + \vec{p_0}_y \rangle

\end{aligned}
$$

which also parametrizes a line in 2D space (that has a singularity at $\vec{d}_z t + \vec{p_0}_z=0$).

This means that lines in 3D space always remain straight when projected onto a 2D screen.

### Circles

Circles are parametrized by:
