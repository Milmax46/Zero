"use strict";

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

/**@type {(FormatsData | {section: string, column?: number})[]} */
let Formats = [
  // US/UM Singles
  ///////////////////////////////////////////////////////////////////
  {
    section: "US/UM Singles",
  },
  {
    name: "[Gen 7] Random Battle",
    desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3591157/">Sets and Suggestions</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3616946/">Role Compendium</a>`,
    ],

    mod: "gen7",
    team: "random",
    ruleset: [
      "PotD",
      "Pokemon",
      "Sleep Clause Mod",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
  },
  {
    name: "[Gen 7] Unrated Random Battle",

    mod: "gen7",
    team: "random",
    challengeShow: false,
    rated: false,
    ruleset: [
      "PotD",
      "Pokemon",
      "Sleep Clause Mod",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
  },
  {
    name: "[Gen 7] OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3621042/">OU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3621329/">OU Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3638845/">OU Sample Teams</a>`,
    ],

    mod: "gen7",
    ruleset: ["Pokemon", "Standard", "Team Preview"],
    banlist: [
      "Uber",
      "Arena Trap",
      "Power Construct",
      "Shadow Tag",
      "Baton Pass",
    ],
  },
  {
    name: "[Gen 7] Ubers",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3637068/">Ubers Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3623296/">Ubers Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3639330/">Ubers Sample Teams</a>`,
    ],

    mod: "gen7",
    ruleset: ["Pokemon", "Standard", "Team Preview", "Mega Rayquaza Clause"],
    banlist: ["Baton Pass"],
  },
  {
    name: "[Gen 7] UU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3641851/">UU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3641346/">UU Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3621217/">UU Sample Teams</a>`,
    ],

    mod: "gen7",
    ruleset: ["[Gen 7] OU"],
    banlist: ["OU", "UUBL", "Drizzle", "Drought", "Kommonium Z", "Mewnium Z"],
  },
  {
    name: "[Gen 7] RU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3638874/">RU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3622740/">RU Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3622057/">RU Sample Teams</a>`,
    ],

    mod: "gen7",
    ruleset: ["[Gen 7] UU"],
    banlist: ["UU", "RUBL", "Aurora Veil"],
    unbanlist: ["Drought"],
  },
  {
    name: "[Gen 7] NU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3642884/">NU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3622107/">NU Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3612396/">NU Sample Teams</a>`,
    ],

    mod: "gen7",
    ruleset: ["[Gen 7] RU"],
    banlist: ["RU", "NUBL", "Drought"],
    onBegin: function () {
      if (this.rated)
        this.add(
          "html",
          `<div class="broadcast-blue"><strong>NU is currently suspecting Slowbro! For information on how to participate check out the <a href="https://www.smogon.com/forums/threads/3642884/">suspect thread</a>.</strong></div>`
        );
    },
  },
  {
    name: "[Gen 7] PU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3639176/">PU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3614892/">PU Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3614470/">PU Sample Teams</a>`,
    ],

    mod: "gen7",
    ruleset: ["[Gen 7] NU"],
    banlist: ["NU", "PUBL"],
  },
  {
    name: "[Gen 7] LC",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3587196/">LC Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/dex/sm/formats/lc/">LC Banlist</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3621440/">LC Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3588679/">LC Sample Teams</a>`,
    ],

    mod: "gen7",
    maxLevel: 5,
    ruleset: [
      "Pokemon",
      "Standard",
      "Swagger Clause",
      "Team Preview",
      "Little Cup",
    ],
    banlist: [
      "Aipom",
      "Cutiefly",
      "Drifloon",
      "Gligar",
      "Gothita",
      "Meditite",
      "Misdreavus",
      "Murkrow",
      "Porygon",
      "Scyther",
      "Sneasel",
      "Swirlix",
      "Tangela",
      "Torchic",
      "Vulpix-Base",
      "Yanma",
      "Eevium Z",
      "Dragon Rage",
      "Sonic Boom",
    ],
  },
  {
    name: "[Gen 7] Monotype",
    desc: `All the Pok&eacute;mon on a team must share a type.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3621036/">Monotype Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3622349">Monotype Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3599682/">Monotype Sample Teams</a>`,
    ],

    mod: "gen7",
    ruleset: [
      "Pokemon",
      "Standard",
      "Swagger Clause",
      "Same Type Clause",
      "Team Preview",
    ],
    banlist: [
      "Aegislash",
      "Arceus",
      "Blaziken",
      "Darkrai",
      "Deoxys-Base",
      "Deoxys-Attack",
      "Dialga",
      "Genesect",
      "Gengar-Mega",
      "Giratina",
      "Groudon",
      "Ho-Oh",
      "Hoopa-Unbound",
      "Kangaskhan-Mega",
      "Kartana",
      "Kyogre",
      "Kyurem-White",
      "Lucario-Mega",
      "Lugia",
      "Lunala",
      "Magearna",
      "Marshadow",
      "Mawile-Mega",
      "Medicham-Mega",
      "Metagross-Mega",
      "Mewtwo",
      "Naganadel",
      "Necrozma-Dawn-Wings",
      "Necrozma-Dusk-Mane",
      "Palkia",
      "Pheromosa",
      "Rayquaza",
      "Reshiram",
      "Salamence-Mega",
      "Shaymin-Sky",
      "Solgaleo",
      "Tapu Lele",
      "Xerneas",
      "Yveltal",
      "Zekrom",
      "Zygarde",
      "Battle Bond",
      "Shadow Tag",
      "Damp Rock",
      "Smooth Rock",
      "Terrain Extender",
      "Baton Pass",
    ],
  },
  {
    name: "[Gen 7] Anything Goes",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3587441/">Anything Goes</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3591711/">AG Resources</a>`,
    ],

    mod: "gen7",
    ruleset: [
      "Pokemon",
      "Endless Battle Clause",
      "Team Preview",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
    banlist: ["Illegal", "Unreleased"],
  },
  {
    name: "[Gen 7] CAP",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3621207/">CAP Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3626018/">CAP Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3634419/">CAP Sample Teams</a>`,
    ],

    mod: "gen7",
    ruleset: ["[Gen 7] OU", "Allow CAP"],
    banlist: ["Tomohawk + Earth Power", "Tomohawk + Reflect"],
  },
  {
    name: "[Gen 7] CAP LC",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3599594/">CAP LC</a>`,
    ],

    mod: "gen7",
    searchShow: false,
    maxLevel: 5,
    ruleset: ["[Gen 7] LC", "Allow CAP"],
  },
  {
    name: "[Gen 7] Battle Spot Singles",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3601012/">Introduction to Battle Spot Singles</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3605970/">Battle Spot Singles Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3601658/">Battle Spot Singles Roles Compendium</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3593055/">Battle Spot Singles Sample Teams</a>`,
    ],

    mod: "gen7",
    maxForcedLevel: 50,
    teamLength: {
      validate: [3, 6],
      battle: 3,
    },
    ruleset: ["Pokemon", "Standard GBU"],
    requirePentagon: true,
  },
  {
    name: "[Gen 7] Battle Spot Special 12",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3641117/">Battle Spot Special 12</a>`,
    ],

    mod: "gen7",
    forcedLevel: 50,
    teamLength: {
      validate: [3, 6],
      battle: 3,
    },
    ruleset: ["Pokemon", "Standard GBU"],
    banlist: [
      "Articuno",
      "Zapdos",
      "Moltres",
      "Raikou",
      "Entei",
      "Suicune",
      "Regirock",
      "Regice",
      "Registeel",
      "Latias",
      "Latios",
      "Uxie",
      "Mesprit",
      "Azelf",
      "Heatran",
      "Regigigas",
      "Cresselia",
      "Cobalion",
      "Terrakion",
      "Virizion",
      "Tornadus",
      "Thundurus",
      "Landorus",
      "Type: Null",
      "Silvally",
      "Tapu Koko",
      "Tapu Lele",
      "Tapu Bulu",
      "Tapu Fini",
      "Nihilego",
      "Buzzwole",
      "Pheromosa",
      "Xurkitree",
      "Celesteela",
      "Kartana",
      "Guzzlord",
      "Poipole",
      "Naganadel",
      "Stakataka",
      "Blacephalon",
    ],
    onValidateSet: function (set, format) {
      if (set.item) {
        let item = this.getItem(set.item);
        if (item.megaStone)
          return [
            `${set.name || set.species} has ${item.name}, which is banned in ${
              format.name
            }.`,
          ];
      }
    },
  },
  {
    name: "[Gen 7] Ultra Spooky Cup",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3642514/">Ultra Spooky Cup</a>`,
    ],

    mod: "gen7",
    forcedLevel: 50,
    teamLength: {
      validate: [3, 6],
      battle: 3,
    },
    ruleset: ["Pokemon", "Standard GBU"],
    banlist: ["Mega"],
    unbanlist: ["Darkrai", "Hoopa-Base", "Marshadow"],
    onValidateSet: function (set) {
      let spookyMonsList = [
        "Abomasnow",
        "Absol",
        "Aegislash",
        "Aerodactyl",
        "Araquanid",
        "Araquanid-Totem",
        "Arbok",
        "Ariados",
        "Baltoy",
        "Banette",
        "Basculin",
        "Basculin-Blue-Striped",
        "Beheeyem",
        "Bewear",
        "Bisharp",
        "Blacephalon",
        "Cacnea",
        "Cacturne",
        "Carnivine",
        "Carvanha",
        "Chandelure",
        "Claydol",
        "Cofagrigus",
        "Crawdaunt",
        "Croagunk",
        "Crobat",
        "Cubone",
        "Darkrai",
        "Decidueye",
        "Dewpider",
        "Dhelmise",
        "Ditto",
        "Doublade",
        "Drapion",
        "Drifblim",
        "Drifloon",
        "Drowzee",
        "Dusclops",
        "Dusknoir",
        "Duskull",
        "Dustox",
        "Eevee",
        "Ekans",
        "Electivire",
        "Elgyem",
        "Espeon",
        "Espurr",
        "Exploud",
        "Frillish",
        "Froslass",
        "Galvantula",
        "Garbodor",
        "Gastly",
        "Gengar",
        "Gigalith",
        "Glalie",
        "Gligar",
        "Gliscor",
        "Golbat",
        "Golett",
        "Golisopod",
        "Golurk",
        "Gothita",
        "Gothitelle",
        "Gothorita",
        "Gourgeist",
        "Gourgeist-Large",
        "Gourgeist-Small",
        "Gourgeist-Super",
        "Granbull",
        "Grimer",
        "Grimer-Alola",
        "Gulpin",
        "Guzzlord",
        "Haunter",
        "Honchkrow",
        "Honedge",
        "Hoopa",
        "Hoothoot",
        "Houndoom",
        "Houndour",
        "Huntail",
        "Hydreigon",
        "Hypno",
        "Incineroar",
        "Jellicent",
        "Joltik",
        "Kabuto",
        "Kabutops",
        "Koffing",
        "Krokorok",
        "Krookodile",
        "Lampent",
        "Larvesta",
        "Liepard",
        "Litwick",
        "Loudred",
        "Lunatone",
        "Lycanroc-Midnight",
        "Magmortar",
        "Malamar",
        "Mandibuzz",
        "Mareanie",
        "Marowak",
        "Marowak-Alola",
        "Marowak-Alola-Totem",
        "Marshadow",
        "Mawile",
        "Meowstic",
        "Meowstic-F",
        "Meowth-Alola",
        "Mightyena",
        "Mimikyu",
        "Mimikyu-Totem",
        "Misdreavus",
        "Mismagius",
        "Mr. Mime",
        "Muk",
        "Muk-Alola",
        "Murkrow",
        "Naganadel",
        "Nihilego",
        "Noctowl",
        "Noibat",
        "Noivern",
        "Omanyte",
        "Omastar",
        "Palossand",
        "Pancham",
        "Pangoro",
        "Paras",
        "Parasect",
        "Persian-Alola",
        "Phantump",
        "Pikachu",
        "Pinsir",
        "Poipole",
        "Pumpkaboo",
        "Pumpkaboo-Large",
        "Pumpkaboo-Small",
        "Pumpkaboo-Super",
        "Purrloin",
        "Raticate",
        "Raticate-Alola",
        "Raticate-Alola-Totem",
        "Rattata",
        "Rattata-Alola",
        "Rotom",
        "Rotom-Fan",
        "Rotom-Frost",
        "Rotom-Heat",
        "Rotom-Mow",
        "Rotom-Wash",
        "Sableye",
        "Salandit",
        "Salazzle",
        "Salazzle-Totem",
        "Sandygast",
        "Scolipede",
        "Seviper",
        "Sharpedo",
        "Shedinja",
        "Shiftry",
        "Shiinotic",
        "Shuppet",
        "Sigilyph",
        "Silvally",
        "Silvally-Bug",
        "Silvally-Dark",
        "Silvally-Dragon",
        "Silvally-Electric",
        "Silvally-Fairy",
        "Silvally-Fighting",
        "Silvally-Fire",
        "Silvally-Flying",
        "Silvally-Ghost",
        "Silvally-Grass",
        "Silvally-Ground",
        "Silvally-Ice",
        "Silvally-Poison",
        "Silvally-Psychic",
        "Silvally-Rock",
        "Silvally-Steel",
        "Silvally-Water",
        "Skorupi",
        "Skuntank",
        "Slurpuff",
        "Sneasel",
        "Snorunt",
        "Spinarak",
        "Spiritomb",
        "Stufful",
        "Stunky",
        "Swalot",
        "Swirlix",
        "Swoobat",
        "Tangela",
        "Tangrowth",
        "Tentacool",
        "Tentacruel",
        "Toxapex",
        "Toxicroak",
        "Trevenant",
        "Trubbish",
        "Type: Null",
        "Umbreon",
        "Unown",
        "Venipede",
        "Victreebel",
        "Vileplume",
        "Volcarona",
        "Vullaby",
        "Weavile",
        "Weezing",
        "Whirlipede",
        "Whismur",
        "Wobbuffet",
        "Woobat",
        "Xurkitree",
        "Yamask",
        "Yanmega",
        "Zangoose",
        "Zoroark",
        "Zorua",
        "Zubat",
        "Zweilous",
      ];
      let template = this.getTemplate(set.species);
      if (!spookyMonsList.includes(template.species))
        return [`${template.species} is banned.`];
    },
  },
  {
    name: "[Gen 7] Custom Game",

    mod: "gen7",
    searchShow: false,
    canUseRandomTeam: true,
    debug: true,
    maxLevel: 9999,
    defaultLevel: 100,
    teamLength: {
      validate: [1, 24],
      battle: 24,
    },
    // no restrictions, for serious (other than team preview)
    ruleset: ["Team Preview", "Cancel Mod"],
  },

  // US/UM Doubles
  ///////////////////////////////////////////////////////////////////

  {
    section: "US/UM Doubles",
  },
  {
    name: "[Gen 7] Random Doubles Battle",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3601525/">Sets and Suggestions</a>`,
    ],

    mod: "gen7",
    gameType: "doubles",
    team: "random",
    ruleset: ["PotD", "Pokemon", "HP Percentage Mod", "Cancel Mod"],
  },
  {
    name: "[Gen 7] Doubles OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3634611/">Doubles OU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3623347/">Doubles OU Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3590987/">Doubles OU Sample Teams</a>`,
    ],

    mod: "gen7",
    gameType: "doubles",
    ruleset: ["Pokemon", "Standard Doubles", "Swagger Clause", "Team Preview"],
    banlist: [
      "DUber",
      "Power Construct",
      "Eevium Z",
      "Dark Void",
      "Gravity ++ Grass Whistle",
      "Gravity ++ Hypnosis",
      "Gravity ++ Lovely Kiss",
      "Gravity ++ Sing",
      "Gravity ++ Sleep Powder",
    ],
  },
  {
    name: "[Gen 7] Doubles Ubers",

    mod: "gen7",
    gameType: "doubles",
    ruleset: ["Pokemon", "Standard Doubles", "Team Preview"],
    banlist: ["Dark Void"],
  },
  {
    name: "[Gen 7] Doubles UU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3598014/">Doubles UU Metagame Discussion</a>`,
    ],

    mod: "gen7",
    gameType: "doubles",
    ruleset: ["[Gen 7] Doubles OU"],
    banlist: ["DOU", "DBL"],
  },
  {
    name: "[Gen 7] VGC 2019 Sun Series",

    mod: "gen7",
    gameType: "doubles",
    forcedLevel: 50,
    teamLength: {
      validate: [4, 6],
      battle: 4,
    },
    timer: {
      starting: 7 * 60 + 90 - 10,
      perTurn: 10,
      maxPerTurn: 55,
      maxFirstTurn: 90,
      timeoutAutoChoose: true,
      dcTimerBank: false,
    },
    ruleset: ["Pokemon", "Minimal GBU"],
    banlist: ["Unown", "Dragon Ascent"],
    requirePlus: true,
    onValidateTeam: function (team) {
      const legends = [
        "Mewtwo",
        "Lugia",
        "Ho-Oh",
        "Kyogre",
        "Groudon",
        "Rayquaza",
        "Dialga",
        "Palkia",
        "Giratina",
        "Reshiram",
        "Zekrom",
        "Kyurem",
        "Xerneas",
        "Yveltal",
        "Zygarde",
        "Cosmog",
        "Cosmoem",
        "Solgaleo",
        "Lunala",
        "Necrozma",
      ];
      let n = 0;
      let problems = [];
      for (const set of team) {
        const baseSpecies = this.getTemplate(set.species).baseSpecies;
        if (legends.includes(baseSpecies)) {
          n++;
          if (n === 3)
            problems.push(`You can only use up to two legendary Pok\u00E9mon.`);
        }
        const item = this.getItem(set.item);
        if (
          item.zMove ||
          item.megaStone ||
          ["redorb", "blueorb"].includes(item.id)
        )
          problems.push(
            `${set.name || set.species}'s item ${item.name} is banned.`
          );
      }
      return problems;
    },
  },
  {
    name: "[Gen 7] VGC 2019 Moon Series",

    mod: "gen7",
    gameType: "doubles",
    searchShow: false,
    forcedLevel: 50,
    teamLength: {
      validate: [4, 6],
      battle: 4,
    },
    timer: {
      starting: 7 * 60 + 90 - 10,
      perTurn: 10,
      maxPerTurn: 55,
      maxFirstTurn: 90,
      timeoutAutoChoose: true,
      dcTimerBank: false,
    },
    ruleset: ["Pokemon", "Minimal GBU"],
    banlist: ["Unown", "Dragon Ascent"],
    requirePlus: true,
    onValidateTeam: function (team) {
      const legends = [
        "Mewtwo",
        "Lugia",
        "Ho-Oh",
        "Kyogre",
        "Groudon",
        "Rayquaza",
        "Dialga",
        "Palkia",
        "Giratina",
        "Reshiram",
        "Zekrom",
        "Kyurem",
        "Xerneas",
        "Yveltal",
        "Zygarde",
        "Cosmog",
        "Cosmoem",
        "Solgaleo",
        "Lunala",
        "Necrozma",
      ];
      let n = 0;
      let problems = [];
      for (const set of team) {
        const baseSpecies = this.getTemplate(set.species).baseSpecies;
        if (legends.includes(baseSpecies)) {
          n++;
          if (n === 3)
            problems.push(`You can only use up to two legendary Pok\u00E9mon.`);
        }
        const item = this.getItem(set.item);
        if (
          item.megaStone ||
          ["redorb", "blueorb", "ultranecroziumz"].includes(item.id)
        )
          problems.push(
            `${set.name || set.species}'s item ${item.name} is banned.`
          );
      }
      return problems;
    },
  },
  {
    name: "[Gen 7] VGC 2019 Ultra Series",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
    ],

    mod: "gen7",
    gameType: "doubles",
    forcedLevel: 50,
    teamLength: {
      validate: [4, 6],
      battle: 4,
    },
    timer: {
      starting: 7 * 60 + 90 - 10,
      perTurn: 10,
      maxPerTurn: 55,
      maxFirstTurn: 90,
      timeoutAutoChoose: true,
      dcTimerBank: false,
    },
    ruleset: ["Pokemon", "Minimal GBU"],
    banlist: ["Unown"],
    requirePlus: true,
    onValidateTeam: function (team) {
      const legends = [
        "Mewtwo",
        "Lugia",
        "Ho-Oh",
        "Kyogre",
        "Groudon",
        "Rayquaza",
        "Dialga",
        "Palkia",
        "Giratina",
        "Reshiram",
        "Zekrom",
        "Kyurem",
        "Xerneas",
        "Yveltal",
        "Zygarde",
        "Cosmog",
        "Cosmoem",
        "Solgaleo",
        "Lunala",
        "Necrozma",
      ];
      let n = 0;
      for (const set of team) {
        const baseSpecies = this.getTemplate(set.species).baseSpecies;
        if (legends.includes(baseSpecies)) n++;
        if (n > 2)
          return [`You can only use up to two legendary Pok\u00E9mon.`];
      }
    },
  },
  {
    name: "[Gen 7] VGC 2018",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3631800/">VGC 2018 Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3622041/">VGC 2018 Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3628885/">VGC 2018 Sample Teams</a>`,
    ],

    mod: "gen7",
    gameType: "doubles",
    forcedLevel: 50,
    teamLength: {
      validate: [4, 6],
      battle: 4,
    },
    timer: {
      starting: 6 * 60 + 30 - 10,
      perTurn: 10,
      maxPerTurn: 55,
      maxFirstTurn: 90,
      timeoutAutoChoose: true,
      dcTimerBank: false,
    },
    ruleset: ["Pokemon", "Standard GBU"],
    banlist: ["Unown"],
    requirePlus: true,
  },
  {
    name: "[Gen 7] VGC 2017",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3583926/">VGC 2017 Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3591794/">VGC 2017 Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3590391/">VGC 2017 Sample Teams</a>`,
    ],

    mod: "vgc17",
    gameType: "doubles",
    searchShow: false,
    forcedLevel: 50,
    teamLength: {
      validate: [4, 6],
      battle: 4,
    },
    timer: {
      starting: 15 * 60 - 10,
      perTurn: 10,
      maxPerTurn: 60,
      maxFirstTurn: 90,
      timeoutAutoChoose: true,
      dcTimerBank: false,
    },
    ruleset: [
      "Pokemon",
      "Species Clause",
      "Nickname Clause",
      "Item Clause",
      "Team Preview",
      "Cancel Mod",
      "Alola Pokedex",
    ],
    banlist: [
      "Illegal",
      "Unreleased",
      "Solgaleo",
      "Lunala",
      "Necrozma",
      "Magearna",
      "Marshadow",
      "Zygarde",
      "Mega",
    ],
    requirePlus: true,
  },
  {
    name: "[Gen 7] Battle Spot Doubles",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3595001/">Battle Spot Doubles Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3593890/">Battle Spot Doubles Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3595859/">Battle Spot Doubles Sample Teams</a>`,
    ],

    mod: "gen7",
    gameType: "doubles",
    maxForcedLevel: 50,
    teamLength: {
      validate: [4, 6],
      battle: 4,
    },
    ruleset: ["Pokemon", "Standard GBU"],
    requirePentagon: true,
  },
  {
    name: "[Gen 7] Metronome Battle",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
    ],

    mod: "gen7",
    gameType: "doubles",
    teamLength: {
      validate: [2, 2],
      battle: 2,
    },
    ruleset: ["HP Percentage Mod", "Cancel Mod"],
    banlist: [
      "Aegislash",
      "Doublade",
      "Honedge",
      "Kitsunoh",
      "Magearna",
      "Pokestar Spirit",
      "Battle Bond",
      "Cheek Pouch",
      "Cursed Body",
      "Desolate Land",
      "Dry Skin",
      "Fluffy",
      "Fur Coat",
      "Grassy Surge",
      "Huge Power",
      "Ice Body",
      "Iron Barbs",
      "Moody",
      "Parental Bond",
      "Poison Heal",
      "Power Construct",
      "Pressure",
      "Primordial Sea",
      "Protean",
      "Pure Power",
      "Rain Dish",
      "Rough Skin",
      "Sand Stream",
      "Schooling",
      "Snow Warning",
      "Stamina",
      "Volt Absorb",
      "Water Absorb",
      "Wonder Guard",
      "Abomasite",
      "Aguav Berry",
      "Assault Vest",
      "Berry",
      "Berry Juice",
      "Berserk Gene",
      "Black Sludge",
      "Enigma Berry",
      "Figy Berry",
      "Gold Berry",
      "Iapapa Berry",
      "Kangaskhanite",
      "Leftovers",
      "Mago Berry",
      "Mawilite",
      "Medichamite",
      "Normalium Z",
      "Oran Berry",
      "Rocky Helmet",
      "Shell Bell",
      "Sitrus Berry",
      "Wiki Berry",
      "Harvest + Rowap Berry",
      "Harvest + Jaboca Berry",
      "Shedinja + Sturdy",
    ],
    onValidateSet: function (set) {
      let template = this.getTemplate(set.species);
      let bst = 0;
      for (let stat in template.baseStats) {
        // @ts-ignore
        bst += template.baseStats[stat];
      }
      if (bst > 600)
        return [
          `${template.species} is banned.`,
          `(Pok\u00e9mon with a BST higher than 600 are banned)`,
        ];
      let item = this.getItem(set.item);
      if (set.item && item.megaStone) {
        let bstMega = 0;
        let megaTemplate = this.getTemplate(item.megaStone);
        for (let stat in megaTemplate.baseStats) {
          // @ts-ignore
          bstMega += megaTemplate.baseStats[stat];
        }
        if (template.baseSpecies === item.megaEvolves && bstMega > 600)
          return [
            `${set.name || set.species}'s item ${item.name} is banned.`,
            `(Pok\u00e9mon with a BST higher than 600 are banned)`,
          ];
      }
      if (
        set.moves.length !== 1 ||
        this.getMove(set.moves[0]).id !== "metronome"
      )
        return [
          `${set.name || set.species} has illegal moves.`,
          `(Pok\u00e9mon can only have one Metronome in their moveset)`,
        ];
    },
  },
  {
    name: "[Gen 7] Doubles Custom Game",

    mod: "gen7",
    gameType: "doubles",
    searchShow: false,
    canUseRandomTeam: true,
    maxLevel: 9999,
    defaultLevel: 100,
    debug: true,
    teamLength: {
      validate: [2, 24],
      battle: 24,
    },
    // no restrictions, for serious (other than team preview)
    ruleset: ["Team Preview", "Cancel Mod"],
  },

  // Custom Formats.
  ////////////////////////////////////////////////////////////////////

  {
    section: "" + Config.serverName + " Metagames",
    column: 2,
  },
  {
    name: "[Gen 7] Random Metronome Battle",
    desc: [
      "&bullet; Metronome battles format: 6v6 singles, Only move allowed is metronome, all healing items/abilities are banned, Ubers (and mega rayquaza) are banned, immunites dont exist in this format (ex normal is not very effective on ghost instead of x0)",
    ],
    ruleset: [
      "PotD",
      "Pokemon",
      "Sleep Clause Mod",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
    team: "random",
    mod: "gen7",
    onBegin: function () {
      let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
      allPokemon.forEach((pokemon) => {
        pokemon.baseMoveSlots = [
          {
            move: "Metronome",
            id: "metronome",
            pp: 16,
            maxpp: 16,
            target: "self",
            disabled: false,
            disabledSource: "",
            used: false,
          },
        ];
        pokemon.moves.splice(0, 4);
        pokemon.moves.push("metronome");
        pokemon.moveSlots = pokemon.baseMoveSlots;
        if (
          this.getFormat("[Gen 7] Metronome Battle").banlist.includes(
            this.getItem(pokemon.item).name
          )
        ) {
          pokemon.item = "leppaberry";
        }
      });
    },
    onEffectiveness: function (typeMod, target, type, move) {
      //change no effect to not very effective
      if (move && !this.getImmunity(move, type)) return 2;
    },
  },
  /*{
		name: "[Gen 7] Super Staff Bros",

		mod: 'ssb',
		team: 'randomSeasonalRegStaff',
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		onBegin: function () {
			this.add('message', 'GET READY FOR THE NEXT BATTLE!');

			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				let last = pokemon.moves.length - 1;
				if (pokemon.moves[last]) {
					pokemon.moves.splice(last, 1);
					pokemon.moves.push(toId(pokemon.set.signatureMove));
					pokemon.moveSlots[last].move = pokemon.set.signatureMove;
					pokemon.baseMoveSlots[last].move = pokemon.set.signatureMove;
				}
			}
		},
		onSwitchIn: function (pokemon) {
			let name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			//Add the mon's status effect to it as a volatile.
			if (this.data.Statuses[name] && this.data.Statuses[name].exists) {
				pokemon.addVolatile(name, pokemon);
			}
		},
		onModifyPokemon: function (pokemon) {
			//let name = toId(pokemon.name);
			// Enforce choice item locking on custom moves.
			let moves = pokemon.moveSlots;
			if (pokemon.getItem().isChoice && pokemon.lastMove === moves[3].id) {
				for (let i = 0; i < 3; i++) {
					if (!moves[i].disabled) {
						pokemon.disableMove(moves[i].id, false);
						moves[i].disabled = true;
					}
				}
			}
		},
	},
	{
		name: "[Gen 7] Super Staff Bros Free For All",
		desc: ['Duke it out with other users custom made pokemon.',
			'Make your own as well! Get started with <button class="button" name="send" value="/ssb edit">/ssb edit</button>.',
			'Use <button class="button" name="send" value="/ssb">/ssb</button> for the commands you can use.',
		],

		mod: 'cssb',
		team: 'randomCustomSSB',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
		onBegin: function () {
			this.add("raw|<h2>Free for All!</h2>");
			this.add("raw|<h3>3</h3>");
			this.add("raw|<h3>2</h3>");
			this.add("raw|<h3>1</h3>");
			this.add("raw|<h1>BATTLE!</h1>");
		},
		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
			if (!pokemon.template.isMega) pokemon.canMegaEvo = this.canMegaEvo(pokemon);
		},
	},*/

  // Other Metagames
  ///////////////////////////////////////////////////////////////////

  {
    section: "OM of the Month",
    column: 2,
  },
  {
    name: "[Gen 7] 2v2 Doubles",
    desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3606989/">2v2 Doubles</a>`,
    ],

    mod: "gen7",
    gameType: "doubles",
    // searchShow: false,
    teamLength: {
      validate: [2, 4],
      battle: 2,
    },
    ruleset: [
      "[Gen 7] Doubles OU",
      "Accuracy Moves Clause",
      "Sleep Clause Mod",
    ],
    banlist: [
      "Salamence-Mega",
      "Tapu Lele",
      "Focus Sash",
      "Final Gambit",
      "Perish Song",
    ],
    onValidateSet: function (set) {
      const item = this.getItem(set.item);
      if (item.zMove)
        return [`${set.name || set.species}'s item ${item.name} is banned.`];
    },
  },
  {
    name: "[Gen 7] Gods and Followers",
    desc: `The Pok&eacute;mon in the first slot is the God; the Followers must share a type with the God. If the God Pok&eacute;mon faints, the Followers are inflicted with Embargo.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3589187/">Gods and Followers</a>`,
    ],

    mod: "gen7",
    ruleset: ["[Gen 7] Ubers"],
    onValidateTeam: function (team, format, teamHas) {
      let problemsArray = /** @type {string[]} */ ([]);
      let types = /** @type {string[]} */ ([]);
      for (const [i, set] of team.entries()) {
        let item = this.getItem(set.item);
        let template = this.getTemplate(set.species);
        if (!template.exists)
          return [
            `The Pok\u00e9mon "${set.name || set.species}" does not exist.`,
          ];
        if (i === 0) {
          types = template.types;
          if (
            template.species.substr(0, 9) === "Necrozma-" &&
            item.id === "ultranecroziumz"
          )
            types = ["Psychic"];
          if (item.megaStone && template.species === item.megaEvolves) {
            template = this.getTemplate(item.megaStone);
            let baseTemplate = this.getTemplate(item.megaEvolves);
            types = baseTemplate.types.filter((type) =>
              template.types.includes(type)
            );
          }
          let problems = TeamValidator("gen7ubers").validateSet(set, teamHas);
          if (problems) problemsArray = problemsArray.concat(problems);
        } else {
          let problems = TeamValidator("gen7ou").validateSet(set, teamHas);
          if (problems) problemsArray = problemsArray.concat(problems);
          let followerTypes = template.types;
          if (item.megaStone && template.species === item.megaEvolves) {
            template = this.getTemplate(item.megaStone);
            let baseTemplate = this.getTemplate(item.megaEvolves);
            if (
              baseTemplate.types.some((type) => types.includes(type)) &&
              template.types.some((type) => types.includes(type))
            ) {
              followerTypes = baseTemplate.types
                .concat(template.types)
                .filter((type) =>
                  template.types.concat(baseTemplate.types).includes(type)
                );
            }
          }
          if (!followerTypes.some((type) => types.includes(type)))
            problemsArray.push(
              "Followers must share a type with the God.",
              `(${
                template.isMega ? template.baseSpecies : template.species
              } doesn't share a type with ${team[0].species}.)`
            );
        }
      }
      return problemsArray;
    },
    onBegin: function () {
      for (const side of this.sides) {
        // @ts-ignore
        side.god = side.pokemon[0];
      }
    },
    onFaint: function (pokemon) {
      // @ts-ignore
      if (pokemon.side.pokemonLeft > 1 && pokemon.side.god === pokemon) {
        this.add(
          "-message",
          pokemon.set.name +
            " has fallen! " +
            pokemon.side.name +
            "'s team has been Embargoed!"
        );
      }
    },
    onSwitchIn: function (pokemon) {
      // @ts-ignore
      if (pokemon.side.god.hp === 0 && pokemon.addVolatile("embargo", pokemon))
        delete pokemon.volatiles["embargo"].duration;
    },
  },
  {
    section: "Other Metagames",
    column: 2,
  },
  {
    name: "[Gen 7] Balanced Hackmons",
    desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3587475/">Balanced Hackmons</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3588586/">BH Suspects and Bans Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3593766/">BH Resources</a>`,
    ],

    mod: "gen7",
    ruleset: [
      "Pokemon",
      "Ability Clause",
      "OHKO Clause",
      "Evasion Moves Clause",
      "CFZ Clause",
      "Endless Battle Clause",
      "Team Preview",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
    banlist: [
      "Groudon-Primal",
      "Arena Trap",
      "Huge Power",
      "Illusion",
      "Innards Out",
      "Magnet Pull",
      "Moody",
      "Parental Bond",
      "Protean",
      "Psychic Surge",
      "Pure Power",
      "Shadow Tag",
      "Stakeout",
      "Water Bubble",
      "Wonder Guard",
      "Gengarite",
      "Chatter",
      "Comatose + Sleep Talk",
    ],
  },
  {
    name: "[Gen 7] 1v1",
    desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3587523/">1v1</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3592842/">1v1 Resources</a>`,
    ],

    mod: "gen7",
    teamLength: {
      validate: [1, 3],
      battle: 1,
    },
    ruleset: [
      "Pokemon",
      "Species Clause",
      "Nickname Clause",
      "Moody Clause",
      "OHKO Clause",
      "Evasion Moves Clause",
      "Accuracy Moves Clause",
      "Swagger Clause",
      "Endless Battle Clause",
      "HP Percentage Mod",
      "Cancel Mod",
      "Team Preview",
    ],
    banlist: [
      "Illegal",
      "Unreleased",
      "Arceus",
      "Darkrai",
      "Deoxys-Base",
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Dialga",
      "Giratina",
      "Groudon",
      "Ho-Oh",
      "Jirachi",
      "Kangaskhan-Mega",
      "Kyogre",
      "Kyurem-Black",
      "Kyurem-White",
      "Lugia",
      "Lunala",
      "Marshadow",
      "Mewtwo",
      "Mimikyu",
      "Necrozma-Dawn-Wings",
      "Necrozma-Dusk-Mane",
      "Palkia",
      "Rayquaza",
      "Reshiram",
      "Salamence-Mega",
      "Shaymin-Sky",
      "Snorlax",
      "Solgaleo",
      "Tapu Koko",
      "Xerneas",
      "Yveltal",
      "Zekrom",
      "Focus Sash",
      "Perish Song",
    ],
  },
  {
    name: "[Gen 7] Mix and Mega",
    desc: `Mega Stones and Primal Orbs can be used on almost any Pok&eacute;mon with no Mega Evolution limit.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3587740/">Mix and Mega</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3591580/">Mix and Mega Resources</a>`,
    ],

    mod: "mixandmega",
    ruleset: ["Pokemon", "Standard", "Mega Rayquaza Clause", "Team Preview"],
    banlist: ["Shadow Tag", "Gengarite", "Baton Pass", "Electrify"],
    restrictedStones: [
      "Beedrillite",
      "Blazikenite",
      "Kangaskhanite",
      "Mawilite",
      "Medichamite",
      "Pidgeotite",
      "Ultranecrozium Z",
    ],
    cannotMega: [
      "Arceus",
      "Deoxys",
      "Deoxys-Attack",
      "Deoxys-Speed",
      "Dialga",
      "Dragonite",
      "Giratina",
      "Groudon",
      "Ho-Oh",
      "Kyogre",
      "Kyurem-Black",
      "Kyurem-White",
      "Lugia",
      "Lunala",
      "Marshadow",
      "Mewtwo",
      "Naganadel",
      "Necrozma-Dawn-Wings",
      "Necrozma-Dusk-Mane",
      "Palkia",
      "Pheromosa",
      "Rayquaza",
      "Regigigas",
      "Reshiram",
      "Slaking",
      "Solgaleo",
      "Xerneas",
      "Yveltal",
      "Zekrom",
    ],
    onValidateTeam: function (team) {
      /**@type {{[k: string]: true}} */
      let itemTable = {};
      for (const set of team) {
        let item = this.getItem(set.item);
        if (!item) continue;
        if (itemTable[item.id] && item.megaStone)
          return [
            "You are limited to one of each Mega Stone.",
            "(You have more than one " + this.getItem(item).name + ")",
          ];
        if (itemTable[item.id] && ["blueorb", "redorb"].includes(item.id))
          return [
            "You are limited to one of each Primal Orb.",
            "(You have more than one " + this.getItem(item).name + ")",
          ];
        itemTable[item.id] = true;
      }
    },
    onValidateSet: function (set, format) {
      let template = this.getTemplate(set.species || set.name);
      let item = this.getItem(set.item);
      if (
        !item.megaEvolves &&
        !["blueorb", "redorb", "ultranecroziumz"].includes(item.id)
      )
        return;
      if (
        template.baseSpecies === item.megaEvolves ||
        (template.baseSpecies === "Groudon" && item.id === "redorb") ||
        (template.baseSpecies === "Kyogre" && item.id === "blueorb") ||
        (template.species.substr(0, 9) === "Necrozma-" &&
          item.id === "ultranecroziumz")
      )
        return;
      let uberStones = format.restrictedStones || [];
      let uberPokemon = format.cannotMega || [];
      if (
        uberPokemon.includes(template.name) ||
        set.ability === "Power Construct" ||
        uberStones.includes(item.name)
      )
        return [
          "" + template.species + " is not allowed to hold " + item.name + ".",
        ];
    },
    onBegin: function () {
      for (const pokemon of this.p1.pokemon.concat(this.p2.pokemon)) {
        pokemon.originalSpecies = pokemon.baseTemplate.species;
      }
    },
    onSwitchIn: function (pokemon) {
      let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
      if (
        oMegaTemplate.exists &&
        pokemon.originalSpecies !== oMegaTemplate.baseSpecies
      ) {
        // Place volatiles on the Pok??mon to show its mega-evolved condition and details
        this.add(
          "-start",
          pokemon,
          oMegaTemplate.requiredItem || oMegaTemplate.requiredMove,
          "[silent]"
        );
        let oTemplate = this.getTemplate(pokemon.originalSpecies);
        if (
          oTemplate.types.length !== pokemon.template.types.length ||
          oTemplate.types[1] !== pokemon.template.types[1]
        ) {
          this.add(
            "-start",
            pokemon,
            "typechange",
            pokemon.template.types.join("/"),
            "[silent]"
          );
        }
      }
    },
    onSwitchOut: function (pokemon) {
      let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
      if (
        oMegaTemplate.exists &&
        pokemon.originalSpecies !== oMegaTemplate.baseSpecies
      ) {
        this.add(
          "-end",
          pokemon,
          oMegaTemplate.requiredItem || oMegaTemplate.requiredMove,
          "[silent]"
        );
      }
    },
  },
  {
    name: "[Gen 7] Almost Any Ability",
    desc: `Pok&eacute;mon can use any ability, barring the few that are restricted to their natural users.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3587901/">Almost Any Ability</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3595753/">AAA Resources</a>`,
    ],

    mod: "gen7",
    ruleset: ["[Gen 7] OU", "Ability Clause", "Ignore Illegal Abilities"],
    banlist: [
      "Archeops",
      "Dragonite",
      "Hoopa-Unbound",
      "Kartana",
      "Keldeo",
      "Kyurem-Black",
      "Regigigas",
      "Shedinja",
      "Slaking",
      "Terrakion",
      "Zygarde-Base",
    ],
    unbanlist: [
      "Aegislash",
      "Genesect",
      "Landorus",
      "Metagross-Mega",
      "Naganadel",
    ],
    restrictedAbilities: [
      "Comatose",
      "Contrary",
      "Fluffy",
      "Fur Coat",
      "Huge Power",
      "Illusion",
      "Imposter",
      "Innards Out",
      "Parental Bond",
      "Protean",
      "Pure Power",
      "Simple",
      "Speed Boost",
      "Stakeout",
      "Water Bubble",
      "Wonder Guard",
    ],
    onValidateSet: function (set, format) {
      let restrictedAbilities = format.restrictedAbilities || [];
      if (restrictedAbilities.includes(set.ability)) {
        let template = this.getTemplate(set.species || set.name);
        let legalAbility = false;
        for (let i in template.abilities) {
          // @ts-ignore
          if (set.ability === template.abilities[i]) legalAbility = true;
        }
        if (!legalAbility)
          return [
            "The ability " +
              set.ability +
              " is banned on Pok\u00e9mon that do not naturally have it.",
          ];
      }
    },
  },
  {
    name: "[Gen 7] STABmons",
    desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3587949/">STABmons</a>`,
    ],

    mod: "gen7",
    // searchShow: false,
    ruleset: ["[Gen 7] OU", "STABmons Move Legality"],
    banlist: [
      "Aerodactyl-Mega",
      "Blacephalon",
      "Kartana",
      "Komala",
      "Kyurem-Black",
      "Porygon-Z",
      "Silvally",
      "Tapu Koko",
      "Tapu Lele",
      "King's Rock",
      "Razor Fang",
    ],
    restrictedMoves: [
      "Acupressure",
      "Belly Drum",
      "Chatter",
      "Extreme Speed",
      "Geomancy",
      "Lovely Kiss",
      "Shell Smash",
      "Shift Gear",
      "Spore",
      "Thousand Arrows",
    ],
  },
  {
    name: "[Gen 7] Camomons",
    desc: `Pok&eacute;mon change type to match their first two moves.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3598418/">Camomons</a>`,
    ],
    mod: "gen7",
    searchShow: false,
    ruleset: ["[Gen 7] OU"],
    banlist: ["Kartana", "Kyurem-Black", "Shedinja"],
    onModifyTemplate: function (template, target, source) {
      if (!source) return;
      let types = [
        ...new Set(
          target.baseMoveSlots
            .slice(0, 2)
            .map((move) => this.getMove(move.id).type)
        ),
      ];
      return Object.assign({}, template, { types: types });
    },
    onSwitchIn: function (pokemon) {
      this.add(
        "-start",
        pokemon,
        "typechange",
        pokemon.types.join("/"),
        "[silent]"
      );
    },
    onAfterMega: function (pokemon) {
      this.add(
        "-start",
        pokemon,
        "typechange",
        pokemon.types.join("/"),
        "[silent]"
      );
    },
  },
  {
    name: "[Gen 7] ZU",
    desc: `The usage-based tier below PU.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3629669/">ZeroUsed</a>`,
    ],

    mod: "gen7",
    ruleset: ["[Gen 7] PU"],
    banlist: [
      "PU",
      "Carracosta",
      "Crabominable",
      "Exeggutor-Base",
      "Gorebyss",
      "Jynx",
      "Musharna",
      "Raticate-Alola",
      "Raticate-Alola-Totem",
      "Throh",
      "Turtonator",
      "Ursaring",
      "Victreebel",
      "Zangoose",
    ],
  },
  {
    name: "[Gen 7] Partners in Crime",
    desc: `Doubles-based metagame where both active ally Pok&eacute;mon share abilities and moves.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3618488/">Partners in Crime</a>`,
    ],

    mod: "pic",
    gameType: "doubles",
    searchShow: false,
    ruleset: ["[Gen 7] Doubles OU", "Sleep Clause Mod"],
    banlist: [
      "Kangaskhanite",
      "Mawilite",
      "Medichamite",
      "Huge Power",
      "Imposter",
      "Normalize",
      "Pure Power",
      "Wonder Guard",
      "Mimic",
      "Sketch",
      "Sweet Scent",
      "Transform",
    ],
    onSwitchInPriority: 2,
    onSwitchIn: function (pokemon) {
      if (this.p1.active.every((ally) => ally && !ally.fainted)) {
        let p1a = this.p1.active[0],
          p1b = this.p1.active[1];
        if (p1a.ability !== p1b.ability) {
          let p1aInnate = "ability" + p1b.ability;
          p1a.volatiles[p1aInnate] = { id: p1aInnate, target: p1a };
          let p1bInnate = "ability" + p1a.ability;
          p1b.volatiles[p1bInnate] = { id: p1bInnate, target: p1b };
        }
      }
      if (this.p2.active.every((ally) => ally && !ally.fainted)) {
        let p2a = this.p2.active[0],
          p2b = this.p2.active[1];
        if (p2a.ability !== p2b.ability) {
          let p2a_innate = "ability" + p2b.ability;
          p2a.volatiles[p2a_innate] = { id: p2a_innate, target: p2a };
          let p2b_innate = "ability" + p2a.ability;
          p2b.volatiles[p2b_innate] = { id: p2b_innate, target: p2b };
        }
      }
      let ally = pokemon.side.active.find(
        (ally) => ally && ally !== pokemon && !ally.fainted
      );
      if (ally && ally.ability !== pokemon.ability) {
        // @ts-ignore
        if (!pokemon.innate) {
          // @ts-ignore
          pokemon.innate = "ability" + ally.ability;
          // @ts-ignore
          delete pokemon.volatiles[pokemon.innate];
          // @ts-ignore
          pokemon.addVolatile(pokemon.innate);
        }
        // @ts-ignore
        if (!ally.innate) {
          // @ts-ignore
          ally.innate = "ability" + pokemon.ability;
          // @ts-ignore
          delete ally.volatiles[ally.innate];
          // @ts-ignore
          ally.addVolatile(ally.innate);
        }
      }
    },
    onSwitchOut: function (pokemon) {
      // @ts-ignore
      if (pokemon.innate) {
        // @ts-ignore
        pokemon.removeVolatile(pokemon.innate);
        // @ts-ignore
        delete pokemon.innate;
      }
      let ally = pokemon.side.active.find(
        (ally) => ally && ally !== pokemon && !ally.fainted
      );
      // @ts-ignore
      if (ally && ally.innate) {
        // @ts-ignore
        ally.removeVolatile(ally.innate);
        // @ts-ignore
        delete ally.innate;
      }
    },
    onFaint: function (pokemon) {
      // @ts-ignore
      if (pokemon.innate) {
        // @ts-ignore
        pokemon.removeVolatile(pokemon.innate);
        // @ts-ignore
        delete pokemon.innate;
      }
      let ally = pokemon.side.active.find(
        (ally) => ally && ally !== pokemon && !ally.fainted
      );
      // @ts-ignore
      if (ally && ally.innate) {
        // @ts-ignore
        ally.removeVolatile(ally.innate);
        // @ts-ignore
        delete ally.innate;
      }
    },
  },
  {
    name: "[Gen 6] Gen-NEXT OU",

    mod: "gennext",
    searchShow: false,
    ruleset: ["Pokemon", "Standard NEXT", "Team Preview"],
    banlist: ["Uber"],
  },

  // SGgame Formats
  ////////////////////////////////////////////////////////////////////
  {
    section: "SG Game Formats",
    column: 2,
  },
  {
    name: "[Gen 7] Wild Pokemon (Alpha)",
    desc: ["Wild Pok&eacute;mon battles for the SG Game project. (WIP)"],
    rated: false,
    useSGgame: true,
    isWildEncounter: true,
    allowBag: true,
    takeItems: true,
    challengeShow: false,
    mod: "sggame",
    ruleset: ["HP Percentage Mod", "Cancel Mod"],
    banlist: ["CAP"],
  },
  {
    name: "[Gen 7] Trainer Battle (Alpha)",
    desc: [
      "Battles VS SG Server (our COM) using your team from the SG Game project. (WIP)",
    ],
    rated: false,
    useSGgame: true,
    isTrainerBattle: true,
    allowBag: true,
    takeItems: true,
    challengeShow: false,
    mod: "sggame",
    ruleset: ["Endless Battle Clause", "HP Percentage Mod", "Cancel Mod"],
    banlist: ["CAP"],
  },
  {
    name: "[Gen 7] [SGgame] Anything Goes",
    desc: ["Anything Goes rules with the teams you build in SGgame."],
    rated: false,
    useSGgame: true,
    noExp: true,
    mod: "sggame",
    ruleset: [
      "Endless Battle Clause",
      "Team Preview",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
    banlist: ["CAP"],
  },
  {
    name: "[Gen 7] [SGgame] Lvl 100 Anything Goes",
    desc: [
      "Anything Goe rules with the teams you build in SGgame.",
      "All pokemon are set to level 100 for the duration of the match.",
    ],
    forcedLevel: 100,
    useSGgame: true,
    noExp: true,
    mod: "sggame",
    ruleset: [
      "Endless Battle Clause",
      "Team Preview",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
    banlist: ["CAP"],
  },

  // Randomized Metas
  ///////////////////////////////////////////////////////////////////

  {
    section: "Randomized Metas",
    column: 2,
  },
  {
    name: "[Gen 7] Battle Factory",
    desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

    mod: "gen7",
    team: "randomFactory",
    ruleset: [
      "Pokemon",
      "Sleep Clause Mod",
      "Team Preview",
      "HP Percentage Mod",
      "Cancel Mod",
      "Mega Rayquaza Clause",
    ],
  },
  {
    name: "[Gen 7] BSS Factory",
    desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Spot Singles.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3604845/">Information and Suggestions Thread</a>`,
    ],

    mod: "gen7",
    team: "randomBSSFactory",
    teamLength: {
      validate: [3, 6],
      battle: 3,
    },
    ruleset: ["Pokemon", "Standard GBU"],
  },
  {
    name: "[Gen 7] Monotype Random Battle",

    mod: "gen7",
    team: "random",
    searchShow: false,
    ruleset: [
      "Pokemon",
      "Same Type Clause",
      "Sleep Clause Mod",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
  },
  {
    name: "[Gen 7] Super Staff Bros Brawl",
    desc: "Super Staff Bros returns for another round! Battle with a random team of pokemon created by the sim staff.",
    threads: [
      `&bullet; <a href="https://www.smogon.com/articles/super-staff-bros-brawl">Introduction &amp; Roster</a>`,
    ],

    mod: "ssb",
    team: "randomStaffBros",
    ruleset: ["HP Percentage Mod", "Cancel Mod", "Sleep Clause Mod"],
    onBegin: function () {
      this.add("raw|SUPER STAFF BROS <b>BRAWL</b>!!");
      this.add("message", "GET READY FOR THE NEXT BATTLE!");
      this.add(
        `raw|<div class='broadcast-green'><b>Wondering what all these custom moves, abilities, and items do?<br />Check out the <a href="https://www.smogon.com/articles/super-staff-bros-brawl" target="_blank">Super Staff Bros Brawl Guide</a> and find out!</b></div>`
      );
    },
    onSwitchIn: function (pokemon) {
      let name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
      if (this.getTemplate(name).exists) {
        // Certain pokemon have volatiles named after their speciesid
        // To prevent overwriting those, and to prevent accidentaly leaking
        // that a pokemon is on a team through the onStart even triggering
        // at the start of a match, users with pokemon names will need their
        // statuse's to end in "user".
        name += "user";
      }
      // Add the mon's status effect to it as a volatile.
      let status = this.getEffect(name);
      if (status && status.exists) {
        pokemon.addVolatile(name, pokemon);
      }
    },
  },
  {
    name: "[Gen 7] Challenge Cup 1v1",

    mod: "gen7",
    team: "randomCC",
    teamLength: {
      battle: 1,
    },
    ruleset: ["Pokemon", "HP Percentage Mod", "Cancel Mod", "Team Preview"],
  },
  {
    name: "[Gen 7] Challenge Cup 2v2",

    mod: "gen7",
    team: "randomCC",
    gameType: "doubles",
    teamLength: {
      battle: 2,
    },
    searchShow: false,
    ruleset: ["Pokemon", "HP Percentage Mod", "Cancel Mod", "Team Preview"],
  },
  {
    name: "[Gen 7] Hackmons Cup",
    desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

    mod: "gen7",
    team: "randomHC",
    ruleset: ["Pokemon", "HP Percentage Mod", "Cancel Mod"],
  },
  {
    name: "[Gen 7] Doubles Hackmons Cup",

    mod: "gen7",
    gameType: "doubles",
    team: "randomHC",
    searchShow: false,
    ruleset: ["Pokemon", "HP Percentage Mod", "Cancel Mod"],
  },
  {
    name: "[Gen 6] Random Battle",

    mod: "gen6",
    team: "random",
    ruleset: [
      "PotD",
      "Pokemon",
      "Sleep Clause Mod",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
  },
  {
    name: "[Gen 6] Battle Factory",
    desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

    mod: "gen6",
    team: "randomFactory",
    searchShow: false,
    ruleset: [
      "Pokemon",
      "Sleep Clause Mod",
      "Team Preview",
      "HP Percentage Mod",
      "Cancel Mod",
      "Mega Rayquaza Clause",
    ],
  },
  {
    name: "[Gen 5] Random Battle",

    mod: "gen5",
    team: "random",
    ruleset: ["Pokemon", "Sleep Clause Mod", "HP Percentage Mod", "Cancel Mod"],
  },
  {
    name: "[Gen 4] Random Battle",

    mod: "gen4",
    team: "random",
    ruleset: ["Pokemon", "Sleep Clause Mod", "HP Percentage Mod", "Cancel Mod"],
  },
  {
    name: "[Gen 3] Random Battle",

    mod: "gen3",
    team: "random",
    ruleset: ["Pokemon", "Standard"],
  },
  {
    name: "[Gen 2] Random Battle",

    mod: "gen2",
    team: "random",
    ruleset: ["Pokemon", "Standard"],
  },
  {
    name: "[Gen 1] Random Battle",

    mod: "gen1",
    team: "random",
    ruleset: ["Pokemon", "Standard"],
  },
  {
    name: "[Gen 1] Challenge Cup",

    mod: "gen1",
    team: "randomCC",
    searchShow: false,
    challengeShow: false,
    ruleset: ["Pokemon", "HP Percentage Mod", "Cancel Mod"],
  },

  // RoA Spotlight
  ///////////////////////////////////////////////////////////////////

  {
    section: "RoA Spotlight",
    column: 3,
  },
  {
    name: "[Gen 5] Ubers",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3550881/">BW2 Ubers Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6446463/">BW2 Ubers Sample Teams</a>`,
    ],

    mod: "gen5",
    // searchShow: false,
    ruleset: ["Pokemon", "Team Preview", "Standard Ubers"],
  },
  {
    name: "[Gen 5] Monotype",
    desc: `All the Pok&eacute;mon on a team must share a type.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/posts/7421333/">BW2 Monotype</a>`,
    ],

    mod: "gen5",
    ruleset: ["[Gen 5] OU", "Same Type Clause"],
  },
  {
    name: "[Gen 4] NU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3583742/">DPP NU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/3512254/">DPP NU Viability Ranking</a>`,
    ],

    mod: "gen4",
    // searchShow: false,
    ruleset: ["[Gen 4] UU"],
    banlist: ["UU", "NUBL"],
  },

  // Past Gens OU
  ///////////////////////////////////////////////////////////////////

  {
    section: "Past Gens OU",
    column: 3,
  },
  {
    name: "[Gen 6] OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/dex/xy/tags/ou/">ORAS OU Banlist</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3642242/">ORAS OU Sample Teams</a>`,
    ],

    mod: "gen6",
    ruleset: ["Pokemon", "Standard", "Team Preview", "Swagger Clause"],
    banlist: ["Uber", "Arena Trap", "Shadow Tag", "Soul Dew", "Baton Pass"],
  },
  {
    name: "[Gen 5] OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3599678/">BW2 OU Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
    ],

    mod: "gen5",
    ruleset: [
      "Pokemon",
      "Standard",
      "Evasion Abilities Clause",
      "Baton Pass Clause",
      "Swagger Clause",
      "Team Preview",
    ],
    banlist: [
      "Uber",
      "Arena Trap",
      "Drizzle ++ Swift Swim",
      "Drought ++ Chlorophyll",
      "Sand Stream ++ Sand Rush",
      "Soul Dew",
    ],
  },
  {
    name: "[Gen 4] OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3506147/">DPP OU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3551992/">DPP OU Viability Ranking</a>`,
    ],

    mod: "gen4",
    ruleset: [
      "Pokemon",
      "Standard",
      "Evasion Abilities Clause",
      "Baton Pass Clause",
    ],
    banlist: ["Uber"],
  },
  {
    name: "[Gen 3] OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3503019/">ADV OU Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6431087/">ADV Sample Teams</a>`,
    ],

    mod: "gen3",
    ruleset: ["Pokemon", "Standard"],
    banlist: ["Uber", "Smeargle + Ingrain"],
  },
  {
    name: "[Gen 2] OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3556533/">GSC OU Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6431086/">GSC Sample Teams</a>`,
    ],

    mod: "gen2",
    ruleset: ["Pokemon", "Standard"],
    banlist: ["Uber"],
  },
  {
    name: "[Gen 1] OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3572352/">RBY OU Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6431045/">RBY Sample Teams</a>`,
    ],

    mod: "gen1",
    ruleset: ["Pokemon", "Standard"],
    banlist: ["Uber"],
  },

  // OR/AS Singles
  ///////////////////////////////////////////////////////////////////

  {
    section: "OR/AS Singles",
    column: 3,
  },
  {
    name: "[Gen 6] Ubers",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3522911/">ORAS Ubers</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3535106/">ORAS Ubers Viability Rankings</a>`,
    ],

    mod: "gen6",
    searchShow: false,
    ruleset: [
      "Pokemon",
      "Standard",
      "Swagger Clause",
      "Team Preview",
      "Mega Rayquaza Clause",
    ],
  },
  {
    name: "[Gen 6] UU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/dex/xy/tags/uu/">ORAS UU Banlist</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3598164/">ORAS UU Viability Rankings</a>`,
    ],

    mod: "gen6",
    searchShow: false,
    ruleset: ["[Gen 6] OU"],
    banlist: ["OU", "UUBL", "Drizzle", "Drought"],
  },
  {
    name: "[Gen 6] RU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/dex/xy/tags/ru/">ORAS RU Banlist</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3574583/">ORAS RU Viability Rankings</a>`,
    ],

    mod: "gen6",
    searchShow: false,
    ruleset: ["[Gen 6] UU"],
    banlist: ["UU", "RUBL"],
  },
  {
    name: "[Gen 6] NU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/dex/xy/tags/nu/">ORAS NU Banlist</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3555650/">ORAS NU Viability Rankings</a>`,
    ],

    mod: "gen6",
    searchShow: false,
    ruleset: ["[Gen 6] RU"],
    banlist: ["RU", "NUBL"],
  },
  {
    name: "[Gen 6] PU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/dex/xy/tags/pu/">ORAS PU Banlist</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3528743/">ORAS PU Viability Rankings</a>`,
    ],

    mod: "gen6",
    searchShow: false,
    ruleset: ["[Gen 6] NU"],
    banlist: ["NU", "PUBL", "Chatter"],
  },
  {
    name: "[Gen 6] LC",
    threads: [
      `&bullet; <a href="https://www.smogon.com/dex/xy/formats/lc/">ORAS LC Banlist</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3547566/">ORAS LC Viability Rankings</a>`,
    ],

    mod: "gen6",
    searchShow: false,
    maxLevel: 5,
    ruleset: ["Pokemon", "Standard", "Team Preview", "Little Cup"],
    banlist: [
      "LC Uber",
      "Gligar",
      "Misdreavus",
      "Scyther",
      "Sneasel",
      "Tangela",
      "Dragon Rage",
      "Sonic Boom",
      "Swagger",
    ],
  },
  {
    name: "[Gen 6] Monotype",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/posts/7421332/">ORAS Monotype</a>`,
    ],

    mod: "gen6",
    searchShow: false,
    ruleset: [
      "Pokemon",
      "Standard",
      "Swagger Clause",
      "Same Type Clause",
      "Team Preview",
    ],
    banlist: [
      "Aegislash",
      "Altaria-Mega",
      "Arceus",
      "Blaziken",
      "Charizard-Mega-X",
      "Darkrai",
      "Deoxys-Base",
      "Deoxys-Attack",
      "Dialga",
      "Genesect",
      "Gengar-Mega",
      "Giratina",
      "Greninja",
      "Groudon",
      "Ho-Oh",
      "Hoopa-Unbound",
      "Kangaskhan-Mega",
      "Kyogre",
      "Kyurem-White",
      "Lucario-Mega",
      "Lugia",
      "Mawile-Mega",
      "Metagross-Mega",
      "Mewtwo",
      "Palkia",
      "Rayquaza",
      "Reshiram",
      "Sableye-Mega",
      "Salamence-Mega",
      "Shaymin-Sky",
      "Slowbro-Mega",
      "Talonflame",
      "Xerneas",
      "Yveltal",
      "Zekrom",
      "Shadow Tag",
      "Damp Rock",
      "Smooth Rock",
      "Soul Dew",
      "Baton Pass",
    ],
  },
  {
    name: "[Gen 6] Anything Goes",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3523229/">ORAS Anything Goes</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3548945/">ORAS AG Resources</a>`,
    ],

    mod: "gen6",
    searchShow: false,
    ruleset: [
      "Pokemon",
      "Endless Battle Clause",
      "Team Preview",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
    banlist: ["Illegal", "Unreleased"],
  },
  {
    name: "[Gen 6] CAP",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3537407/">ORAS CAP Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3545628/">ORAS CAP Viability Rankings</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/5594694/">ORAS CAP Sample Teams</a>`,
    ],

    mod: "gen6",
    searchShow: false,
    ruleset: ["[Gen 6] OU", "Allow CAP"],
  },
  {
    name: "[Gen 6] Battle Spot Singles",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3527960/">ORAS Battle Spot Singles</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3554616/">ORAS BSS Viability Rankings</a>`,
    ],

    mod: "gen6",
    searchShow: false,
    maxForcedLevel: 50,
    teamLength: {
      validate: [3, 6],
      battle: 3,
    },
    ruleset: ["Pokemon", "Standard GBU"],
    requirePentagon: true,
  },
  {
    name: "[Gen 6] Custom Game",

    mod: "gen6",
    searchShow: false,
    canUseRandomTeam: true,
    debug: true,
    maxLevel: 9999,
    defaultLevel: 100,
    // no restrictions, for serious (other than team preview)
    ruleset: ["Team Preview", "Cancel Mod"],
  },

  // OR/AS Doubles/Triples
  ///////////////////////////////////////////////////////////////////

  {
    section: "OR/AS Doubles/Triples",
  },
  {
    name: "[Gen 6] Doubles OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3498688/">ORAS Doubles OU Banlist</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3535930/">ORAS Doubles OU Viability Rankings</a>`,
    ],

    mod: "gen6",
    gameType: "doubles",
    searchShow: false,
    ruleset: ["Pokemon", "Standard Doubles", "Swagger Clause", "Team Preview"],
    banlist: [
      "DUber",
      "Soul Dew",
      "Dark Void",
      "Gravity ++ Grass Whistle",
      "Gravity ++ Hypnosis",
      "Gravity ++ Lovely Kiss",
      "Gravity ++ Sing",
      "Gravity ++ Sleep Powder",
    ],
  },
  {
    name: "[Gen 6] VGC 2016",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3558332/">VGC 2016 Rules</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3580592/">VGC 2016 Viability Rankings</a>`,
    ],

    mod: "gen6",
    gameType: "doubles",
    searchShow: false,
    maxForcedLevel: 50,
    teamLength: {
      validate: [4, 6],
      battle: 4,
    },
    ruleset: [
      "Pokemon",
      "Species Clause",
      "Nickname Clause",
      "Item Clause",
      "Team Preview",
      "Cancel Mod",
    ],
    banlist: [
      "Illegal",
      "Unreleased",
      "Mew",
      "Celebi",
      "Jirachi",
      "Deoxys",
      "Deoxys-Attack",
      "Deoxys-Defense",
      "Deoxys-Speed",
      "Phione",
      "Manaphy",
      "Darkrai",
      "Shaymin",
      "Shaymin-Sky",
      "Arceus",
      "Victini",
      "Keldeo",
      "Meloetta",
      "Genesect",
      "Diancie",
      "Hoopa",
      "Hoopa-Unbound",
      "Volcanion",
      "Soul Dew",
    ],
    requirePentagon: true,
    onValidateTeam: function (team) {
      const legends = [
        "Mewtwo",
        "Lugia",
        "Ho-Oh",
        "Kyogre",
        "Groudon",
        "Rayquaza",
        "Dialga",
        "Palkia",
        "Giratina",
        "Reshiram",
        "Zekrom",
        "Kyurem",
        "Xerneas",
        "Yveltal",
        "Zygarde",
      ];
      let n = 0;
      for (const set of team) {
        let baseSpecies = this.getTemplate(set.species).baseSpecies;
        if (legends.includes(baseSpecies)) n++;
        if (n > 2)
          return ["You can only use up to two legendary Pok\u00E9mon."];
      }
    },
  },
  {
    name: "[Gen 6] Battle Spot Doubles",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3560820/">ORAS Battle Spot Doubles Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3560824/">ORAS BSD Viability Rankings</a>`,
    ],

    mod: "gen6",
    gameType: "doubles",
    searchShow: false,
    maxForcedLevel: 50,
    teamLength: {
      validate: [4, 6],
      battle: 4,
    },
    ruleset: ["Pokemon", "Standard GBU"],
    requirePentagon: true,
  },
  {
    name: "[Gen 6] Doubles Custom Game",

    mod: "gen6",
    gameType: "doubles",
    searchShow: false,
    canUseRandomTeam: true,
    maxLevel: 9999,
    defaultLevel: 100,
    debug: true,
    // no restrictions, for serious (other than team preview)
    ruleset: ["Team Preview", "Cancel Mod"],
  },
  {
    name: "[Gen 6] Battle Spot Triples",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3533914/">ORAS Battle Spot Triples Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3549201/">ORAS BST Viability Rankings</a>`,
    ],

    mod: "gen6",
    gameType: "triples",
    searchShow: false,
    maxForcedLevel: 50,
    teamLength: {
      validate: [6, 6],
    },
    ruleset: ["Pokemon", "Standard GBU"],
    requirePentagon: true,
  },
  {
    name: "[Gen 6] Triples Custom Game",

    mod: "gen6",
    gameType: "triples",
    searchShow: false,
    canUseRandomTeam: true,
    maxLevel: 9999,
    defaultLevel: 100,
    debug: true,
    // no restrictions, for serious (other than team preview)
    ruleset: ["Team Preview", "Cancel Mod"],
  },

  // B2/W2 Singles
  ///////////////////////////////////////////////////////////////////

  {
    section: "B2/W2 Singles",
    column: 4,
  },
  {
    name: "[Gen 5] UU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3474024/">BW2 UU Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
    ],

    mod: "gen5",
    searchShow: false,
    ruleset: ["[Gen 5] OU"],
    banlist: ["OU", "UUBL", "Drought", "Sand Stream", "Snow Warning"],
  },
  {
    name: "[Gen 5] RU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3473124/">BW2 RU Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
    ],

    mod: "gen5",
    searchShow: false,
    ruleset: ["[Gen 5] UU"],
    banlist: ["UU", "RUBL", "Shell Smash + Baton Pass", "Snow Warning"],
  },
  {
    name: "[Gen 5] NU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3484121/">BW2 NU Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
    ],

    mod: "gen5",
    searchShow: false,
    ruleset: ["[Gen 5] RU"],
    banlist: ["RU", "NUBL", "Prankster + Assist"],
  },
  {
    name: "[Gen 5] LC",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3485860/">BW2 LC Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6431094/">BW2 Sample Teams</a>`,
    ],

    mod: "gen5",
    searchShow: false,
    maxLevel: 5,
    ruleset: ["Pokemon", "Standard", "Team Preview", "Little Cup"],
    banlist: [
      "Berry Juice",
      "Soul Dew",
      "Dragon Rage",
      "Sonic Boom",
      "LC Uber",
      "Gligar",
      "Murkrow",
      "Scyther",
      "Sneasel",
      "Tangela",
    ],
  },
  {
    name: "[Gen 5] GBU Singles",

    mod: "gen5",
    searchShow: false,
    maxForcedLevel: 50,
    teamLength: {
      validate: [3, 6],
      battle: 3,
    },
    ruleset: ["Pokemon", "Standard GBU"],
    banlist: ["Dark Void", "Sky Drop"],
  },
  {
    name: "[Gen 5] Custom Game",

    mod: "gen5",
    searchShow: false,
    canUseRandomTeam: true,
    debug: true,
    maxLevel: 9999,
    defaultLevel: 100,
    // no restrictions, for serious (other than team preview)
    ruleset: ["Team Preview", "Cancel Mod"],
  },

  // B2/W2 Doubles
  ///////////////////////////////////////////////////////////////////

  {
    section: "B2/W2 Doubles",
    column: 4,
  },
  {
    name: "[Gen 5] Doubles OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3533424/">BW2 Doubles Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3533421/">BW2 Doubles Viability Ranking</a>`,
    ],

    mod: "gen5",
    gameType: "doubles",
    searchShow: false,
    ruleset: [
      "Pokemon",
      "Standard",
      "Evasion Abilities Clause",
      "Swagger Clause",
      "Team Preview",
    ],
    banlist: [
      "Arceus",
      "Dialga",
      "Giratina",
      "Giratina-Origin",
      "Groudon",
      "Ho-Oh",
      "Kyogre",
      "Kyurem-White",
      "Jirachi",
      "Lugia",
      "Mewtwo",
      "Palkia",
      "Rayquaza",
      "Reshiram",
      "Zekrom",
      "Soul Dew",
      "Dark Void",
      "Sky Drop",
    ],
  },
  {
    name: "[Gen 5] GBU Doubles",

    mod: "gen5",
    gameType: "doubles",
    searchShow: false,
    maxForcedLevel: 50,
    teamLength: {
      validate: [4, 6],
      battle: 4,
    },
    ruleset: ["Pokemon", "Standard GBU"],
    banlist: ["Dark Void", "Sky Drop"],
  },
  {
    name: "[Gen 5] Doubles Custom Game",

    mod: "gen5",
    gameType: "doubles",
    searchShow: false,
    canUseRandomTeam: true,
    debug: true,
    maxLevel: 9999,
    defaultLevel: 100,
    // no restrictions, for serious (other than team preview)
    ruleset: ["Team Preview", "Cancel Mod"],
  },

  // DPP Singles
  ///////////////////////////////////////////////////////////////////

  {
    section: "DPP Singles",
    column: 4,
  },
  {
    name: "[Gen 4] Ubers",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/posts/7433831/">DPP Ubers Information &amp; Resources</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3505128/">DPP Ubers Viability Ranking</a>`,
    ],

    mod: "gen4",
    searchShow: false,
    ruleset: ["Pokemon", "Standard"],
    banlist: ["Arceus"],
  },
  {
    name: "[Gen 4] UU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3532624/">DPP UU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3503638/">DPP UU Viability Ranking</a>`,
    ],

    mod: "gen4",
    searchShow: false,
    ruleset: ["Pokemon", "Standard"],
    banlist: ["Uber", "OU", "UUBL"],
  },
  {
    name: "[Gen 4] LC",
    threads: [
      `&bullet; <a href="https://www.smogon.com/dp/articles/little_cup_guide">DPP LC Guide</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/7336500/">DPP LC Viability Ranking</a>`,
    ],

    mod: "gen4",
    searchShow: false,
    maxLevel: 5,
    ruleset: ["Pokemon", "Standard", "Little Cup"],
    banlist: [
      "LC Uber",
      "Misdreavus",
      "Murkrow",
      "Scyther",
      "Sneasel",
      "Tangela",
      "Yanma",
      "Berry Juice",
      "Deep Sea Tooth",
      "Dragon Rage",
      "Sonic Boom",
    ],
  },
  {
    name: "[Gen 4] Custom Game",

    mod: "gen4",
    searchShow: false,
    canUseRandomTeam: true,
    debug: true,
    maxLevel: 9999,
    defaultLevel: 100,
    // no restrictions
    ruleset: ["Cancel Mod"],
  },

  // DPP Doubles
  ///////////////////////////////////////////////////////////////////

  {
    section: "DPP Doubles",
    column: 4,
  },
  {
    name: "[Gen 4] Doubles OU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3618411/">DPP Doubles</a>`,
    ],

    mod: "gen4",
    gameType: "doubles",
    searchShow: false,
    ruleset: ["[Gen 4] OU"],
    banlist: ["Explosion", "Soul Dew"],
    unbanlist: [
      "Garchomp",
      "Latias",
      "Latios",
      "Manaphy",
      "Mew",
      "Salamence",
      "Wobbuffet",
      "Wynaut",
    ],
  },
  {
    name: "[Gen 4] Doubles Custom Game",

    mod: "gen4",
    gameType: "doubles",
    searchShow: false,
    canUseRandomTeam: true,
    debug: true,
    maxLevel: 9999,
    defaultLevel: 100,
    // no restrictions
    ruleset: ["Cancel Mod"],
  },

  // Past Generations
  ///////////////////////////////////////////////////////////////////

  {
    section: "Past Generations",
    column: 4,
  },
  {
    name: "[Gen 3] Ubers",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/posts/7433832/">ADV Ubers Information &amp; Resources</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3536426/">ADV Ubers Viability Ranking</a>`,
    ],

    mod: "gen3",
    searchShow: false,
    ruleset: ["Pokemon", "Standard"],
    banlist: ["Smeargle + Ingrain", "Wobbuffet + Leftovers"],
  },
  {
    name: "[Gen 3] UU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3585923/">ADV UU Metagame Discussion</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/threads/3548578/">ADV UU Viability Rankings</a>`,
    ],

    mod: "gen3",
    searchShow: false,
    ruleset: ["[Gen 3] OU"],
    banlist: ["OU", "UUBL"],
  },
  {
    name: "[Gen 3] NU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3503540/">ADV NU Viability Rankings</a>`,
    ],

    mod: "gen3",
    searchShow: false,
    ruleset: ["[Gen 3] UU"],
    banlist: ["UU"],
  },
  {
    name: "[Gen 3] Custom Game",

    mod: "gen3",
    searchShow: false,
    debug: true,
    ruleset: ["Pokemon", "HP Percentage Mod", "Cancel Mod"],
  },
  {
    name: "[Gen 3] Doubles Custom Game",

    mod: "gen3",
    gameType: "doubles",
    searchShow: false,
    debug: true,
    ruleset: ["Pokemon", "HP Percentage Mod", "Cancel Mod"],
  },
  {
    name: "[Gen 2] Ubers",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/posts/7433879/">GSC Ubers Information &amp; Resources</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6431086/">GSC Sample Teams</a>`,
    ],

    mod: "gen2",
    searchShow: false,
    ruleset: ["Pokemon", "Standard"],
  },
  {
    name: "[Gen 2] UU",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3576710/">GSC UU</a>`,
    ],

    mod: "gen2",
    searchShow: false,
    ruleset: ["[Gen 2] OU"],
    banlist: ["OU", "UUBL"],
  },
  {
    name: "[Gen 2] Custom Game",

    mod: "gen2",
    searchShow: false,
    debug: true,
    ruleset: ["Pokemon", "HP Percentage Mod", "Cancel Mod"],
  },
  {
    name: "[Gen 1] Ubers",
    threads: [
      `&bullet; <a href="https://www.smogon.com/forums/threads/3541329/">RBY Ubers Viability Ranking</a>`,
      `&bullet; <a href="https://www.smogon.com/forums/posts/6431045/">RBY Sample Teams</a>`,
    ],

    mod: "gen1",
    searchShow: false,
    ruleset: ["Pokemon", "Standard"],
  },
  {
    name: "[Gen 1] OU (tradeback)",
    desc: `RBY OU with movepool additions from the Time Capsule.`,
    threads: [
      `&bullet; <a href="https://www.smogon.com/articles/rby-tradebacks-ou/">Information</a>`,
    ],

    mod: "gen1",
    searchShow: false,
    ruleset: [
      "Pokemon",
      "Allow Tradeback",
      "Sleep Clause Mod",
      "Freeze Clause Mod",
      "Species Clause",
      "OHKO Clause",
      "Evasion Moves Clause",
      "HP Percentage Mod",
      "Cancel Mod",
    ],
    banlist: [
      "Uber",
      "Unreleased",
      "Illegal",
      "Nidoking + Fury Attack + Thrash",
      "Exeggutor + Poison Powder + Stomp",
      "Exeggutor + Sleep Powder + Stomp",
      "Exeggutor + Stun Spore + Stomp",
      "Jolteon + Focus Energy + Thunder Shock",
      "Flareon + Focus Energy + Ember",
    ],
  },
  {
    name: "[Gen 1] Stadium",

    mod: "stadium",
    searchShow: false,
    ruleset: ["Pokemon", "Standard", "Team Preview"],
    banlist: [
      "Uber",
      "Nidoking + Fury Attack + Thrash",
      "Exeggutor + Poison Powder + Stomp",
      "Exeggutor + Sleep Powder + Stomp",
      "Exeggutor + Stun Spore + Stomp",
      "Jolteon + Focus Energy + Thunder Shock",
      "Flareon + Focus Energy + Ember",
    ],
  },
  {
    name: "[Gen 1] Custom Game",

    mod: "gen1",
    searchShow: false,
    debug: true,
    ruleset: ["Pokemon", "HP Percentage Mod", "Cancel Mod"],
  },
];

exports.Formats = Formats;
