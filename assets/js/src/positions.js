const positions = {

	cameraOffset: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
	scaleSize: { x: 4 , y: 4 },

	//____________________ CSS ____________________

	css: {
		curve: function(ctx) {
			ctx.save();
			ctx.strokeStyle="rgba(0,0,0,0)";
			ctx.miterLimit=4;
			ctx.scale(0.27,0.27);
			ctx.translate( window.innerWidth * 1.8, window.innerHeight * 1 );
			ctx.save();
			ctx.fillStyle="rgba(255, 255, 255, 0.1)";
			ctx.moveTo(124.46,208.59);
			ctx.lineTo(129.525,265.107);
			ctx.lineTo(256,265.107);
			ctx.lineTo(256,208.59);
			ctx.moveTo(119.419,150.715);
			ctx.lineTo(256,150.715);
			ctx.lineTo(256,94.197);
			ctx.lineTo(114.281,94.197);
			ctx.moveTo(256,355.372);
			ctx.lineTo(255.752,355.438);
			ctx.lineTo(192.808,338.442);
			ctx.lineTo(188.785,293.366);
			ctx.lineTo(132.049,293.366);
			ctx.lineTo(139.96800000000002,382.10699999999997);
			ctx.lineTo(255.74,414.24699999999996);
			ctx.lineTo(256,414.174);
			ctx.fill();
			ctx.stroke();
			ctx.restore();
			ctx.save();
			ctx.fillStyle="rgba(255, 255, 255, 0)";
			ctx.moveTo(255.805,208.59);
			ctx.lineTo(255.805,265.107);
			ctx.lineTo(325.4,265.107);
			ctx.lineTo(318.84,338.40600000000006);
			ctx.lineTo(255.80499999999998,355.41900000000004);
			ctx.lineTo(255.80499999999998,414.21900000000005);
			ctx.lineTo(371.669,382.107);
			ctx.lineTo(372.519,372.55800000000005);
			ctx.lineTo(385.799,223.76600000000005);
			ctx.lineTo(387.179,208.59000000000006);
			ctx.lineTo(397.38199999999995,94.19700000000006);
			ctx.lineTo(255.805,94.19700000000006);
			ctx.lineTo(255.805,150.71500000000006);
			ctx.lineTo(335.444,150.71500000000006);
			ctx.lineTo(330.3,208.59);
			ctx.fill();
			ctx.stroke();
			ctx.restore();
			ctx.restore();	
		},
		outside: [
			{ form: 'begin' }, 
			{ x: 0.000,   	y: 19.232 },  
			{ x: 9.635,   	y: 23.250 },  
			{ x: 20.800,   	y: 19.232 },  
			{ x: 24.000,   	y: 0.750  },  
			{ x: 3.630,   	y: 0.750  },  
			{ x: 2.815,   	y: 4.868  },  
			{ x: 19.485,   	y: 4.868  },  
			{ x: 18.960,   	y: 7.515  },  
			{ x: 2.2750,   	y: 7.515  },  
			{ x: 1.4750,   	y: 11.633 },  
			{ x: 18.145,   	y: 11.633 },  
			{ x: 17.205,   	y: 16.510 },  
			{ x: 10.500,   	y: 18.739 },  
			{ x: 4.6800,   	y: 16.510 },  
			{ x: 5.0800,   	y: 14.471 },  
			{ x: 1.4750,   	y: 14.471 },  
			{ x: 0.0000,   	y: 19.142 }, 
			{ size: '0.1', 	form: 'width'},
			{ color: 'rgba(255, 255, 255, .0)',	form: 'strokeStyle'},
			{ color: 'rgba(255, 255, 255, 0)', 	form: 'fillStyle'},
			{ form: 'fill' },
			{ form: 'stroke'}, 
			{ form: 'restore' }, 
			{ form: 'save' },
			{ form: 'restore' }, 
		], 
		inside: [
			{ x: 3.175,   	y: 2.750  },  
			{ x: 21.500,   	y: 2.750  },  
			{ x: 18.700,   	y: 17.900 },  
			{ x: 9.700,   	y: 21.000 },  
			{ x: 1.700,   	y: 17.500 },  
			{ x: 2.175,  	y: 9.750, form: 'move' },  
			{ x: 20.175,  	y: 9.750  },  
			{ size: '.1', 	form: 'width'},
			{ color: 'rgba(255, 255, 255, .3)',	form: 'strokeStyle'},
			{ form: 'stroke'}, 
			{ form: 'restore' }, 
			{ form: 'restore' }, 
		],
	},  

	//____________________ WEBPACK ____________________

	webpack: {
		curve: function(ctx) {
			ctx.save();
			ctx.strokeStyle="rgba(255, 255, 255, 1)";
			ctx.miterLimit=4;
			ctx.scale(0.1007936507936508,0.1007936507936508);
			ctx.scale(positions.scaleSize.x * 9, positions.scaleSize.y * 9);
			ctx.translate( window.innerWidth / 1.63 - window.innerWidth / 2, positions.cameraOffset.y - (window.innerHeight / 2.01));
			ctx.save();
			ctx.restore();
			ctx.save();
			ctx.save();
			ctx.fillStyle="rgba(255, 255, 255, 0.1)";
			ctx.lineWidth=0.036011;
			ctx.beginPath();
			ctx.moveTo(24.765896,21.456033);
			ctx.lineTo(13.778953000000001,27.671524);
			ctx.lineTo(13.778953000000001,22.831661);
			ctx.lineTo(20.624636000000002,19.064907);
			ctx.closePath();
			ctx.moveTo(25.518523000000002,20.775432000000002);
			ctx.lineTo(25.518523000000002,7.7790779);
			ctx.lineTo(21.499695000000003,10.101786);
			ctx.lineTo(21.499695000000003,18.456328);
			ctx.closePath();
			ctx.moveTo(1.8269196,21.456033);
			ctx.lineTo(12.81386,27.671524);
			ctx.lineTo(12.81386,22.831661);
			ctx.lineTo(5.9645745,19.064907);
			ctx.closePath();
			ctx.moveTo(1.0742942,20.775432);
			ctx.lineTo(1.0742942,7.7790779);
			ctx.lineTo(5.0931101,10.101786);
			ctx.lineTo(5.0931101,18.456328);
			ctx.closePath();
			ctx.moveTo(1.5460332,6.9364181);
			ctx.lineTo(12.81386,0.56248086);
			ctx.lineTo(12.81386,5.2403071);
			ctx.lineTo(5.5936619,9.212315);
			ctx.lineTo(5.5360347,9.2446886);
			ctx.closePath();
			ctx.moveTo(25.046772,6.9364181);
			ctx.lineTo(13.778953,0.56248086);
			ctx.lineTo(13.778953,5.2403071);
			ctx.lineTo(20.999144,9.2087097);
			ctx.lineTo(21.056784,9.2410837);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			ctx.restore();
			ctx.save();
			ctx.fillStyle="rgba(255, 255, 255, 0.2)";
			ctx.lineWidth=0.036011;
			ctx.beginPath();
			ctx.moveTo(12.81386,21.729723);
			ctx.lineTo(6.058206,18.013396);
			ctx.lineTo(6.058206,10.65636);
			ctx.lineTo(12.81386,14.556344);
			ctx.closePath();
			ctx.moveTo(13.778953,21.729723);
			ctx.lineTo(20.534603,18.016993);
			ctx.lineTo(20.534603,10.65636);
			ctx.lineTo(13.778953000000001,14.556344);
			ctx.closePath();
			ctx.moveTo(13.296402,14.275452);
			ctx.closePath();
			ctx.moveTo(6.5155469,9.8064974);
			ctx.lineTo(13.296402,6.0793616);
			ctx.lineTo(20.077273,9.8064974);
			ctx.lineTo(13.296402,13.720887);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			ctx.restore();
			ctx.restore();
			ctx.restore();
		},
		inside: [
			{ x: 13.296402,   y: 0.562480, form: 'move' },  
			{ x: 13.296402,   y: 5.590307 },  
			{ x: 5.5360347,   y: 9.806497 },  
			{ x: 5.6360347,   y: 18.51339 },  
			{ x: 13.296402,   y: 22.63166 },  
			{ x: 20.934603,   y: 18.61339 },  
			{ x: 20.934603,   y: 9.806497 },  
			{ x: 13.296402,   y: 5.590307 },  
			{ x: 5.5360347,   y: 9.80649, form: 'move' },  
			{ x: 1.3964020,   y: 7.431660 },  
			{ x: 5.6360347,   y: 18.51339, form: 'move' },  
			{ x: 1.5460332,   y: 21.12972 },  
			{ x: 13.296402,   y: 22.63166, form: 'move' },  
			{ x: 13.296402,   y: 27.67152 },  
			{ x: 20.934603,   y: 18.61339, form: 'move' },  
			{ x: 25.046772,   y: 20.83166 },  
			{ x: 20.934603,   y: 9.806497, form: 'move' },  
			{ x: 25.018523,   y: 7.431660 },  
			{ x: 20.934603,   y: 9.806497, form: 'move' },  
			{ x: 13.296402,   y: 14.10649 },  
			{ x: 5.5360347,   y: 9.806497 },  
			{ x: 13.296402,   y: 14.106497, form: 'move' },  
			{ x: 13.296402,   y: 22.63166 }, 
			{ size: '.1', 	form: 'width'},
			{ color: 'rgba(255, 255, 255, .3)',	form: 'strokeStyle'},
			{ form: 'stroke'},  		
		],
	},  

	//____________________ SVG ____________________

	svg: {
		curve: function(ctx) {
			ctx.save();
			ctx.strokeStyle="rgba(255, 255, 255, 1)";
			ctx.fillStyle="rgba(255, 255, 255, .1)";
			ctx.miterLimit=4;
			ctx.scale(0.1007936507936508,0.1007936507936508);
			ctx.scale(positions.scaleSize.x * 1.2, positions.scaleSize.y * 1.2);
			ctx.save();
			ctx.save();
			ctx.transform(0.79724742, 0, 0, 0.8203404, 2.5782194, 39.006769);
			ctx.translate( window.innerWidth / 1.1 - window.innerWidth / 2, positions.cameraOffset.y - (window.innerHeight / 3));
			ctx.save();
			ctx.beginPath();
			ctx.moveTo(245.23538,153.52383);
			ctx.bezierCurveTo(259.24687,139.51234,259.24642,116.71301,245.23493,102.70107);
			ctx.bezierCurveTo(238.44777,95.913465,229.42287,92.175775,219.82377,92.175775);
			ctx.bezierCurveTo(217.54456,92.175775,215.30051,92.383549,213.11189,92.793239);
			ctx.bezierCurveTo(222.65014,86.268845,228.8311,75.297803,228.8311,63.098591);
			ctx.bezierCurveTo(228.8311,43.28293,212.70986,27.16169,192.89419999999998,27.16169);
			ctx.bezierCurveTo(180.67065,27.16169,169.68068,33.367437,163.16124,42.93769);
			ctx.bezierCurveTo(165.31831,31.560563000000002,161.93487,19.401014000000004,153.29172,10.757859000000003);
			ctx.bezierCurveTo(146.50456,3.9702535000000037,137.47966,0.23211268000000373,127.88056,0.23211268000000373);
			ctx.bezierCurveTo(118.28146000000001,0.23211268000000373,109.25656000000001,3.9702535000000037,102.46941000000001,10.757859000000003);
			ctx.bezierCurveTo(93.825803,19.401014,90.442817,31.561014,92.599887,42.938141);
			ctx.bezierCurveTo(86.080451,33.367887,75.090028,27.16169,62.866479,27.16169);
			ctx.bezierCurveTo(43.050816999999995,27.16169,26.929576999999995,43.28293,26.929576999999995,63.098591);
			ctx.bezierCurveTo(26.929576999999995,75.298254,33.11008399999999,86.268845,42.648337999999995,92.792789);
			ctx.bezierCurveTo(40.459717999999995,92.383549,38.216562999999994,92.175775,35.93690099999999,92.175775);
			ctx.bezierCurveTo(26.337802999999994,92.175775,17.31335199999999,95.913916,10.525746999999992,102.70152);
			ctx.bezierCurveTo(3.7381409,109.48913,0,118.51403,0,128.11268);
			ctx.bezierCurveTo(0,137.71177,3.7381409,146.73622,10.525747,153.52428);
			ctx.bezierCurveTo(17.313352000000002,160.31144,26.338253,164.04958,35.936901,164.04958);
			ctx.bezierCurveTo(38.216113,164.04958,40.459268,163.84179999999998,42.648337999999995,163.43211);
			ctx.bezierCurveTo(33.11008399999999,169.95650999999998,26.929576999999995,180.92755,26.929576999999995,193.12676);
			ctx.bezierCurveTo(26.929576999999995,212.94242,43.050816999999995,229.06321,62.866479,229.06321);
			ctx.bezierCurveTo(75.090028,229.06321,86.080901,222.85746,92.599887,213.28721);
			ctx.bezierCurveTo(90.44281699999999,224.66478999999998,93.82625399999999,236.82478999999998,102.46941,245.46794);
			ctx.bezierCurveTo(109.25701,252.2551,118.28191,255.99324,127.88056,255.99324);
			ctx.bezierCurveTo(137.47966,255.99324,146.50456,252.2551,153.29172,245.46749);
			ctx.bezierCurveTo(161.93487,236.82434,165.31786,224.66389,163.16079,213.28676000000002);
			ctx.bezierCurveTo(169.68022,222.85701,180.67065,229.06321000000003,192.89419999999998,229.06321000000003);
			ctx.bezierCurveTo(212.70986,229.06321000000003,228.8311,212.94242000000003,228.8311,193.12676000000002);
			ctx.bezierCurveTo(228.8311,180.92755000000002,222.65014,169.95651,213.11234,163.43211000000002);
			ctx.bezierCurveTo(215.30095999999998,163.84180000000003,217.54456,164.04958000000002,219.82377,164.04958000000002);
			ctx.bezierCurveTo(229.42287,164.04958000000002,238.44777,160.31144000000003,245.23538,153.52383000000003);
			ctx.fill();
			ctx.stroke();
			ctx.restore();
			ctx.save();
			ctx.fillStyle="rgba(255, 255, 255, .15)";
			ctx.beginPath();
			ctx.moveTo(234.39144,113.53825);
			ctx.bezierCurveTo(226.34231,105.48958,213.29217,105.48958,205.24303999999998,113.53825);
			ctx.lineTo(163.05892999999998,113.53825);
			ctx.lineTo(192.88788999999997,83.70974600000001);
			ctx.bezierCurveTo(204.27086999999997,83.70974600000001,213.49858999999998,74.48202800000001,213.49858999999998,63.09859100000001);
			ctx.bezierCurveTo(213.49858999999998,51.715606000000015,204.27086999999997,42.487437000000014,192.88788999999997,42.487437000000014);
			ctx.bezierCurveTo(181.50444999999996,42.487437000000014,172.27672999999996,51.715606000000015,172.27672999999996,63.09859100000001);
			ctx.lineTo(142.44822,92.927549);
			ctx.lineTo(142.44822,50.743437);
			ctx.bezierCurveTo(150.49689999999998,42.69431,150.49689999999998,29.644169,142.44777,21.595042);
			ctx.bezierCurveTo(134.39865,13.545916,121.34850999999999,13.545916,113.29937999999999,21.595042);
			ctx.bezierCurveTo(105.25024999999998,29.644168999999998,105.25024999999998,42.69431,113.29937999999999,50.743437);
			ctx.lineTo(113.29937999999999,92.927549);
			ctx.lineTo(83.470873,63.098591);
			ctx.bezierCurveTo(83.470873,51.715606,74.243155,42.487437,62.859718,42.487437);
			ctx.bezierCurveTo(51.476732,42.487437,42.248563000000004,51.715606,42.248563000000004,63.098591);
			ctx.bezierCurveTo(42.248563000000004,74.482028,51.476732000000005,83.709746,62.859718,83.709746);
			ctx.lineTo(92.688225,113.53825);
			ctx.lineTo(50.504563,113.53825);
			ctx.bezierCurveTo(42.454986,105.48913,29.404844999999998,105.48958,21.355717999999996,113.5387);
			ctx.bezierCurveTo(13.306591999999997,121.58783000000001,13.306591999999997,134.63797,21.355717999999996,142.68710000000002);
			ctx.bezierCurveTo(29.404844999999995,150.73622,42.455436999999996,150.73622,50.504563,142.68710000000002);
			ctx.lineTo(92.68822499999999,142.68710000000002);
			ctx.lineTo(62.85971799999999,172.51561);
			ctx.bezierCurveTo(51.476731999999984,172.51561,42.24856299999999,181.74332,42.24856299999999,193.12676000000002);
			ctx.bezierCurveTo(42.24856299999999,204.50975000000003,51.47673199999999,213.73791000000003,62.85971799999999,213.73791000000003);
			ctx.bezierCurveTo(74.24315499999999,213.73791000000003,83.47087299999998,204.50975000000003,83.47087299999998,193.12676000000002);
			ctx.lineTo(113.29937999999999,163.29825000000002);
			ctx.lineTo(113.29937999999999,205.48191000000003);
			ctx.bezierCurveTo(105.25024999999998,213.53104000000002,105.25024999999998,226.58163000000002,113.29937999999999,234.63076000000004);
			ctx.bezierCurveTo(121.34850999999999,242.67989000000003,134.39909999999998,242.67989000000003,142.44822,234.63076000000004);
			ctx.bezierCurveTo(150.49689999999998,226.58163000000005,150.49689999999998,213.53104000000005,142.44822,205.48191000000003);
			ctx.lineTo(142.44822,163.29825000000002);
			ctx.lineTo(172.27673,193.12676000000002);
			ctx.bezierCurveTo(172.27673,204.50975000000003,181.50445,213.73791000000003,192.88789,213.73791000000003);
			ctx.bezierCurveTo(204.27087,213.73791000000003,213.49859,204.50975000000003,213.49859,193.12676000000002);
			ctx.bezierCurveTo(213.49859,181.74332,204.27087,172.51561,192.88789,172.51561);
			ctx.lineTo(163.05893,142.6871);
			ctx.lineTo(205.24304,142.6871);
			ctx.bezierCurveTo(213.29217,150.73621999999997,226.34231,150.73621999999997,234.39144000000002,142.6871);
			ctx.bezierCurveTo(242.44056,134.63797,242.44056,121.58737999999998,234.39144000000002,113.53824999999999);
			ctx.fill();
			ctx.stroke();
			ctx.restore();
			ctx.restore();
			ctx.restore();
			ctx.restore();
		},
		inside: [
			{  x: 245.23538, y: 153.52383 , form: 'move' },
			{  x: 225.23538, y: 133.52383 },
		],
	},
};

export { positions };

