
SJTest.run({name:'Enum',

	simpleTest: function() {
		let FRUIT = new Enum("APPLE PEAR");
		assert(FRUIT.APPLE);
		assert(FRUIT.APPLE === 'APPLE');
		assert( ! FRUIT.CHAIR);
		assert(FRUIT.isAPPLE('APPLE'));
		assert(FRUIT.has('APPLE'));
		assert( ! FRUIT.has('legs'));
	},

	callTest: function() {
		// is there a way to make FRUIT.value safe against typos etc?
		let FRUIT = new Enum("APPLE PEAR");
		assert(FRUIT.$APPLE() === 'APPLE');

		let bad = false;
		try {
			FRUIT.$cat();
			bad = true;
		} catch(err) {
			// good :)
		}
		if (bad) throw new Error("$cat should not work for FRUIT");
	},

	concatTest: function() {
		let FRUIT = new Enum("APPLE PEAR", true);
		let FRUIT2 = FRUIT.concat("ORANGE");
		assert(FRUIT2.$ORANGE() === 'ORANGE');
		assert(FRUIT2.has('ORANGE'));
		assert( ! FRUIT.has('ORANGE'));
	}
});