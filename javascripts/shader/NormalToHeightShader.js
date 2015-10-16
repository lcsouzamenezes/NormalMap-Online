THREE.NormalToHeightShader = {
	uniforms: {
		//"type": 		{type: "1i", value: 0},
    	"tAbove": 	{type: "t", value: null },
    	"tLeft": 	{type: "t", value: null },
    	"tRight": 	{type: "t", value: null },
    	"tBelow": 	{type: "t", value: null }
	},

	vertexShader: [
		"precision mediump float;",
        "varying vec2 vUv;",
        "void main() {",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
			//"vUv.y = 1.0 - uv.y;",
			//"vUv.x = uv.x;",
			"vUv = uv;",
			"vUv.y = 1.0 - vUv.y;",
		"}"
	].join("\n"),

	fragmentShader: [
		"precision mediump float;",
        "varying vec2 vUv;",
        //"uniform int type;",
		"uniform sampler2D tAbove;",
		"uniform sampler2D tLeft;",
		"uniform sampler2D tRight;",
		"uniform sampler2D tBelow;",
        
		"void main(void) {",
		//"	gl_FragColor = texture2D(tBelow, vUv);",
		"	gl_FragColor = vec4(1,1,0,1);",
		"	gl_FragColor = (texture2D(tAbove, vUv) + texture2D(tLeft, vUv) + texture2D(tRight, vUv) + texture2D(tBelow, vUv)) / 4.0;",
		"}"
	].join("\n")

}