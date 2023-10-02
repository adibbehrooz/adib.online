const constellations = {
	
	//____________________ CSS ____________________

	css: {
		curve: function(ctx) {
			ctx.save();
			ctx.restore();
		},
		outside: [
			{ form: 'save' },
				{ form: 'beginPath' }, 
					{ x0: 0.000,   	x1: 19.232, form: 'moveTo' }, 
					{ x0: 9.635,   	x1: 23.250, form: 'lineTo' }, 
					{ x0: 20.800,   x1: 19.232, form: 'lineTo' },   
					{ x0: 24.000,   x1: 0.7500, form: 'lineTo' },   
					{ x0: 3.630,   	x1: 0.7500, form: 'lineTo' },  
					{ x0: 2.815,   	x1: 4.8680, form: 'lineTo' }, 
					{ x0: 19.485,   x1: 4.8680, form: 'lineTo' }, 
					{ x0: 18.960,   x1: 7.5150, form: 'lineTo' }, 
					{ x0: 2.2750,   x1: 7.5150, form: 'lineTo' }, 
					{ x0: 1.4750,   x1: 11.633, form: 'lineTo' }, 
					{ x0: 18.145,   x1: 11.633, form: 'lineTo' }, 
					{ x0: 17.205,   x1: 16.510, form: 'lineTo' }, 
					{ x0: 10.500,   x1: 18.739, form: 'lineTo' },  
					{ x0: 4.6800,   x1: 16.510, form: 'lineTo' }, 
					{ x0: 5.0800,   x1: 14.471, form: 'lineTo' }, 
					{ x0: 1.4750,   x1: 14.471, form: 'lineTo' }, 
					{ x0: 0.0000,   x1: 19.142, form: 'lineTo' }, 
				{ form: 'closePath' },
				// Stroke
				{ form: 'lineWidth', value: '1' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .2)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .1)' },
				{ form: 'fill' },
			{ form: 'restore'}, // Restore [!Save]
		],
		inside: [
			{ form: 'save' },
				{ x0: 3.175,   	x1: 2.750, form: 'moveTo' }, 
				{ x0: 21.500,   x1: 2.750, form: 'lineTo' }, 
				{ x0: 18.700,   x1: 17.900, form: 'lineTo' }, 
				{ x0: 9.700,   	x1: 21.000, form: 'lineTo' }, 
				{ x0: 1.700,   	x1: 17.500, form: 'lineTo' }, 
				{ x0: 20.175,  	x1: 9.750, form: 'moveTo' },  
				{ x0: 2.175,  	x1: 9.750, form: 'lineTo' }, 
				// Stroke
				{ form: 'lineWidth', value: '0.1' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .5)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .2)' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save' },
				{ x0: 3.175,   	x1: 2.750  },  
				{ x0: 21.500,   x1: 2.750  },  
				{ x0: 18.700,   x1: 17.900 },  
				{ x0: 9.700,   	x1: 21.000 },  
				{ x0: 1.700,   	x1: 17.500 },  
				{ x0: 2.175,  	x1: 9.7500 },  
				{ x0: 20.175,  	x1: 9.750  },  
			{ form: 'restore'},
		],
	},

	//____________________ WEBPACK ____________________

	webpack: {
		curve: function(ctx) {
			ctx.save();
			ctx.restore();
		},
		outside: [
			{ form: 'save' }, 
				{ form: 'strokeStyle', value: "rgba( 255, 255, 255, 0.5)" }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, .1)" }, 
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'save' }, 
					{ form: 'fillStyle', value: "rgba(255, 255, 255, 0.1)" }, 
					{ form: 'lineWidth', value: 0.036011 }, 
					{ form: 'beginPath' }, 
						{ x0:24.765896,  x1:21.456033,  form: 'moveTo' },
						{ x0:13.778953000000001,  x1:27.671524,  form: 'lineTo' },
						{ x0:13.778953000000001,  x1:22.831661,  form: 'lineTo' },
						{ x0:20.624636000000002,  x1:19.064907,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:25.518523000000002,  x1:20.775432000000002,  form: 'moveTo' },
						{ x0:25.518523000000002,  x1:7.7790779,  form: 'lineTo' },
						{ x0:21.499695000000003,  x1:10.101786,  form: 'lineTo' },
						{ x0:21.499695000000003,  x1:18.456328,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:1.8269196,  x1:21.456033,  form: 'moveTo' },
						{ x0:12.81386,  x1:27.671524,  form: 'lineTo' },
						{ x0:12.81386,  x1:22.831661,  form: 'lineTo' },
						{ x0:5.9645745,  x1:19.064907,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:1.0742942,  x1:20.775432,  form: 'moveTo' },
						{ x0:1.0742942,  x1:7.7790779,  form: 'lineTo' },
						{ x0:5.0931101,  x1:10.101786,  form: 'lineTo' },
						{ x0:5.0931101,  x1:18.456328,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:1.5460332,  x1:6.9364181,  form: 'moveTo' },
						{ x0:12.81386,  x1:0.56248086,  form: 'lineTo' },
						{ x0:12.81386,  x1:5.2403071,  form: 'lineTo' },
						{ x0:5.5936619,  x1:9.212315,  form: 'lineTo' },
						{ x0:5.5360347,  x1:9.2446886,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:25.046772,  x1:6.9364181,  form: 'moveTo' },
						{ x0:13.778953,  x1:0.56248086,  form: 'lineTo' },
						{ x0:13.778953,  x1:5.2403071,  form: 'lineTo' },
						{ x0:20.999144,  x1:9.2087097,  form: 'lineTo' },
						{ x0:21.056784,  x1:9.2410837,  form: 'lineTo' },
					{ form: 'closePath' }, 
					{ form: 'fill' }, 
					{ form: 'stroke' }, 
					{ form: 'fillStyle', value: "rgba(255, 255, 255, 0.2)" }, 
					{ form: 'lineWidth', value: 0.036011 }, 
					{ form: 'beginPath' }, 
						{ x0:12.81386,  x1:21.729723,  form: 'moveTo' },
						{ x0:6.058206,  x1:18.013396,  form: 'lineTo' },
						{ x0:6.058206,  x1:10.65636,  form: 'lineTo' },
						{ x0:12.81386,  x1:14.556344,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:13.778953,  x1:21.729723,  form: 'moveTo' },
						{ x0:20.534603,  x1:18.016993,  form: 'lineTo' },
						{ x0:20.534603,  x1:10.65636,  form: 'lineTo' },
						{ x0:13.778953000000001,  x1:14.556344,  form: 'lineTo' },
						{ form: 'closePath' }, 
						{ x0:13.296402,  x1:14.275452,  form: 'moveTo' },
						{ form: 'closePath' }, 
						{ x0:6.5155469,  x1:9.8064974,  form: 'moveTo' },
						{ x0:13.296402,  x1:6.0793616,  form: 'lineTo' },
						{ x0:20.077273,  x1:9.8064974,  form: 'lineTo' },
						{ x0:13.296402,  x1:13.720887,  form: 'lineTo' },
					{ form: 'closePath' }, 
					{ form: 'fill' }, 
					{ form: 'stroke' }, 
				{ form: 'restore' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: 11.996402,   x1: 0.562480, form: 'moveTo' }, 
				{ x0: 11.996402,   x1: 5.590307, form: 'lineTo' },
				{ x0: 5.7360347,   x1: 9.306497, form: 'lineTo' },
				{ x0: 5.8360347,   x1: 17.01339, form: 'lineTo' },
				{ x0: 12.496402,   x1: 20.13166, form: 'lineTo' },
				{ x0: 19.131660,   x1: 16.11339, form: 'lineTo' },
				{ x0: 19.134603,   x1: 9.306497, form: 'lineTo' },
				{ x0: 13.096402,   x1: 5.690307, form: 'lineTo' },
				// Stroke
				{ form: 'lineWidth', value: '0.1' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .5)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .2)' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save' },
				{ x0: 13.696402,   x1: 0.562480 },
				{ x0: 13.696402,   x1: 5.590307 },
				{ x0: 6.5360347,   x1: 10.80649 },
				{ x0: 6.5360347,   x1: 18.41339 },
				{ x0: 13.696402,   x1: 22.63166 },
				{ x0: 21.934603,   x1: 18.61339 },
				{ x0: 21.934603,   x1: 9.806497 },
				{ x0: 13.696402,   x1: 5.590307 },
				{ x0: 6.5360347,   x1: 10.80649 },
				{ x0: 2.0964020,   x1: 7.631660 },
				{ x0: 6.5360347,   x1: 18.51339 },
				{ x0: 2.8460332,   x1: 21.32972 },
				{ x0: 13.696402,   x1: 22.63166 },
				{ x0: 13.696402,   x1: 27.67152 },
				{ x0: 21.934603,   x1: 18.61339 },
				{ x0: 26.346772,   x1: 21.13166 },
				{ x0: 21.934603,   x1: 9.806497 },
				{ x0: 27.018523,   x1: 7.431660 },
				{ x0: 21.934603,   x1: 9.806497 },
				{ x0: 13.696402,   x1: 14.10649 },
				{ x0: 6.5360347,   x1: 10.80649 },
				{ x0: 13.696402,   x1: 14.10649 },
				{ x0: 13.696402,   x1: 22.63166 }, 
			{ form: 'restore'},
		],
	},

	//____________________ SVG ____________________

	svg: {
		curve: function(ctx) {
			ctx.save();
			ctx.restore();
		},
		outside: [
			{ form: 'save' }, 
				{ form: 'strokeStyle', value: "rgba( 255, 255, 255, 0.5)" }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, .05)" }, 
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'save' }, 
					{ form: 'beginPath' }, 
						{ x0: 245.23538, x1: 153.52383,  form: 'moveTo' },
						{ x0: 259.24687, x1: 139.51234, x2: 259.24642, x3: 116.71301, x4: 245.23493, x5: 102.70107,  form: 'bezierCurveTo' },
						{ x0: 238.44777, x1: 95.913465, x2: 229.42287, x3: 92.175775, x4: 219.82377, x5: 92.175775,  form: 'bezierCurveTo' },
						{ x0: 217.54456, x1: 92.175775, x2: 215.30051, x3: 92.383549, x4: 213.11189, x5: 92.793239,  form: 'bezierCurveTo' },
						{ x0: 222.65014, x1: 86.268845, x2: 228.8311, x3: 75.297803, x4: 228.8311, x5: 63.098591,  form: 'bezierCurveTo' },
						{ x0: 228.8311, x1: 43.28293, x2: 212.70986, x3: 27.16169, x4: 192.89419999999998, x5: 27.16169,  form: 'bezierCurveTo' },
						{ x0: 180.67065, x1: 27.16169, x2: 169.68068, x3: 33.367437, x4: 163.16124, x5: 42.93769,  form: 'bezierCurveTo' },
						{ x0: 165.31831, x1: 31.560563000000002, x2: 161.93487, x3: 19.401014000000004, x4: 153.29172, x5: 10.757859000000003,  form: 'bezierCurveTo' },
						{ x0: 146.50456, x1: 3.9702535000000037, x2: 137.47966, x3: 0.23211268000000373, x4: 127.88056, x5: 0.23211268000000373,  form: 'bezierCurveTo' },
						{ x0: 118.28146000000001, x1: 0.23211268000000373, x2: 109.25656000000001, x3: 3.9702535000000037, x4: 102.46941000000001, x5: 10.757859000000003,  form: 'bezierCurveTo' },
						{ x0: 93.825803, x1: 19.401014, x2: 90.442817, x3: 31.561014, x4: 92.599887, x5: 42.938141,  form: 'bezierCurveTo' },
						{ x0: 86.080451, x1: 33.367887, x2: 75.090028, x3: 27.16169, x4: 62.866479, x5: 27.16169,  form: 'bezierCurveTo' },
						{ x0: 43.050816999999995, x1: 27.16169, x2: 26.929576999999995, x3: 43.28293, x4: 26.929576999999995, x5: 63.098591,  form: 'bezierCurveTo' },
						{ x0: 26.929576999999995, x1: 75.298254, x2: 33.11008399999999, x3: 86.268845, x4: 42.648337999999995, x5: 92.792789,  form: 'bezierCurveTo' },
						{ x0: 40.459717999999995, x1: 92.383549, x2: 38.216562999999994, x3: 92.175775, x4: 35.93690099999999, x5: 92.175775,  form: 'bezierCurveTo' },
						{ x0: 26.337802999999994, x1: 92.175775, x2: 17.31335199999999, x3: 95.913916, x4: 10.525746999999992, x5: 102.70152,  form: 'bezierCurveTo' },
						{ x0: 3.7381409, x1: 109.48913, x2: 0, x3: 118.51403, x4: 0, x5: 128.11268,  form: 'bezierCurveTo' },
						{ x0: 0, x1: 137.71177, x2: 3.7381409, x3: 146.73622, x4: 10.525747, x5: 153.52428,  form: 'bezierCurveTo' },
						{ x0: 17.313352000000002, x1: 160.31144, x2: 26.338253, x3: 164.04958, x4: 35.936901, x5: 164.04958,  form: 'bezierCurveTo' },
						{ x0: 38.216113, x1: 164.04958, x2: 40.459268, x3: 163.84179999999998, x4: 42.648337999999995, x5: 163.43211,  form: 'bezierCurveTo' },
						{ x0: 33.11008399999999, x1: 169.95650999999998, x2: 26.929576999999995, x3: 180.92755, x4: 26.929576999999995, x5: 193.12676,  form: 'bezierCurveTo' },
						{ x0: 26.929576999999995, x1: 212.94242, x2: 43.050816999999995, x3: 229.06321, x4: 62.866479, x5: 229.06321,  form: 'bezierCurveTo' },
						{ x0: 75.090028, x1: 229.06321, x2: 86.080901, x3: 222.85746, x4: 92.599887, x5: 213.28721,  form: 'bezierCurveTo' },
						{ x0: 90.44281699999999, x1: 224.66478999999998, x2: 93.82625399999999, x3: 236.82478999999998, x4: 102.46941, x5: 245.46794,  form: 'bezierCurveTo' },
						{ x0: 109.25701, x1: 252.2551, x2: 118.28191, x3: 255.99324, x4: 127.88056, x5: 255.99324,  form: 'bezierCurveTo' },
						{ x0: 137.47966, x1: 255.99324, x2: 146.50456, x3: 252.2551, x4: 153.29172, x5: 245.46749,  form: 'bezierCurveTo' },
						{ x0: 161.93487, x1: 236.82434, x2: 165.31786, x3: 224.66389, x4: 163.16079, x5: 213.28676000000002,  form: 'bezierCurveTo' },
						{ x0: 169.68022, x1: 222.85701, x2: 180.67065, x3: 229.06321000000003, x4: 192.89419999999998, x5: 229.06321000000003,  form: 'bezierCurveTo' },
						{ x0: 212.70986, x1: 229.06321000000003, x2: 228.8311, x3: 212.94242000000003, x4: 228.8311, x5: 193.12676000000002,  form: 'bezierCurveTo' },
						{ x0: 228.8311, x1: 180.92755000000002, x2: 222.65014, x3: 169.95651, x4: 213.11234, x5: 163.43211000000002,  form: 'bezierCurveTo' },
						{ x0: 215.30095999999998, x1: 163.84180000000003, x2: 217.54456, x3: 164.04958000000002, x4: 219.82377, x5: 164.04958000000002,  form: 'bezierCurveTo' },
						{ x0: 229.42287, x1: 164.04958000000002, x2: 238.44777, x3: 160.31144000000003, x4: 245.23538, x5: 153.52383000000003,  form: 'bezierCurveTo' },
					{ form: 'closePath' }, 
					{ form: 'fill' }, 
					{ form: 'stroke' }, 
					{ form: 'strokeStyle', value: "rgba( 255, 255, 255, .1)" }, 
					{ form: 'fillStyle', value: "rgba(255, 255, 255, .1)" }, 
				// { form: 'restore' }, 
				// { form: 'save' }, 
					{ form: 'beginPath' }, 
						{ x0: 234.39144, x1: 113.53825,  form: 'moveTo' },
						{ x0: 226.34231, x1: 105.48958, x2: 213.29217, x3: 105.48958, x4: 205.24303999999998, x5: 113.53825,  form: 'bezierCurveTo' },
						{ x0: 163.05892999999998, x1: 113.53825,  form: 'lineTo' },
						{ x0: 192.88788999999997, x1: 83.70974600000001,  form: 'lineTo' },
						{ x0: 204.27086999999997, x1: 83.70974600000001, x2: 213.49858999999998, x3: 74.48202800000001, x4: 213.49858999999998, x5: 63.09859100000001,  form: 'bezierCurveTo' },
						{ x0: 213.49858999999998, x1: 51.715606000000015, x2: 204.27086999999997, x3: 42.487437000000014, x4: 192.88788999999997, x5: 42.487437000000014,  form: 'bezierCurveTo' },
						{ x0: 181.50444999999996, x1: 42.487437000000014, x2: 172.27672999999996, x3: 51.715606000000015, x4: 172.27672999999996, x5: 63.09859100000001,  form: 'bezierCurveTo' },
						{ x0: 142.44822, x1: 92.927549,  form: 'lineTo' },
						{ x0: 142.44822, x1: 50.743437,  form: 'lineTo' },
						{ x0: 150.49689999999998, x1: 42.69431, x2: 150.49689999999998, x3: 29.644169, x4: 142.44777, x5: 21.595042,  form: 'bezierCurveTo' },
						{ x0: 134.39865, x1: 13.545916, x2: 121.34850999999999, x3: 13.545916, x4: 113.29937999999999, x5: 21.595042,  form: 'bezierCurveTo' },
						{ x0: 105.25024999999998, x1: 29.644168999999998, x2: 105.25024999999998, x3: 42.69431, x4: 113.29937999999999, x5: 50.743437,  form: 'bezierCurveTo' },
						{ x0: 113.29937999999999, x1: 92.927549,  form: 'lineTo' },
						{ x0: 83.470873, x1: 63.098591,  form: 'lineTo' },
						{ x0: 83.470873, x1: 51.715606, x2: 74.243155, x3: 42.487437, x4: 62.859718, x5: 42.487437,  form: 'bezierCurveTo' },
						{ x0: 51.476732, x1: 42.487437, x2: 42.248563000000004, x3: 51.715606, x4: 42.248563000000004, x5: 63.098591,  form: 'bezierCurveTo' },
						{ x0: 42.248563000000004, x1: 74.482028, x2: 51.476732000000005, x3: 83.709746, x4: 62.859718, x5: 83.709746,  form: 'bezierCurveTo' },
						{ x0: 92.688225, x1: 113.53825,  form: 'lineTo' },
						{ x0: 50.504563, x1: 113.53825,  form: 'lineTo' },
						{ x0: 42.454986, x1: 105.48913, x2: 29.404844999999998, x3: 105.48958, x4: 21.355717999999996, x5: 113.5387,  form: 'bezierCurveTo' },
						{ x0: 13.306591999999997, x1: 121.58783000000001, x2: 13.306591999999997, x3: 134.63797, x4: 21.355717999999996, x5: 142.68710000000002,  form: 'bezierCurveTo' },
						{ x0: 29.404844999999995, x1: 150.73622, x2: 42.455436999999996, x3: 150.73622, x4: 50.504563, x5: 142.68710000000002,  form: 'bezierCurveTo' },
						{ x0: 92.68822499999999, x1: 142.68710000000002,  form: 'lineTo' },
						{ x0: 62.85971799999999, x1: 172.51561,  form: 'lineTo' },
						{ x0: 51.476731999999984, x1: 172.51561, x2: 42.24856299999999, x3: 181.74332, x4: 42.24856299999999, x5: 193.12676000000002,  form: 'bezierCurveTo' },
						{ x0: 42.24856299999999, x1: 204.50975000000003, x2: 51.47673199999999, x3: 213.73791000000003, x4: 62.85971799999999, x5: 213.73791000000003,  form: 'bezierCurveTo' },
						{ x0: 74.24315499999999, x1: 213.73791000000003, x2: 83.47087299999998, x3: 204.50975000000003, x4: 83.47087299999998, x5: 193.12676000000002,  form: 'bezierCurveTo' },
						{ x0: 113.29937999999999, x1: 163.29825000000002,  form: 'lineTo' },
						{ x0: 113.29937999999999, x1: 205.48191000000003,  form: 'lineTo' },
						{ x0: 105.25024999999998, x1: 213.53104000000002, x2: 105.25024999999998, x3: 226.58163000000002, x4: 113.29937999999999, x5: 234.63076000000004,  form: 'bezierCurveTo' },
						{ x0: 121.34850999999999, x1: 242.67989000000003, x2: 134.39909999999998, x3: 242.67989000000003, x4: 142.44822, x5: 234.63076000000004,  form: 'bezierCurveTo' },
						{ x0: 150.49689999999998, x1: 226.58163000000005, x2: 150.49689999999998, x3: 213.53104000000005, x4: 142.44822, x5: 205.48191000000003,  form: 'bezierCurveTo' },
						{ x0: 142.44822, x1: 163.29825000000002,  form: 'lineTo' },
						{ x0: 172.27673, x1: 193.12676000000002,  form: 'lineTo' },
						{ x0: 172.27673, x1: 204.50975000000003, x2: 181.50445, x3: 213.73791000000003, x4: 192.88789, x5: 213.73791000000003,  form: 'bezierCurveTo' },
						{ x0: 204.27087, x1: 213.73791000000003, x2: 213.49859, x3: 204.50975000000003, x4: 213.49859, x5: 193.12676000000002,  form: 'bezierCurveTo' },
						{ x0: 213.49859, x1: 181.74332, x2: 204.27087, x3: 172.51561, x4: 192.88789, x5: 172.51561,  form: 'bezierCurveTo' },
						{ x0: 163.05893, x1: 142.6871,  form: 'lineTo' },
						{ x0: 205.24304, x1: 142.6871,  form: 'lineTo' },
						{ x0: 213.29217, x1: 150.73621999999997, x2: 226.34231, x3: 150.73621999999997, x4: 234.39144000000002, x5: 142.6871,  form: 'bezierCurveTo' },
						{ x0: 242.44056, x1: 134.63797, x2: 242.44056, x3: 121.58737999999998, x4: 234.39144000000002, x5: 113.53824999999999,  form: 'bezierCurveTo' },
					{ form: 'closePath' }, 
					{ form: 'fill' }, 
					{ form: 'stroke' },
				{ form: 'restore' },  
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: 0.63538, 	x1: 9.52383, 	form: 'moveTo' },
				{ x0: 18.23538, x1: 9.52383, 	form: 'lineTo' },
				{ x0: 9.53538, 	x1: 15.52383, 	form: 'moveTo' },
				{ x0: 9.53538, 	x1: 2.5238, 	form: 'lineTo' },
				{ x0: 15.63538, x1: 3.3238, 	form: 'moveTo' },
				{ x0: 4.33538, 	x1: 14.72383, 	form: 'lineTo' },
				{ x0: 9.23538, 	x1: 9.62383, 	form: 'moveTo' },
				{ x0: 3.83538, 	x1: 3.8238, 	form: 'lineTo' },	
				{ x0: 9.23538, 	x1: 9.62383, 	form: 'moveTo' },
				{ x0: 15.83538, x1: 15.12383, 	form: 'lineTo' },
				// Stroke
				{ form: 'lineWidth', value: '0.1' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .5)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .2)' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save'},
				{ x0: 3.53538, 	x1: 14.42383 },
				{ x0: 25.23538, x1: 14.42383 },
				{ x0: 14.16538, x1: 25.22383 },
				{ x0: 14.23538, x1: 4.523800 },
				{ x0: 22.03538, x1: 6.923800 },
				{ x0: 7.33538, 	x1: 21.72383 },
				{ x0: 14.23538, x1: 14.12383 },
				{ x0: 6.83538, 	x1: 6.323800 },	
				{ x0: 21.83538, x1: 22.12383 },
			{ form: 'restore' },
		]
	},

	//____________________ Framework ____________________

	framework: {
		curve: function(ctx) {
			ctx.save();
			ctx.restore();
		},
		outside: [
			{ form: 'save' }, 
				{ form: 'strokeStyle', value: "rgba( 255, 255, 255, 1)" }, 
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, .1)" }, 
				{ form: 'save' }, 
					{ form: 'fillStyle', value: "rgba(255, 255, 255, .1)" }, 
					{ form: 'beginPath' }, 
						{ x0: 154.945, x1: 79.199, x2: 142.947, x3: 73.032, x4: 127.251, x5: 73.304,  form: 'bezierCurveTo' },
						{ x0: 118.271, x1: 73.46, x2: 110.561, x3: 78.341, x4: 108.94, x5: 87.274,  form: 'bezierCurveTo' },
						{ x0: 107.431, x1: 95.585, x2: 114.819, x3: 100.195, x4: 122.505, x5: 103.025,  form: 'bezierCurveTo' },
						{ x0: 135.252, x1: 107.719, x2: 146.349, x3: 112.675, x4: 158.874, x5: 117.894,  form: 'bezierCurveTo' },
						{ x0: 181.643, x1: 127.383, x2: 193.318, x3: 142.75, x4: 191.938, x5: 162.467,  form: 'bezierCurveTo' },
						{ x0: 190.182, x1: 187.554, x2: 175.084, x3: 205.547, x4: 151.089, x5: 211.479,  form: 'bezierCurveTo' },
						{ x0: 119.735, x1: 219.231, x2: 89.288, x3: 207.423, x4: 63.563, x5: 190.939,  form: 'bezierCurveTo' },
						{ x0: 70.056, x1: 181.048, x2: 77.589, x3: 174.296, x4: 84.043, x5: 164.465,  form: 'bezierCurveTo' },
						{ x0: 98.905, x1: 170.791, x2: 110.581, x3: 179.339, x4: 126.129, x5: 180.672,  form: 'bezierCurveTo' },
						{ x0: 137.092, x1: 181.612, x2: 149.514, x3: 181.089, x4: 151.977, x5: 168.212,  form: 'bezierCurveTo' },
						{ x0: 154.197, x1: 156.6, x2: 144.091, x3: 150.375, x4: 134.234, x5: 146.898,  form: 'bezierCurveTo' },
						{ x0: 122.499, x1: 142.759, x2: 110.786, x3: 137.696, x4: 99.278, x5: 132.996,  form: 'bezierCurveTo' },
						{ x0: 78.005, x1: 124.307, x2: 69.349, x3: 107.312, x4: 70.806, x5: 87.291,  form: 'bezierCurveTo' },
						{ x0: 70.806, x1: 75.552, x2: 80.546, x3: 51.825, x4: 104.427, x5: 44.445,  form: 'bezierCurveTo' },
						{ x0: 141.119, x1: 33.105, x2: 161.335, x3: 44.717, x4: 187.942, x5: 61.816,  form: 'bezierCurveTo' },
						{ x0: 180.875, x1: 71.162, x2: 175.442, x3: 77.807, x4: 168.461, x5: 87.041,  form: 'bezierCurveTo' },
					{ form: 'closePath'},
					{ form: 'fill' }, 
					{ form: 'stroke' }, 
				{ form: 'restore' }, 
			{ form: 'restore' }, 
		],

		inside: [
			{ form: 'save' },
				{ x0: 22.23538, x1: 9.0238, form: 'moveTo' },
				{ x0: 16.23538, x1: 7.4000,	form: 'lineTo' },
				{ x0: 11.63538, x1: 10.500,	form: 'lineTo' },
				{ x0: 13.23538, x1: 13.981,	form: 'lineTo' },
				{ x0: 18.23538, x1: 17.101,	form: 'lineTo' },
				{ x0: 22.63538, x1: 18.701,	form: 'lineTo' },
				{ x0: 22.63538, x1: 23.201,	form: 'lineTo' },
				{ x0: 18.43538, x1: 25.901,	form: 'lineTo' },
				{ x0: 11.13538, x1: 24.501,	form: 'lineTo' },
				// Stroke
				{ form: 'lineWidth', value: '0.1' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .5)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .2)' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save' },
				{ x0: 25.23538, x1: 10.02383 },
				{ x0: 18.23538, x1: 8.500 },
				{ x0: 13.23538, x1: 12.0001 },
				{ x0: 15.23538, x1: 16.101 },
				{ x0: 20.23538, x1: 19.101 },
				{ x0: 25.23538, x1: 21.101 },
				{ x0: 25.23538, x1: 26.101 },
				{ x0: 20.23538, x1: 29.101 },
				{ x0: 13.23538, x1: 27.901 },
			{ form: 'restore' },
		],
	},

	//____________________ Javascript ____________________

	javascript: {
		curve: function(ctx) {
			ctx.save();
			ctx.restore();
		},
		outside: [
			{ form: 'save' },
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, .1)" }, 
				{ form: 'beginPath' }, 
					{ x0: 0, x1: 0,  form: 'moveTo' },
					{ x0: -40.763, x1: 0,  form: 'lineTo' },
					{ x0: -43.596, x1: -30.66,  form: 'lineTo' },
					{ x0: -43.535999999999994, x1: -30.468,  form: 'lineTo' },
					{ x0: -8.91, x1: -30.468,  form: 'lineTo' },
					{ x0: -10.04, x1: -43.437,  form: 'lineTo' },
					{ x0: -21.085, x1: -46.620999999999995,  form: 'lineTo' },
					{ x0: -32.299, x1: -43.388999999999996,  form: 'lineTo' },
					{ x0: -32.972, x1: -35.53999999999999,  form: 'lineTo' },
					{ x0: -43.152, x1: -35.53999999999999,  form: 'lineTo' },
					{ x0: -41.697, x1: -51.224999999999994,  form: 'lineTo' },
					{ x0: -21.085000000000004, x1: -57.077999999999996,  form: 'lineTo' },
					{ x0: -0.4730000000000061, x1: -51.224999999999994,  form: 'lineTo' },
					{ x0: 2.363999999999994, x1: -20.443999999999996,  form: 'lineTo' },
					{ x0: -34.378, x1: -20.443999999999996,  form: 'lineTo' },
					{ x0: -33.91, x1: -10.179999999999996,  form: 'lineTo' },
					{ x0: -8.406999999999996, x1: -10.179999999999996,  form: 'lineTo' },
					{ x0: -8.031999999999996, x1: -16.054999999999996,  form: 'lineTo' },
					{ x0: 2.239, x1: -16.054999999999996,  form: 'lineTo' },
				{ form: 'closePath' }, 
				{ form: 'fill' },
				{ form: 'stroke' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: -28.596, x1: -33.66, form: 'moveTo' },
				{ x0: -14.596, x1: -39.66,	form: 'lineTo' },
				{ x0: -3.5960, x1: -33.66,	form: 'lineTo' },
				{ x0: -2.9960, x1: -19.66,	form: 'lineTo' },
				{ x0: -28.5960, x1: -19.66,	form: 'lineTo' },
				{ x0: -27.2960, x1: -3.66,	form: 'lineTo' },
				{ x0: -4.2960, x1: -3.66,	form: 'lineTo' },
				// Stroke
				{ form: 'lineWidth', value: '0.1' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .5)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .2)' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save' }, 
				{ x0: -14.596, x1: -16.66 },
				{ x0: -7.596, x1: -19.66 },
				{ x0: -1.596, x1: -16.66 },
				{ x0: -1.196, x1: -9.66 },
				{ x0: -14.196, x1: -9.66 },
				{ x0: -13.896, x1: -1.96 },
				{ x0: -1.200, x1: -1.96  },
			{ form: 'restore' },	
		],
	},

	//____________________ Iceberg ____________________

	iceberg: {
		curve: function(ctx) {
			ctx.save();
			ctx.restore();
		},
		outside: [
			{ form: 'save' }, 			
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' }, 
			{ form: 'restore' },
		],
		arc: [
			{ form: 'save' }, 
			{ form: 'restore' },	
		],
	},
};

export { constellations };
