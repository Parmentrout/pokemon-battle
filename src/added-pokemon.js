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
    }
];