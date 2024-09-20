export const getCustomPokemon = () => [
    {
        name: 'blippers',
        evolvesTo: 'flippers',
        stats: [
            { base_stat: 99 }, //hp
            { base_stat: 70 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 85}, // special attack
        ],
        abilities: [ 
            { ability: { name: "water gun" } }, 
            { ability: { name: "water tornado" } },
            { ability: { name: "water punch" } },
        ],
        sprites: { other: { home: { front_default: '/blippers.webp'}}}
    },
    {
        name: 'grassaconda',
        stats: [
            { base_stat: 205 }, //hp
            { base_stat: 100 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 205}, // special attack
        ],
        abilities: [ 
            { ability: { name: "overgrow" } }, 
            { ability: { name: "leaf storm" } },
            { ability: { name: "vine whip" } },
        ],
        sprites: { other: { home: { front_default: '/grassaconda.webp'}}}
    },
    {
        name: 'flippers',
        evolvesTo: 'clippers',
        stats: [
            { base_stat: 145 }, //hp
            { base_stat: 101 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 161}, // special attack
        ],
        abilities: [ 
            { ability: { name: "rain storm" } }, 
            { ability: { name: "water cannon" } },
        ],
        sprites: { other: { home: { front_default: '/flippers.webp'}}}
    },
    {
        name: 'keros',
        evolvesTo: 'keros mega',
        stats: [
            { base_stat: 210 }, //hp
            { base_stat: 105 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 210}, // special attack
        ],
        abilities: [ 
            { ability: { name: "nightmare blade" } }, 
            { ability: { name: "shadow consume" } },
        ],
        sprites: { other: { home: { front_default: '/keros.webp'}}}
    },
    {
        name: 'keros mega',
        stats: [
            { base_stat: 220 }, //hp
            { base_stat: 115 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 220}, // special attack
        ],
        abilities: [ 
            { ability: { name: "double blade" } }, 
            { ability: { name: "nightmare blade" } }, 
            { ability: { name: "shadow consume" } },
        ],
        sprites: { other: { home: { front_default: '/keros-mega.webp'}}}
    },
    {
        name: 'clippers',
        stats: [
            { base_stat: 189 }, //hp
            { base_stat: 144 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 124}, // special attack
        ],
        abilities: [ 
            { ability: { name: "super water punch" } }, 
            { ability: { name: "water ball" } }, 
            { ability: { name: "water tornado" } },
        ],
        sprites: { other: { home: { front_default: '/clippers.webp'}}}
    },
    {
        name: 'dragostrike',
        stats: [
            { base_stat: 510 }, //hp
            { base_stat: 150 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 250}, // special attack
        ],
        abilities: [ 
            { ability: { name: "Rare Flames" } }, 
            { ability: { name: "Dragon Claw" } }, 
            { ability: { name: "Rare Absorb" } },
        ],
        sprites: { other: { home: { front_default: '/dragostrike.webp'}}}
    },
    {
        name: 'gigantamaxzilla',
        stats: [
            { base_stat: 499 }, //hp
            { base_stat: 199 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 230}, // special attack
        ],
        abilities: [ 
            { ability: { name: "underground punch" } }, 
            { ability: { name: "tail whack" } },
        ],
        sprites: { other: { home: { front_default: '/gigantamaxzilla.webp'}}}
    },
    {
        name: 'rhinobasher',
        stats: [
            { base_stat: 182 }, //hp
            { base_stat: 121 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 98}, // special attack
        ],
        abilities: [ 
            { ability: { name: "Mega Basher" } }, 
            { ability: { name: "Call for backup" } },
        ],
        sprites: { other: { home: { front_default: '/rhinobasher.webp'}}}
    },
    {
        name: 'dragogem',
        stats: [
            { base_stat: 515 }, //hp
            { base_stat: 155 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 255}, // special attack
        ],
        abilities: [ 
            { ability: { name: "Diamond Breath" } }, 
            { ability: { name: "Diamond Blade" } }, 
            { ability: { name: "Rare Absorb" } },
        ],
        sprites: { other: { home: { front_default: '/dragogem.webp'}}}
    },
];