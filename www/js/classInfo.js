/**
 * Created by Josh on 3/27/2015.
 */
/* This class holds all the data for each class and spec - 385 pieces of info*/

//Fields to be filled
var statPriority;
var statSummary;
var gemsPriority;
var enchants;
var talentPriority;
var majorGlyphs;
var minorGlyphs;
var stRotation;
var aoeRotation;
var talentAbilities;
var cooldowns;
//------------------

//Arrays of items
var gemsArray = [
    ['Greater Stamina Taladite','+50 Stamina'],
    ['Greater Multistrike Taladite','+50 Multistrike'],
    ['Greater Versatility Taladite','+50 Versatility'],
    ['Greater Haste Taladite','+50 Haste'],
    ['Greater Mastery Taladite','+50 Mastery']
];
var enchantsArray = [
    ['Gift of Multistrike','Permanently enchant a neck to increase multistrike by 75.','Permanently enchant a cloak to increase multistrike by 100 and movement speed by 10%.','Permanently enchant a ring to increase multistrike by 50.'],
    ['Gift of Versatility','Permanently enchant a neck to increase versatility by 75.','Permanently enchant a cloak to increase versatility by 100 and movement speed by 10%.','Permanently enchant a ring to increase versatility by 50.'],
    ['Gift of Haste','Permanently enchant a neck to increase haste by 75.','Permanently enchant a cloak to increase haste by 100 and movement speed by 10%.','Permanently enchant a ring to increase haste by 50.'],
    ['Gift of Mastery','Permanently enchant a neck to increase mastery by 75.','Permanently enchant a cloak to increase mastery by 100 and movement speed by 10%.','Permanently enchant a ring to increase mastery by 50.'],
    ['Gift of Critical Strike','Permanently enchant a neck to increase critical strike by 75.','Permanently enchant a cloak to increase critical strike by 100 and movement speed by 10%.','Permanently enchant a ring to increase critical strike by 50.'],
    //Plus Weapon Enchants
    ['Rune of the Fallen Crusader','Affixes your rune weapon with a rune that has a chance to heal you for 3% and increase total Strength by 20% for 15 sec.  Modifying your rune weapon requires a Rune Forge in Ebon Hold.']
];
//---------------

