const roles = {
  weaponMaster: {
    name: 'Weapon Master',
    abbr: 'WM'
  },
  targeman: {
    name: 'Targeman',
    abbr: 'T',
  },
  marksman: {
    name: 'Marksman',
    abbr: 'MM'
  },
  elementalist: {
    name: 'Elementalist',
    abbr: 'E'
  },
  mage: {
    name: 'Mage',
    abbr: 'M'
  },
  guardian: {
    name: 'Guardian',
    abbr: 'G'
  },
  summoner: {
    name: 'Summoner',
    abbr: 'SM'
  },
  support: {
    name: 'Support',
    abbr: 'SP'
  },
  wrestler: {
    name: 'Wrestler',
    abbr: 'W',
  },
  assasin: {
    name: 'Assasin',
    abbr: 'A'
  }
}

const factions = {
  elf: {
    name: 'Elf',
    abbr: 'E'
  },
  westernDesert: {
    name: 'Western Desert',
    abbr: 'WD',
  },
  theEruditio: {
    name: 'The Eruditio',
    abbr: 'ER'
  },
  cyborg: {
    name: 'Cyborg',
    abbr: 'CY'
  },
  scarletShadow: {
    name: 'Scarlet Shadow',
    abbr: 'SS'
  },
  dragonsAltar: {
    name: 'Dragons Altar',
    abbr: 'DA'
  },
  monasteryOfLight: {
    name: 'Monastery of Light',
    abbr: 'ML'
  },
  northernVale: {
    name: 'Northern Vale',
    abbr: 'NV'
  },
  abyss: {
    name: 'Abyss',
    abbr: 'A',
  },
  celestial: {
    name: 'Celestial',
    abbr: 'C'
  },
  empire: {
    name: 'Empire',
    abbr: 'EM'
  },
  undead: {
    name: 'Undead',
    abbr: 'U',
  },
}

const goldToColorMap = {
  1: '#a9a9aa',
  2: '#57a44f',
  3: '#4981e6',
  4: '#af2de6',
  5: '#e78646',
}

