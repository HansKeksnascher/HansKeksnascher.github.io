#version 100

#ifdef GL_ES
precision highp float;
#endif

uniform vec4 tint;
uniform sampler2D tex;
varying vec2 fragTexCoord;
varying vec4 fragColor;

void main() {
    gl_FragColor = tint * fragColor * texture2D(tex, fragTexCoord);
}