var pve_death_knight_blood = {
    statPriority: ['Stamina > Bonus Armor >= Armor >',
                   'Strength > Multistrike >= Versatility >=',
                   'Haste > Mastery > Crit'],
    statSummary: [
        ['Stamina','Stamina increases your total health.'],
        ['Bonus Armor','Bonus Armor increases Armor and attack power for tanking specializations. As Blood, Bonus Armor also increases your Attack Power thanks to Bladed Armor.'],
        ['Armor','Armor reduces physical damage received.'],
        ['Strength','Strength increases your attack power and the damage dealt by your abilities. Further, Strength slightly increases your chance to Parry.'],
        ['Multistrike','Versatility increases your damage, healing, and absorption done and decreases damage received.'],
        ['Versatility','Multistrike grants a chance for your spells and abilities to activate up to 2 additional times at 30% effectiveness. As Blood, Runic Strikes provides additional Multistrike rating and also increases your Runic Power generation along with Blood Rites.'],
        ['Haste','Haste increases attack and spell casting speed, adds additional damage and healing to DoTs and HoTs, and reduces the GCD. Also, Haste increases your Rune regeneration speed. As Blood, Haste allows for more frequent use of your Rune-based threat and survivability abilities.'],
        ['Mastery','Mastery provides a passive bonus to your character based on your specialization. Mastery: Blood Shield provides an absorption shield with every Death Strike. Stacking Mastery leads to smoother incoming damage that is easier for healers to manage.'],
        ['Crit','Critical Strike increase the chance for your spells and attacks to critically hit for additional damage and healing. As Blood, Crit also increases your chance to Parry via Riposte.']
    ],
    gemsPriority: ['ion-ios-flask', gemsArray[0][0], gemsArray[0][1]] , //Greater Stamina Taladite
    enchants: [
        ['ion-ios-flask', enchantsArray[0][0], 'Neck',enchantsArray[0][1]], //Neck - Multistrike
        ['ion-ios-flask', enchantsArray[0][0], 'Cloak',enchantsArray[0][2]], //Cloak - Multistrike
        ['ion-ios-flask', enchantsArray[0][0], 'Ring',enchantsArray[0][3]], //Ring - Multistrike
        ['ion-ios-flask', enchantsArray[5][0], 'Weapon',enchantsArray[5][1]]  //Weapon - Fallen Crusader
    ],
    talentPriority: [
        ['ion-ios-flask', 'Plague Leech', 'Consumes your Blood Plague and Frost Fever on the target to activate up to 2 random fully-depleted runes as Death Runes.'],
        ['ion-ios-flask', 'Anti-Magic Zone', 'Places an Anti-Magic Zone for 3 sec that reduces spell damage taken by party or raid members by 20%.'],
        ['ion-ios-flask', 'Death\'s Advance', 'You passively move 10% faster, and movement-impairing effects may not reduce you below 70% of normal movement speed. When activated, you gain 30% movement speed and may not be slowed below 100% of normal movement speed for 6 seconds.'],
        ['ion-ios-flask', 'Blood Trap', 'Every 15 Runic Power you spend will generate a Blood Charge. Max 12 charges. Blood Tap consumes 5 Blood Charges to activate a random fully-depleted rune as a Death Rune.'],
        ['ion-ios-flask', 'Death Pact', 'Heals the Death Knight for 50% of max health, and absorbs incoming healing equal to 25% of max health for 15 sec.'],
        ['ion-ios-flask', 'Gorefiend\'s Grasp', 'Shadowy tendrils coil around all enemies within 20 yards of a target (hostile or friendly), pulling them to the target\'s location.'],
        ['ion-ios-flask', 'Necrotic Plague', 'A powerful disease that deals (3.2% of Attack power) Shadowfrost damage per stack every 2 sec for 30 sec. Each time it deals damage, it gains 1 stack, and infects another nearby enemy within 8 yards if possible. Blood: You gain 2 Runic Power whenever a target infected with Necrotic Plague attempts to attack youReplaces Blood Plague and Frost Fever, and is applied by any ability which applied either. This effect cannot be refreshed; it gains 1 stack instead.']
    ],
    majorGlyphs: [
        ['ion-ios-flask','Glyph of Outbreak','Recommended: Your Outbreak spell no longer has a cooldown, but now costs 30 Runic Power.'],
        ['ion-ios-flask','Glyph of Vampiric Blood','Recommended: Increases the bonus healing received while your Vampiric Blood is active by an additional 10%, but your Vampiric Blood no longer grants you health.'],
        ['ion-ios-flask','Glyph of Anti-Magic Shell','Causes your Anti-Magic Shell to absorb all incoming magical damage, up to the absorption limit. Exclusive with: Glyph of Regenerative Magic, Glyph of Absorb Magic'],
        ['ion-ios-flask','Glyph of Death Coil','Your Death Coil spell is now usable on all allies.  When cast on a non-undead ally, Death Coil shrouds them with a protective barrier that absorbs up to [(0.80 * Attack power) * 1 * 1] damage.'],
        ['ion-ios-flask','Glyph of Icebound Fortitude','Reduces the cooldown of your Icebound Fortitude by 50%, but also reduces its duration by 75%.'],
        ['ion-ios-flask','Glyph of Regenerative Magic','If Anti-Magic Shell expires after its full duration, the cooldown is reduced by up to 50%, based on the amount of damage absorption remaining. Exclusive with: Glyph of Anti-Magic Shell, Glyph of Absorb Magic']
    ],
    minorGlyphs: [
        ['ion-ios-flask','Glyph of Path of Frost','Your Path of Frost ability allows you to fall from a greater distance without suffering damage.']
    ],
    stRotation: [ //General
        [
            'Presence: Blood Presence',
            'Diseases: Outbreak, Icy Touch, Plague Strike',
            'Buffs: Blood Shield(Mastery), Bone Shield',
            'Attacks: Death Strike, Soul Reaper, Death Coil, Blood Boil'
        ],
        [ //In-depth
            'When pulling, you will want to apply diseases using Outbreak. Then you can Blood Boil with both Blood Runes, and use Death Strike to take advantage of the Death Strike mechanics (healing for damage taken in preceding 5 sec).',
            'You will want to keep diseases active at all times. The most efficient way to refresh your diseases is with Blood Boil. However, if a disease expires, refresh the disease via Outbreak. If Outbreak is unavailable, then use Icy Touch and/or Plague Strike. Diseases should only be refreshed when they have <= 9 sec remaining.',
            'Beyond diseases, you will want to Death Strike as much as possible with your Frost, Unholy, and Death Runes. Use Blood Boil with Blood Runes, and Death Coil whenever all Runes are depleted or to dump Runic Power. Soul Reaper replaces Blood Boil when your target has 35% or less health. Also, remember to watch for Crimson Scourge procs and consume them as quickly as possible.'
        ]
    ],
    aoeRotation: [ //General
        [
            'Presence: Blood Presence',
            'Attacks: Death and Decay, Blood Boil'
        ],
        [ //In-depth
            'When tanking multiple mobs, you will want to immediately drop a Death and Decay. Then, apply diseases and spread them via Blood Boil. Use Blood Boil with your Blood Runes. Continue to Death Strike and Death Coil as you would in the single target scenario. Watch for Crimson Scourge procs and consume them quickly to prevent additional procs from being wasted. Death and Decay has priority over Blood Boil for consuming Crimson Scourge procs.'
        ]
    ],
    talentAbilities: [
        ['ion-ios-flask', 'Plague Leech', 'is best used to squeeze in more Death Strike. This combo is best achieved with Glyph of Outbreak so that you can quickly reapply your diseases after every Plague Leech -> Death Strike.'],
        ['ion-ios-flask', 'Anti-Magic Zone', 'should be activated when you anticipate a large incoming magical attack, with priority given to attacks that deal group-wide damage.'],
        ['ion-ios-flask', 'Death\'s Advance', 'should be used for a movement speed boost.'],
        ['ion-ios-flask', 'Blood Trap', 'is best used by consuming your Blood Charge when they stack to 10+. Do not wait for a full 12 stack of Blood Charge before using them; you risk wasting any additional Blood Charge that might proc. Saving 10 Blood Charge allows you to dump your Blood Charge for multiple Death Strike.'],
        ['ion-ios-flask', 'Death Pact', 'should be used as a strong self-heal. Try to time the use of Death Pact with your healers to prevent overhealing.'],
        ['ion-ios-flask', 'Necrotic Plague', 'is applied by the abilities that normally apply your diseases. Maintain Necrotic Plague at all times like you would with normal diseases.']
    ],
    cooldowns: [
        ['ion-ios-flask', 'Anti-Magic Shell', 'Carefully time to absorb magic damage or prevent debuffs.'],
        ['ion-ios-flask', 'Army of the Dead', 'Use to distract targets and provide some additional damage.'],
        ['ion-ios-flask', 'Bone Shield', 'Use as often as possible for passive mitigation.'],
        ['ion-ios-flask', 'Dancing Rune Weapon', 'Use before taking a high number of melee attacks.'],
        ['ion-ios-flask', 'Dark Command', 'Use to establish threat on targets not attacking you.'],
        ['ion-ios-flask', 'Death Grip', 'Use as a secondary taunt on adds and to bring them to you.'],
        ['ion-ios-flask', 'Empower Rune Weapon', 'Use for extra Runes for Death Strike spam.'],
        ['ion-ios-flask', 'Icebound Fortitude', 'Use proactively to reduce incoming damage.'],
        ['ion-ios-flask', 'Outbreak', 'Use to quickly apply your diseases.'],
        ['ion-ios-flask', 'Raise Ally', 'Use to resurrect key raid members.'],
        ['ion-ios-flask', 'Rune Tap', 'Use as needed to mitigate incoming damage.'],
        ['ion-ios-flask', 'Vampiric Blood', 'Use when high damage is received or expected.']
    ]
};

