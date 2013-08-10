exports.BattleMovedex = {
        "lunardance": {
		num: 461,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user faints and the Pokemon brought out to replace it has its HP and PP fully restored along with having any major status condition cured. Fails if the user is the last unfainted Pokemon in its party.",
		shortDesc: "User faints. Replacement is fully healed, with PP.",
		id: "lunardance",
		isViable: true,
		name: "Lunar Dance",
		pp: 20,
		priority: 0,
		isSnatchable: true,
		boosts: {
			spa: 1,
			spe: 1
		},
		target: "self",
		type: "Psychic"
	},         
	"fairywind": {
		num: 1001,
	        accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "Deals damage to one adjacent target by summoning a mystical wind that has a chance to encloak the user with mystical energy that boosts speed.",
		shortDesc: "Deals damage and has 10% chance to raise speed.",
		id: "fairywind",
		isViable: true,
		name: "Fairy Wind",
		pp: 15,
		priority: 0,
		secondary: {
			chance: 10,
			self: {
				boosts: {
					spd: 1
				}
			}
		},
		target: "normal",
		type: "Fairy"
	},
		"mysticcrash": {
		num: 1002,
	        accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Deals damage to one adjacent target by crashing into the target with a cloak of mystical energy.",
		shortDesc: "Deals damage and has recoil Basically Double Edge for faries.",
		id: "mysticcrash",
		isViable: true,
		name: "Mystic Crash",
		pp: 15,
		priority: 0,
		isContact: true,
		recoil: [22,100],
		secondary: false,
		target: "normal",
		type: "Fairy"
	},        
        "paraboliccharge": {
                num: 1033,
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Deals damage to all targets, including its ally. The user recovers half of the HP lost by the target, rounded up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
                shortDesc: "User recovers 50% of the damage dealt.",
                id: "paraboliccharge",
                name: "Parabolic Charge",
                pp: 16,
                priority: 0,
                drain: [1,2],
                secondary: false,
                target: "normal",
                type: "Electric"
        },
        "moonblast": {
                num: 1035,
                accuracy: 100,
                basePower: 110,
                category: "Special",
                desc: "Deals damage to one adjacent target with a ???% chance to lower Special Attack",
                shortDesc: "30% chance to lower SpA.",
                id: "moonblast",
                name: "Moonblast",
                pp: 25,
                priority: 0,
                secondary: {
                        chance: 30,
                        boosts: {
                                spa: -1
                        }
                },
                target: "normal",
                type: "Fairy"
        },
        "fairywind": {
                num: 1037,
                accuracy: 100,
                basePower: 85,
                category: "Special",
                desc: "Deals massive damage to all adjacent foes.",
                shortDesc: "Damages all adjacent foes.",
                id: "fairywind",
                name: "Fairy Wind",
                pp: 25,
                priority: 0,
                secondary: false,
                target: "allAdjacentFoes",
                type: "Fairy"
        },
        "drainingkiss": {
                num: 1039,
                accuracy: 100,
                basePower: 80,
                category: "Special",
                desc: "Deals damage to one adjacent target. The user recovers half of the HP lost by the target, rounded up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
                shortDesc: "User recovers 50% of the damage dealt.",
                id: "drainingkiss",
                name: "Draining Kiss",
                pp: 16,
                priority: 0,
                drain: [1,2],
                secondary: false,
                target: "normal",
                type: "Fairy"
        }
};
