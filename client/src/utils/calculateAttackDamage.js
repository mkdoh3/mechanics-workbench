//calculate final damage output given all variables; character strength, weapon mods, and attack mods

export default function calculateAttackDamage(characterStats, weaponStats, attacks) {
  const data = [];
  const STRMod = (characterStats.strength + weaponStats.STRMod) / 100;
  attacks.forEach((attack, index) => {
    const output = {}
    const APS = weaponStats.APS * attack.APSMod;
    output.name = attack.name;
    output.min = (weaponStats.minDmg * STRMod) * attack.dmgMod;
    output.max = (weaponStats.maxDmg * STRMod) * attack.dmgMod;
    if(attack.attackType === weaponStats.elemental.type) {
      const bonusMod = weaponStats.elemental.dmgMod;
      output.min += (output.min * bonusMod);
      output.max += (output.max * bonusMod)
    }
    output.DPS = ((output.min + output.max) / 2) * APS;
    data.push(output)
  })
  return data;
}