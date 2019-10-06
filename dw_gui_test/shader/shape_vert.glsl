#version 100

attribute vec2 position;
attribute vec4 color;
uniform mat4 projection;
varying vec4 fragColor;

void main() {
    gl_Position = projection * vec4(position, 1.0, 1.0);
    fragColor = color;
}
