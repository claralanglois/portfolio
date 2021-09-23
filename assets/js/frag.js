const frag = function (items) { 
  
  
  const ifLoop = items.map((item, index) => {
    return `
			if (index == ${index}) { return texture2D(textures[${index}], uv); }
		`
  }).join(" else ")
  
  
  return `

	#ifdef GL_ES
precision highp float;
#endif

#define MAX ${items.length}

uniform float u_time;
uniform vec2 u_resolution;

uniform float timeline;

uniform sampler2D textures[MAX];

uniform float startIndex;
uniform float endIndex;

varying vec3 v_normal;
varying vec2 v_texcoord;
	
	${includes}

vec4 sampleColor(int index, vec2 uv) {
    ${ifLoop}
    
    return vec4(1.0, 1.0, 1.0, 1.0);
}

void main(void)
{
    vec2 uv = v_texcoord;
    uv -= 0.5;
    
    float wave = fbm(3.5 * uv + 0.2 * u_time);
    float strength = smoothstep(0.0, 1.0, timeline) - smoothstep(2.0, 3.0, timeline);
    float distortion = mix(1.0, 1.0 + strength, wave);
    
    uv *= distortion;
    uv += 0.5;
    
    
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        discard;
    }
    
    // pick images    
    vec4 startTexture = sampleColor(int(startIndex), uv);
    vec4 endTexture = sampleColor(int(endIndex), uv);
    
    // tween
    float changeTimeline = smoothstep(0.5, 2., timeline);
    float mixer = 1.0 - step(changeTimeline, wave);
    
    vec4 color = mix(startTexture, endTexture, mixer);
    
    gl_FragColor = color;
}

`


}