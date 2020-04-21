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
  bloodDemon: {
    name: 'Blood Demon',
    abbr: 'BD'
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
    name: 'Carmilla',
    gold: 2,
    roles: [roles.wrestler],
    factions: [factions.bloodDemon],
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
    name: 'Franco',
    gold: 2,
    roles: [roles.weaponMaster],
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
    factions: [factions.abyss],
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
    name: 'Khufra',
    gold: 3,
    roles: [roles.wrestler],
    factions: [factions.westernDesert],
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
  // LEVEL 4
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
    name: 'Bruno',
    gold: 4,
    roles: [roles.marksman],
    factions: [factions.cyborg],
  },
  {
    name: 'Cecilion',
    gold: 4,
    roles: [roles.mage],
    factions: [factions.bloodDemon],
  },
  {
    name: 'Sun',
    gold: 4,
    roles: [roles.summoner],
    factions: [factions.dragonsAltar],
  },
  {
    name: 'Natalia',
    gold: 4,
    roles: [roles.assasin],
    factions: [factions.monasteryOfLight],
  },
  {
    name: 'Popol and Kupa',
    gold: 4,
    roles: [roles.marksman, roles.summoner],
    factions: [factions.northernVale],
  },
  {
    name: 'Aurora',
    gold: 4,
    roles: [roles.mage, roles.elementalist],
    factions: [factions.northernVale],
  },
  {
    name: 'Guinevere',
    gold: 4,
    roles: [roles.wrestler],
    factions: [factions.empire],
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
    name: 'Thamuz',
    gold: 5,
    roles: [roles.weaponMaster],
    factions: [factions.abyss],
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
];

export {
  roles,
  factions,
  heroes,
  goldToColorMap,
}