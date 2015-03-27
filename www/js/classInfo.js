/**
 * Created by Josh on 3/27/2015.
 */
/* This class holds all the data for each class and spec - 385 pieces of info*/

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

var pve_death_knight_blood = {
    statPriority: "Stamina > Bonus Armor >= Armor > Strength > Multistrike >= Versatility >= Haste > Mastery > Crit",
    statSummary:    "Stamina" +
    "Stamina increases your total health." +

    "Bonus Armor" +
    "Bonus Armor increases Armor and attack power for tanking specializations. As Blood, Bonus Armor also increases your Attack Power thanks to Bladed Armor." +

    "Armor" +
    "Armor reduces physical damage received." +

    "Strength" +
    "trength increases your attack power and the damage dealt by your abilities. Further, Strength slightly increases your chance to Parry." +

    "Multistrike" +
    "Multistrike grants a chance for your spells and abilities to activate up to 2 additional times at 30% effectiveness. As Blood, Runic Strikes provides additional Multistrike rating and also increases your Runic Power generation along with Blood Rites." +

    "Versatility" +
    "Versatility increases your damage, healing, and absorption done and decreases damage received." +

    "Haste" +
    "Haste increases attack and spell casting speed, adds additional damage and healing to DoTs and HoTs, and reduces the GCD. Also, Haste increases your Rune regeneration speed. As Blood, Haste allows for more frequent use of your Rune-based threat and survivability abilities." +

    "Mastery" +
    "Mastery provides a passive bonus to your character based on your specialization. Mastery: Blood Shield provides an absorption shield with every Death Strike. Stacking Mastery leads to smoother incoming damage that is easier for healers to manage." +

    "Crit" +
    "Critical Strike increase the chance for your spells and attacks to critically hit for additional damage and healing. As Blood, Crit also increases your chance to Parry via Riposte.",
    gemsPriority: "Gem - Greater Stamina Taladite",
    enchants:   "Neck Gift of Multistrike"+
    "CloakGift of Multistrike"+
    "RingGift of Multistrike"+
    "WeaponRune of the Fallen Crusader",
    talentPriority: "WIP",
    majorGlyphs:    "Glyph of Outbreak Recommended. Easier application of diseases."+
    "Glyph of Vampiric Blood Recommended. More effective for 25M raiding."+
    "Glyph of Anti-Magic Shell Optional. Useful for absorbing fewer and larger magic attacks."+
    "Glyph of Death Coil Optional. Added utility to save/shield other players."+
    "Glyph of Icebound Fortitude Optional. Useful when fight requires frequent use."+
    "Glyph of Regenerative Magic Optional. Useful for more frequent use of Anti-Magic Shell.",
    minorGlyphs: "Glyph of Path of Frost - Recommended. Reduces falling damage.",
    stRotation: "WIP",
    aoeRotation: "WIP",
    talentAbilities: "WIP",
    cooldowns: "WIP"
};

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

    //Type
    if (type == "PVE") {
        //Classes
        if (cls == "Death Knight") {
            //Specs
            if (spec == "Blood") {
                statPriority = pve_death_knight_blood.statPriority;
                statSummary = pve_death_knight_blood.statSummary;
                gemsPriority = pve_death_knight_blood.gemsPriority;
                enchants = pve_death_knight_blood.enchants;
                talentPriority = pve_death_knight_blood.talentPriority;
                majorGlyphs = pve_death_knight_blood.majorGlyphs;
                minorGlyphs = pve_death_knight_blood.minorGlyphs;
                stRotation = pve_death_knight_blood.stRotation;
                aoeRotation = pve_death_knight_blood.aoeRotation;
                talentAbilities = pve_death_knight_blood.talentAbilities;
                cooldowns = pve_death_knight_blood.cooldowns;
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
var pve_death_knight_frost = {
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