const heroes = [
  // LEVEL 1
  {
    name: 'Miya',
    gold: 1,
    roles: [roles.marksman],
    factions: [factions.elf],
  },
  {
    name: 'Vale',
    gold: 1,
    roles: [roles.elementalist],
    factions: [factions.westernDesert],
  },
  {
    name: 'Chou',
    gold: 1,
    roles: [roles.wrestler],
    factions: [factions.theEruditio],
  },
  {
    name: 'Saber',
    gold: 1,
    roles: [roles.assasin],
    factions: [factions.cyborg],
  },
  {
    name: 'Zilong',
    gold: 1,
    roles: [roles.weaponMaster],
    factions: [factions.dragonsAltar],
  },
  {
    name: 'Akai',
    gold: 1,
    roles: [roles.guardian],
    factions: [factions.dragonsAltar],
  },
  {
    name: 'Rafaela',
    gold: 1,
    roles: [roles.support],
    factions: [factions.monasteryOfLight],
  },
  {
    name: 'Martis',
    gold: 1,
    roles: [roles.weaponMaster],
    factions: [factions.celestial],
  },
  {
    name: 'Harith',
    gold: 1,
    roles: [roles.mage],
    factions: [factions.empire],
  },
  // LEVEL 2
  {
    name: 'Eudora',
    gold: 2,
    roles: [roles.elementalist],
    factions: [factions.elf],
  },
  {
    name: 'Diggie',
    gold: 2,
    roles: [roles.guardian, roles.summoner],
    factions: [factions.theEruditio],
  },
  {
    name: 'Alpha',
    gold: 2,
    roles: [roles.weaponMaster],
    factions: [factions.cyborg],
  },
  {
    name: 'Hanabi',
    gold: 2,
    roles: [roles.marksman],
    factions: [factions.scarletShadow],
  },
  {
    name: 'Hayabusa',
    gold: 2,
    roles: [roles.assasin],
    factions: [factions.scarletShadow],
  },
  {
    name: 'Baxia',
    gold: 2,
    roles: [roles.targeman],
    factions: [factions.dragonsAltar],
  },
  {
    name: 'Chang\'e',
    gold: 2,
    roles: [roles.mage],
    factions: [factions.dragonsAltar],
  },
  {
    name: 'Masha',
    gold: 2,
    roles: [roles.wrestler],
    factions: [factions.northernVale],
  },
  {
    name: 'Argus',
    gold: 2,
    roles: [roles.weaponMaster],
    factions: [factions.abyss],
  },
  {
    name: 'Moskov',
    gold: 2,
    roles: [roles.marksman],
    factions: [factions.abyss, factions.undead],
  },
  {
    name: 'Zhask',
    gold: 2,
    roles: [roles.summoner],
    factions: [factions.celestial],
  },
  {
    name: 'Lancelot',
    gold: 2,
    roles: [roles.assasin],
    factions: [factions.empire],
  },
  // LEVEL 3
  {
    name: 'Belerick',
    gold: 3,
    roles: [roles.guardian],
    factions: [factions.elf],
  },
  {
    name: 'Selena',
    gold: 3,
    roles: [roles.assasin],
    factions: [factions.elf],
  },
  {
    name: 'Valir',
    gold: 3,
    roles: [roles.elementalist],
    factions: [factions.westernDesert],
  },
  {
    name: 'Esmeralda',
    gold: 3,
    roles: [roles.mage],
    factions: [factions.westernDesert],
  },
  {
    name: 'Angela',
    gold: 3,
    roles: [roles.support],
    factions: [factions.cyborg],
  },
  {
    name: 'Wanwan',
    gold: 3,
    roles: [roles.marksman],
    factions: [factions.dragonsAltar],
  },
  {
    name: 'Alucard',
    gold: 3,
    roles: [roles.weaponMaster],
    factions: [factions.monasteryOfLight],
  },
  {
    name: 'Freya',
    gold: 3,
    roles: [roles.weaponMaster],
    factions: [factions.northernVale],
  },
  {
    name: 'Alice',
    gold: 3,
    roles: [roles.mage],
    factions: [factions.abyss],
  },
  {
    name: 'Dyrroth',
    gold: 3,
    roles: [roles.wrestler],
    factions: [factions.abyss],
  },
  {
    name: 'Karrie',
    gold: 3,
    roles: [roles.marksman],
    factions: [factions.celestial],
  },
  {
    name: 'Tigreal',
    gold: 3,
    roles: [roles.targeman],
    factions: [factions.empire],
  },
  {
    name: 'Gusion',
    gold: 3,
    roles: [roles.assasin],
    factions: [factions.empire],
  },
  {
    name: 'Khufra',
    gold: 3,
    roles: [roles.wrestler],
    factions: [factions.undead],
  },
  // LEVEL 4
  {
    name: 'Estes',
    gold: 4,
    roles: [roles.support],
    factions: [factions.elf],
  },
  {
    name: 'Karina',
    gold: 4,
    roles: [roles.assasin],
    factions: [factions.elf],
  },
  {
    name: 'Claude',
    gold: 4,
    roles: [roles.marksman],
    factions: [factions.westernDesert, factions.theEruditio],
  },
  {
    name: 'Johnson',
    gold: 4,
    roles: [roles.targeman],
    factions: [factions.cyborg],
  },
  {
    name: 'Kagura',
    gold: 4,
    roles: [roles.mage],
    factions: [factions.scarletShadow],
  },
  {
    name: 'Sun',
    gold: 4,
    roles: [roles.summoner],
    factions: [factions.dragonsAltar],
  },
  {
    name: 'Granger',
    gold: 4,
    roles: [roles.marksman],
    factions: [factions.monasteryOfLight],
  },
  {
    name: 'Aurora',
    gold: 4,
    roles: [roles.mage, roles.elementalist],
    factions: [factions.northernVale],
  },
  {
    name: 'Terizla',
    gold: 4,
    roles: [roles.weaponMaster],
    factions: [factions.abyss],
  },
  {
    name: 'Guinevere',
    gold: 4,
    roles: [roles.wrestler],
    factions: [factions.empire],
  },
  {
    name: 'Vexana',
    gold: 4,
    roles: [roles.summoner],
    factions: [factions.undead],
  },
  // LEVEL 5
  {
    name: 'Irithel',
    gold: 5,
    roles: [roles.marksman],
    factions: [factions.elf],
  },
  {
    name: 'Minotaur',
    gold: 5,
    roles: [roles.guardian],
    factions: [factions.westernDesert],
  },
  {
    name: 'Ling',
    gold: 5,
    roles: [roles.assasin],
    factions: [factions.dragonsAltar],
  },
  {
    name: 'Gatotkaca',
    gold: 5,
    roles: [roles.wrestler],
    factions: [factions.celestial],
  },
  {
    name: 'Odette',
    gold: 5,
    roles: [roles.mage],
    factions: [factions.empire],
  },
  {
    name: 'Leomord',
    gold: 5,
    roles: [roles.weaponMaster],
    factions: [factions.undead],
  },
];

export {
  roles,
  factions,
  heroes,
  goldToColorMap,
}