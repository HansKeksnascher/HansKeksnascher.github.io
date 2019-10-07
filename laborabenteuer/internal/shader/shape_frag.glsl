#version 100

#ifdef GL_ES
precision highp float;
#endif

uniform vec4 tint;
varying vec4 fragColor;

void main() {
    gl_FragColor = tint * fragColor;
}
