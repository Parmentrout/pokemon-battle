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
    {
        name: 'ninjascare',
        stats: [
            { base_stat: 200 }, //hp
            { base_stat: 150 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 200 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Nightmare" } }, 
            { ability: { name: "Trick or treat" } }, 
            { ability: { name: "Shadow Ball" } },
        ],
        sprites: { other: { home: { front_default: '/ninjascare.webp'}}}
    },
    {
        name: 'fatley',
        stats: [
            { base_stat: 200 }, //hp
            { base_stat: 20 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 20 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Butt Ball" } }, 
            { ability: { name: "Scratch a little" } }, 
            { ability: { name: "Me first" } },
        ],
        sprites: { other: { home: { front_default: '/fatley.webp'}}}
    },
    {
        name: 'tyro',
        stats: [
            { base_stat: 235 }, //hp
            { base_stat: 91 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 119 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Headbutt" } }, 
            { ability: { name: "Super ultra punch" } }, 
        ],
        sprites: { other: { home: { front_default: '/tyro.webp'}}}
    },
    {
        name: 'oklaweos',
        stats: [
            { base_stat: 250 }, //hp
            { base_stat: 250 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 250 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "5 Flames" } }, 
            { ability: { name: "Dragon ultra pulse" } }, 
            { ability: { name: "Mystic portal" } },
        ],
        sprites: { other: { home: { front_default: '/oklaweos.webp'}}}
    },
    {
        name: 'oklawnos',
        stats: [
            { base_stat: 250 }, //hp
            { base_stat: 250 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 250 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "5 Flames" } }, 
            { ability: { name: "Dragon ultra pulse" } }, 
            { ability: { name: "Mystic portal" } },
        ],
        sprites: { other: { home: { front_default: '/oklawnos.webp'}}}
    },
    {
        name: 'gabba',
        stats: [
            { base_stat: 20 }, //hp
            { base_stat: 2 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 1 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Touch" } }, 
            { ability: { name: "Me First" } }, 
            { ability: { name: "Weak Bite" } },
        ],
        sprites: { other: { home: { front_default: '/gabba.webp'}}}
    },
    {
        name: 'trunk',
        stats: [
            { base_stat: 205 }, //hp
            { base_stat: 58 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 42 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Trunk hit" } }, 
            { ability: { name: "Stomp" } }, 
        ],
        sprites: { other: { home: { front_default: '/trunk.webp'}}}
    },
    {
        name: 'stoneflame',
        stats: [
            { base_stat: 350 }, //hp
            { base_stat: 200 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 150 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Erupt" } }, 
            { ability: { name: "Stone blade" } }, 
            { ability: { name: "Flame spin" } }, 
        ],
        sprites: { other: { home: { front_default: '/stoneflame.webp'}}}
    },
    {
        name: 'zonami',
        stats: [
            { base_stat: 289 }, //hp
            { base_stat: 169 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 188 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Death ray" } }, 
            { ability: { name: "Giant scratch" } },  
        ],
        sprites: { other: { home: { front_default: '/zonami.webp'}}}
    },
    {
        name: 'oceano',
        stats: [
            { base_stat: 400 }, //hp
            { base_stat: 250 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 150 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Tidal wave" } }, 
            { ability: { name: "Aqua tail" } },  
            { ability: { name: "Water gun" } }, 
        ],
        sprites: { other: { home: { front_default: '/oceano.webp'}}}
    },
    {
        name: 'Future Teller',
        stats: [
            { base_stat: 300 }, //hp
            { base_stat: 150 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 150 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Future Strike" } }, 
            { ability: { name: "Quill Strike" } },  
        ],
        sprites: { other: { home: { front_default: '/future-teller.jpeg'}}}
    },
    {
        name: 'Super Strike',
        stats: [
            { base_stat: 300 }, //hp
            { base_stat: 188 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 145 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Mace Attack" } }, 
            { ability: { name: "Precalculus Strike" } },  
        ],
        sprites: { other: { home: { front_default: '/super-strike.jpeg'}}}
    },
    {
        name: 'Zoxarus',
        stats: [
            { base_stat: 520 }, //hp
            { base_stat: 299 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 230 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Super Ultra Mega Punch" } }, 
            { ability: { name: "Super Ultra Bite" } },  
            { ability: { name: "Super Ultra Death Ray" } },
        ],
        sprites: { other: { home: { front_default: '/zoxarus.webp'}}}
    },
    {
        name: 'Flame Hero',
        stats: [
            { base_stat: 520 }, //hp
            { base_stat: 250 }, //attack
            { base_stat: 0 }, // defense
            { base_stat: 230 }, // special attack
        ],
        abilities: [ 
            { ability: { name: "Fire Spin" } }, 
            { ability: { name: "Ultra Flame" } },  
            { ability: { name: "Fireball Shower" } },
        ],
        sprites: { other: { home: { front_default: '/flamehero.webp'}}}
    },
];