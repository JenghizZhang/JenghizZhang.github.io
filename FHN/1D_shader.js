var init_1D=`
#version 300 es
precision highp float ;
precision highp int ;

layout (location = 0 ) out vec4 color1 ; 
layout (location = 1 ) out vec4 color2 ; 

in vec2 cc ;        /* input from vertex shader */

#define u   color.r
#define v   color.g

// Main body of the shader
void main() {
    vec4 color = vec4(0.) ;

    if ( cc.x < 0.01 ){
        u = 0.8;
    }

    // we assign the same values to both of them
    color1 = color ;
    color2 = color ;
    return ;
}
`;