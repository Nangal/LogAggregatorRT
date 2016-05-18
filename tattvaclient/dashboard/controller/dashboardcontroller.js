angular.module('tattva')
.controller('dashboardcontroller', ['$scope','$mdDialog','$state', "$stateParams", 'slideFactory','searchFactory',
function($scope,$mdDialog,$state, $stateParams, slideFactory,searchFactory) {
  $scope.username="jasjeet";
  // $scope.slidename="jkl";
  $scope.selectedSlide = null;

  if($stateParams.slidename !== null)  {
    //  console.log("Fetching slide: ", $stateParams.slidename);
    $scope.currentSlide = slideFactory.getSlide($scope.username, $stateParams.slidename);
    console.log( "jldjdlsd"+$scope.currentSlide);
  } else {
    //  console.log("Fetching default slide");
    $scope.currentSlide = slideFactory.getDefaultSlide($scope.username);
    console.log("kkkkk"+ $scope.currentSlide);
  }

// $scope.slidename="pqr6";
  $scope.userSlides=slideFactory.getAllSlides($scope.username);
  $scope.wldata=slideFactory.getwldata($scope.username,$scope.currentSlide.slideName);
  console.log($scope.wldata);
  $scope.wlist=[];
for(i=0;i<$scope.wldata.length;i++)
{
  $scope.list=searchFactory.getWlObj($scope.wldata[i].id);
  $scope.wlist.push($scope.list);
  console.log($scope.wlist+"  i");
}

  console.log($scope.wlist);

  $scope.goToSlide = function() {
    console.log("I am asked to go to a slide ", $scope.selectedSlide)
    if($scope.selectedSlide !== undefined && $scope.selectedSlide != '' && $scope.selectedSlide !== null ) {
      console.log("Changing to slide: ", $scope.selectedSlide)
      $state.go("user", { slidename: $scope.selectedSlide } );
    }
  }

  // console.log("current slide is : ", $scope.currentSlide);
  $scope.UI_Publish = function(ev) {
    $mdDialog.show({
      targetEvent: ev,
      templateUrl: "/dashboard/template/publisherSetting.html",
      parent: angular.element(document.body),
      clickOutsideToClose: true,
    }
  );
};

$scope.itemcollection=[
  {
    "wlname": "WatchlistONE",
    "charttype":"graph",
    "datatype":"data",
    "wldef":{
      "CountryName": "India",
      "CountryCode": "IND"
    },
    "value":[8, 3, 7],
    "size" : "30",
    "slideone":"B",
    "slidetwo":"A"
  },
  {
    "wlname": "WatchlistSECNOD",
    "charttype":"flow",
    "datatype":"rawdata",
    "wldef":
    {
      "CountryName": "Pakistan",
      "CountryCode": "PAK"
    },
    "value":[15, 30, 27],
    "size" : "50",
    "slideone":"B",
    "slidetwo":"A"
  },
  {	"wlname": "WatchlistTHIRD",
  "charttype":"flow",
  "datatype":"rawdata",
  "wldef":{
    "CountryName": "America",
    "CountryCode": "USA"
  },
  "value":[38, 13, 70],
  "size" : "70",
  "slideone":"A",
  "slidetwo":"B"
},
{"wlname": "WatchlistFOUR",
"charttype":"graph",
"datatype":"data",
"wldef":{
  "CountryName": "Britan",
  "CountryCode": "UK"
},
"value":[58, 32, 17],
"size" : "30",
"slideone":"B",
"slidetwo":"A"
},
{"wlname": "WatchlistFIVE",
"charttype":"graph",
"datatype":"data",
"wldef":{
  "CountryName": "Shrilanka",
  "CountryCode": "SK"
},
"value":[78, 12, 37],
"size" : "30",
"slideone":"A",
"slidetwo":"B"
},
{"wlname": "WatchlistSIX",
"charttype":"flow",
"datatype":"data",
"wldef":{
  "CountryName": "Japan",
  "CountryCode": "JP"
},
"value":[28, 32, 17],
"size" : "30",
"slideone":"B",
"slidetwo":"A"
}
];

$scope.logdata=[
  {
    "CountryName": "India",
    "CountryCode": "IND"
  },
  {
    "CountryName": "Pakistan",
    "CountryCode": "PAK"
  },
  {
    "CountryName": "America",
    "CountryCode": "USA"
  },
  {
    "CountryName": "Britan",
    "CountryCode": "UK"
  }
];

}]);
