#version 100

precision highp float;

varying vec2 texCoordFrag;
uniform sampler2D tex;

void main() {
    gl_FragColor = texture2D(tex, texCoordFrag);
}
