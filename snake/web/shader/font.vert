#version 100

attribute vec2 position;
attribute vec2 texCoord;
uniform mat4 projection;
varying vec2 texCoordFrag;

void main() {
	gl_Position = projection * vec4(position, 1.0, 1.0);
	texCoordFrag = texCoord;
}
