#version 100

#ifdef GL_ES
precision highp float;
#endif

varying vec2 texCoordFrag;
uniform vec4 color;
uniform sampler2D tex;

const float smoothing = 1.0 / 16.0;

void main() {
    float distance = texture2D(tex, texCoordFrag).a;
    float alpha = smoothstep(0.5 - smoothing, 0.5 + smoothing, distance);
    gl_FragColor = vec4(color.rgb, color.a * alpha);
}
