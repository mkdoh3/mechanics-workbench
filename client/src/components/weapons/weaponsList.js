const weaponsList = [
  {
    name: "Adamant Spanner",
    type: 'mace',
    minDmg: 45,
    maxDmg: 70,
    APS: 1,
    STRMod: 20,
    elemental: { 
      type: 'physical',
      dmgMod: 0.125
    }
  },
  {
    name: "Railsplitter",
    type: 'axe',
    minDmg: 50,
    maxDmg: 65,
    APS: 1.2,
    STRMod: 20,
    elemental: { 
      type: 'fire',
      dmgMod: 0.1
    }
  },
  {
    name: "Flaming Poisoning Raging Sword Of Doom",
    type: 'sword',
    minDmg: 5,
    maxDmg: 150,
    APS: 1.4,
    STRMod: 20,
    elemental: { 
      type: 'fire',
      dmgMod: 0.15
    }
  }
]

export default weaponsList;