#version 100

#ifdef GL_ES
precision highp float;
#endif

varying vec2 texCoordFrag;
uniform vec4 color;
uniform sampler2D tex;

void main() {
    gl_FragColor = color * texture2D(tex, texCoordFrag);
}
