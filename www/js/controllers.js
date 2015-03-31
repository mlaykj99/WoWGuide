angular.module('starter.controllers', [])

.controller('StatsCtrl', function($scope, $sce) {
  $scope.s = {
    statPriority: getStatPriority(),
    statSummaries: getStatSummary()
  };
})

.controller('GemsCtrl', function($scope) {
  $scope.g = {
    gems: getGems(),
    enchants: getEnchants()
  }
})

.controller('TalentsCtrl', function($scope) {
  $scope.t = {
    talents: getTalents(),
    majorGlyphs: getMajorGlyphs(),
    minorGlyphs: getMinorGlyphs()
  }

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})

.controller('RotationCtrl', function($scope) {
  $scope.r = {
    stRotation: getSTRotation(),
    aoeRotation: getAOERotation(),
    talentsRotation: getTalentAbilities(),
    effCooldowns: getCooldowns()
  }

  $scope.toggleGroup = function(r) {
    if ($scope.isGroupShown(r)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = r;
    }
  };
  $scope.isGroupShown = function(r) {
    return $scope.shownGroup === r;
  };
})

.controller('ClassesCtrl', function($scope, $state) {
  $scope.groups = [
    {name: "Death Knight", items: ["Blood","Frost","Unholy"]},
    {name: "Druid", items: ["Balance","Feral","Guardian","Restoration"]},
    {name: "Hunter", items: ["Beast Mastery","Marksmanship","Survival"]},
    {name: "Mage", items: ["Arcane","Fire","Frost"]},
    {name: "Monk", items: ["Brewmaster","Mistweaver","Windwalker"]},
    {name: "Paladin", items: ["Holy","Protection","Retribution"]},
    {name: "Priest", items: ["Discipline","Holy","Shadow"]},
    {name: "Rogue", items: ["Assassination","Combat","Subtlety"]},
    {name: "Shaman", items: ["Elemental","Enhancement","Restoration"]},
    {name: "Warlock", items: ["Affliction","Demonology","Destruction"]},
    {name: "Warrior", items: ["Arms","Fury","Protection","Gladiator"]}
  ];

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  /* Sets the class and spec to be used */
  $scope.chooseSpec = function(group, item)
  {
    console.log("You chose: " + getGameType() + " " + item + " " + group.name);
    selectClass(group.name);
    selectSpec(item);

    //set class info
    setClassInfo(group.name, item, getGameType());

    //go to stats page
    $state.go('tab.stats');
  };

  /* Sets the game type to be used */
  $scope.chooseType = function(type, other)
  {
    selectType(type, other);
  };
})

 /* Highlights the spec currently chosen and un-highlights all other */
.directive('highlight', function () {

  return {
    restrict : 'C',
    link: function(scope, element) {
      element.bind("click" , function(e){
        //if this isn't the first time we are highlighting
        if(getPrevSpec() !== null)
        {
          getPrevSpec().addClass("button-clear");
        }
        element.removeClass("button-clear");
        setPrevSpec(element);
      });
    }
  }
});