var pve_death_knight_frost = {
    statPriority: "Strength > Mastery > Haste > Multistrike > Versatility > Crit",
    statSummary: "Strength"+
                "Strength increases your attack power and the damage dealt by your abilities."+

                    "Mastery"+
                "Mastery provides a passive bonus to your character based on your specialization. Mastery: Frozen Heart increases all Frost damage dealt, which increases the damage of core abilities like Frost Fever, Howling Blast, and Frost Strike."+

                    "Haste"+
                "Haste increases attack and spell casting speed, adds additional damage and healing to DoTs and HoTs, and reduces the GCD. Also, Haste increases your Rune regeneration speed. As Frost, you receive additional Haste from Icy Talons and Haste increases the number of procs you receive from Killing Machine."+

                    "Multistrike"+
                "Multistrike grants a chance for your spells and abilities to activate up to 2 additional times at 30% effectiveness."+

                    "Versatility"+
                "Versatility increases your damage, healing, and absorption done and decreases damage received."+

                    "Crit"+
                "Critical Strike increase the chance for your spells and attacks to critically hit for additional damage and healing.",
    gemsPriority: "Gem - Greater Mastery Taladite",
    enchants: "NeckGift of Mastery View All Options"+
                "CloakGift of Mastery View All Options"+
                "RingGift of Mastery View All Options"+
                "Weapon(Mainhand) Rune of the Fallen Crusader(Offhand) Rune of Razorice",
    talentPriority: "WIP",
    majorGlyphs: "Glyph of Anti-Magic Shell Optional. Useful for absorbing fewer and larger magic attacks."+
                "Glyph of Icebound Fortitude Optional. Useful when fight requires frequent use."+
                "Glyph of Regenerative Magic Optional. Useful for more frequent use of Anti-Magic Shell."+
                "Shifting Presences Optional. Useful if you might need to DPS off tank.",
    minorGlyphs: "Glyph of Path of Frost Recommended. Reduces falling damage."+
                "Glyph of Army of the Dead Optional. Useful if extra taunts interfere with tanks."+
                "Glyph of Tranquil Grip Optional. Useful for pulling without getting aggro.",
    stRotation: "WIP",
    aoeRotation: "WIP",
    talentAbilities: "WIP",
    cooldowns: "WIP"
};

