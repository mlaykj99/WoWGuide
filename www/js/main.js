/**
 * Created by Josh on 3/26/2015.
 */

//---------------------------- GLOBALS S ----------------------------//
var gameType = 'PVE';
var selectedClass = 'Death Knight';
var selectedSpec = 'Blood';

var prevSpec = null;
//---------------------------- GLOBALS E ----------------------------//


$(document).ready(function() {
    console.log("Loaded");
});

//---------------------------- GETTERS S ----------------------------//

/* Gets the selected class*/
function getGameType() { return gameType; }

/* Gets the selected class*/
function getClass() { return selectedClass; }

/* Gets the selected spec*/
function getSpec() { return selectedSpec; }

/* Gets the previous spec element */
function getPrevSpec(){ return prevSpec; }
//---------------------------- GETTERS E ----------------------------//
//---------------------------- SETTERS S ----------------------------//

/* Sets up the PVP or PVE selection*/
function selectType(type, other)
{
    gameType = type;
    $('#'+type).addClass('button-dark');
    $('#'+other).removeClass('button-dark');
}

/* Sets the selected class*/
function selectClass(sClass) { selectedClass = sClass; }

/* Sets the selected spec*/
function selectSpec(spec) { selectedSpec = spec; }

/* Sets the previous spec element */
function setPrevSpec(elm) { prevSpec = elm;}

//---------------------------- SETTERS E ----------------------------//