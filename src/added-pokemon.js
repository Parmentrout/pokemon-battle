export const getCustomPokemon = () => [
    {
        name: 'blippers',
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
    }
];