var pve_death_knight_unholy = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};

//Starting information when app loads
setClassInfo(getClass(), getSpec(), getGameType());


//------------------------------------------------------------------------//
//--------- STAT PRIORITY ---------//
function getStatPriority() {
    return statPriority;
}
//--------- STAT SUMMARIES ---------//
function getStatSummary() {
    return statSummary;
}

//------------------------------------------------------------------------//
//--------- GEMS ---------//
function getGems() {
    return gemsPriority;
}
//--------- ENCHANTS ---------//
function getEnchants() {
    return enchants;
}

//------------------------------------------------------------------------//
//--------- TALENTS ---------//
function getTalents() {
    return talentPriority;
}
//--------- MAJOR G ---------//
function getMajorGlyphs() {
    return majorGlyphs;
}
//--------- MINOR G ---------//
function getMinorGlyphs() {
    return minorGlyphs;
}

//------------------------------------------------------------------------//
//--------- SINGLE TARGET ROTATION ---------//
function getSTRotation() {
    return stRotation;
}
//--------- AOE ROTATION ---------//
function getAOERotation() {
    return aoeRotation;
}
//--------- TALENTS ABILITIES ---------//
function getTalentAbilities() {
    return talentAbilities;
}
//--------- COOLDOWNS ---------//
function getCooldowns() {
    return cooldowns;
}

//------------------------------------------------------------------------//
//--------- GET CLASS ---------//
function setClassInfo(cls, spec, type) {
    var result = "";
    var cur;

    //Type
    if (type == "PVE") {
        //Classes
        if (cls == "Death Knight") {
            //Specs
            if (spec == "Blood") {
                cur = pve_death_knight_blood;
            }
            else if (spec == "Frost") {
                cur  = pve_death_knight_frost;
            }
            else {
                cur  = pve_death_knight_unholy;
            }
        }
        if (cls == "Druid") {
            //Specs
            if (spec == "Balance") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Feral") {

            }
            else if (spec == "Guardian") {

            }
            else {

            }
        }
        if (cls == "Hunter") {
            //Specs
            if (spec == "Beast Mastery") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Marksmanship") {

            }
            else {

            }
        }
        if (cls == "Mage") {
            //Specs
            if (spec == "Arcane") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Fire") {

            }
            else {

            }
        }
        if (cls == "Monk") {
            //Specs
            if (spec == "Brewmaster") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Mistweaver") {

            }
            else {

            }
        }
        if (cls == "Paladin") {
            //Specs
            if (spec == "Holy") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Protection") {

            }
            else {

            }
        }
        if (cls == "Priest") {
            //Specs
            if (spec == "Holy") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Discipline") {

            }
            else {

            }
        }
        if (cls == "Rogue") {
            //Specs
            if (spec == "Assassination") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Combat") {

            }
            else {

            }
        }
        if (cls == "Shaman") {
            //Specs
            if (spec == "Elemental") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Enhancement") {

            }
            else {

            }
        }
        if (cls == "Warlock") {
            //Specs
            if (spec == "Affliction") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Demonology") {

            }
            else {

            }
        }
        if (cls == "Warrior") {
            //Specs
            if (spec == "Arms") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Fury") {

            }
            else if (spec == "Protection") {

            }
            else {

            }
        }
    }
    else if (type == "PVP") {
        //Classes
        if (cls == "Death Knight") {
            //Specs
            if (spec == "Blood") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Frost") {

            }
            else {

            }
        }
        if (cls == "Druid") {
            //Specs
            if (spec == "Balance") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Feral") {

            }
            else if (spec == "Guardian") {

            }
            else {

            }
        }
        if (cls == "Hunter") {
            //Specs
            if (spec == "Beast Mastery") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Marksmanship") {

            }
            else {

            }
        }
        if (cls == "Mage") {
            //Specs
            if (spec == "Arcane") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Fire") {

            }
            else {

            }
        }
        if (cls == "Monk") {
            //Specs
            if (spec == "Brewmaster") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Mistweaver") {

            }
            else {

            }
        }
        if (cls == "Paladin") {
            //Specs
            if (spec == "Holy") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Protection") {

            }
            else {

            }
        }
        if (cls == "Priest") {
            //Specs
            if (spec == "Holy") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Discipline") {

            }
            else {

            }
        }
        if (cls == "Rogue") {
            //Specs
            if (spec == "Assassination") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Combat") {

            }
            else {

            }
        }
        if (cls == "Shaman") {
            //Specs
            if (spec == "Elemental") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Enhancement") {

            }
            else {

            }
        }
        if (cls == "Warlock") {
            //Specs
            if (spec == "Affliction") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Demonology") {

            }
            else {

            }
        }
        if (cls == "Warrior") {
            //Specs
            if (spec == "Arms") {
                result = "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit";
            }
            else if (spec == "Fury") {

            }
            else if (spec == "Protection") {

            }
            else {

            }
        }
    }

    //Set the current class stats
    statPriority = cur.statPriority;
    statSummary = cur.statSummary;
    gemsPriority = cur.gemsPriority;
    enchants = cur.enchants;
    talentPriority = cur.talentPriority;
    majorGlyphs = cur.majorGlyphs;
    minorGlyphs = cur.minorGlyphs;
    stRotation = cur.stRotation;
    aoeRotation = cur.aoeRotation;
    talentAbilities = cur.talentAbilities;
    cooldowns = cur.cooldowns;
}


//------------------------------------------------------------------------//
//--------- CLASSES & INFO ---------//




//------------------------------------------------------------------------//
var pve_druid_balance = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_hunter_beast_mastery = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_mage_arcane = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_monk_brewmaster = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_paladin_holy = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_priest_holy = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_rogue_assassination = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_shaman_elemental = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_warlock_affliction = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_warrior_arms = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};

var pve_druid_feral = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_hunter_marksmanship = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_mage_fire = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_monk_mistweaver = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_paladin_protection = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_priest_dicipline = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_rogue_combat = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_shaman_enhancement = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_warlock_demonology = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_warrior_fury = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};

var pve_druid_guardian = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_hunter_survival = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_mage_frost = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_monk_windwalker = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_paladin_retribution = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_priest_shadow = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_rogue_subtlety = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_shaman_restoration = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_warlock_destruction = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_warrior_protection = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_warrior_guardian = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var pve_druid_restoration = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};

var death_knight_blood = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var druid_balance = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var hunter_beast_mastery = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var mage_arcane = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var monk_brewmaster = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var paladin_holy = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var priest_holy = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var rogue_assassination = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var shaman_elemental = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var warlock_affliction = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var warrior_arms = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var death_knight_frost = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var druid_feral = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var hunter_marksmanship = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var mage_fire = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var monk_mistweaver = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var paladin_protection = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var priest_dicipline = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var rogue_combat = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var shaman_enhancement = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var warlock_demonology = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var warrior_fury = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var death_knight_unholy = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var druid_guardian = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var hunter_survival = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var mage_frost = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var monk_windwalker = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var paladin_retribution = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var priest_shadow = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var rogue_subtlety = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var shaman_restoration = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var warlock_destruction = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var warrior_protection = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var warrior_guardian = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
var druid_restoration = {
    statPriority: "",
    statSummary: "",
    gemsPriority: "",
    enchants: "",
    talentPriority: "",
    majorGlyphs: "",
    minorGlyphs: "",
    stRotation: "",
    aoeRotation: "",
    talentAbilities: "",
    cooldowns: ""
};
