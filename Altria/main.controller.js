export class MainController {
  constructor($timeout, $http,$scope) {
    'ngInject';
    this.existingWatchlist = true;
    this.subgroups = false;
    this.drop1 = [];
    this.highlightedClass = '';
    this.skuWishList = [];
    this.weeks=["1 wk moving avg","4 wk moving avg","13 wk moving avg"]
    this.week="1 wk moving avg";
    this.drop1 = ["ALL MANUFACTURERS","ALL BRANDS", "ALL PRICE TIERS", "ALL FORMS", "ALL FLAVOURS", "ALL ACCOUNTS"];
    $scope.drop2 = ["GROUP BY : Archetype","VIEW : ARCHETYPES", "COMPARE TO: Previous period"];
    this.category1 = ["action1", "action2", "action3"]
    console.log(this.drop1[0]);
    let vm = this;

    $http.get('app/data/heatmap.json').then(function(success) {
      vm.data1 = success.data.abc;
    }, function(error) {
      console.log("error");
    });
    $http.get('app/data/heatmapred.json').then(function(success) {
      vm.data2 = success.data.abc;

    }, function(error) {
      console.log("error");
    });
    $http.get('app/data/heatmapgray.json').then(function(success) {
      vm.data3 = success.data.abc;

    }, function(error) {
      console.log("error");
    });
    $http.get('app/data/main.json').then(function(success) {
      vm.data = success.data.abc;
      vm.drawHighmaps(vm.data);
    }, function(error) {
      console.log("error");
    });
    vm.renderSelectedRegion=function(color) {
      switch(color) {
        default:
        console.log(color);
      }
    }
    vm.doubleFunction=function(color) {
      if(color=='rgb(251,52,10)' &&  !vm.archetype) {
        console.log("double");
        vm.drawHighmaps(vm.data1);
      }
    }
    vm.singleFunction=function(color) {
      console.log(color);
     if(color=='rgb(251,52,10)' &&  vm.level1 && !vm.archetype) {
          vm.drawHighmaps(vm.data3);
        } else if(color=='rgb(251,52,10)' &&  !vm.archetype) {
            vm.level1=true;
            vm.drawHighmaps(vm.data2);
          }
    }

    $http.get('app/data/brand.json').then(function(success) {
      //vm.wishList = success.data.wishlist;
      vm.skuGroup = success.data.SKUGroup;
      vm.marketShare = success.data.marketShare;
      vm.tabList = success.data.tabList;
      vm.dropdownBtns = success.data.dropdownBtns;
      vm.shareDropDowns = success.data.shareDropDowns;
    }, function(error) {
      console.log("error");
    });  
    
    vm.wishlist = [{
      "name": "SKUs",
      "value": ""
    }, {
      "name": "Cophenhagen Long Mint",
      "value": -0.2
    }, {
      "name": "Cophenhagen Long Straight",
      "value": 0.3
    }, {
      "name": "Skola Xtra Long Mint Blend",
      "value": -0.3
    }, {
      "name": "Skola Xtra Long Wintergreen Blend Geographies",
      "value": -0.3
    }, {
      "name": "Georgia",
      "value": -0.3
    }
  ]

    vm.brandNames=[{
      "name":"Competitor strength-elastic",
      "color":"#6a4c92"
    },{
      "name":"Competitor strength-Inelastic",
      "color":"#fec93f"
    },{
      "name":"Cope - Comp Strength",
      "color":"#4B90E0"
    },{
      "name":"Discount and Red Seal Strength",
      "color":"#88c82d"
    },{
      "name":"Skoal strength",
      "color":"#6a6a6a"
    },{
      "name":"UST Mainline",
      "color":"#444444"
    },{
      "name":"Cope ML Strength",
      "color":"#ff5842"
    },{
      "name":"Discount and Red Seal Strength",
      "color":"#BBC3DA"
    }];
    console.log(localStorage.getItem("watchlist"));
    if(localStorage.getItem("watchlist") == null){
      localStorage.setItem("watchlist",JSON.stringify(vm.wishlist));
    }
    var list =  localStorage.getItem("watchlist");
    vm.watchList = JSON.parse(list);
    
    this.setCategory1 = function(list, index) {
        console.log(list + " " + index);
        this.drop1[index] = list;
      }
      this.setCategory2 = function(list, index) {
        if(list=='VIEW : ARCHETYPES') {
          vm.archetype=true;
          vm.drawHighmaps(vm.data1);
        } else if(list=='VIEW : HEATMAP') {
            vm.archetype=false;
          vm.drawHighmaps(vm.data);
        }
          $scope.drop2[index] = list;
        }
      this.setCategory = function(list) {
          console.log(list);
          this.week = list;
          $scope.myVar = 3;
        }


        // $scope.$watch('drop2[1]', function() {
        //     console.log($scope.drop2[1]);
        // });

      //Get current month and year
    this.getMonYear = function() {
      let monYear;
      let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ];
      let date = new Date();
      monYear = monthName[date.getMonth()] + " " + date.getFullYear();
      return monYear;
    }
     //value check to add relevent class
     this.getFontClass = function(value){
     	 let className;
     	 if(value < 0){
     	 	className = 'negative-value';
     	 }
     	 else if(value > 0){
     	 	className = 'positive-value';
     	 }
     	 else {
     	 	className = 'null-value';
     	 }
     	 return className;
     }

     //add + symbol to positive values
     this.getStringValue = function(value){
     	let stringValue;
     	if(value == 0 && typeof(value) != 'string'){
     		stringValue = "0."+value;
     	}
     	else if(value > 0) {
     		stringValue = "+"+value;
     	}
     	else {
     		stringValue = value;
     	}
     	return stringValue;
     }
     //change image based on value
     this.getImage = function(value) {
     	let imageSrc;
     	if(value == 0){
     		imageSrc = 'assets/images/landing/mid arrow.png';
     	}
     	else if(value > 0) {
     		imageSrc = 'assets/images/landing/Up arrow.png';
     	}
     	else {
     		imageSrc = 'assets/images/landing/down arrow.png';
     	}
     	return imageSrc;
     }
     //heighlight selected tab
     this.getSelectedClass = function(value,index){
     	console.log(value, index);
     	vm.active = [];
     	vm.active[index]
     	for(let i=0;i<6;i++){
     		if(i == index)
     			vm.active[i] = 1;
     		else
     			vm.active[i] = 0;
     	}

     }
     //to display subcategories of SKU groups
    this.getSubcategories = function(id){
	      vm.subgroups = true;
	      vm.skuid = id;
	      console.log(vm.skuid);
     }

     this.skuGroups = function() {
      	  vm.subgroups = false;
     }

     //list all SKUs 
     this.addItemToWatchlist = function(){
      vm.existingWatchlist = false;
      vm.skuWishList = vm.skuGroup;
          let skulistLength = vm.skuWishList.length;
          for (let i = 0;i < vm.watchList.length; i++) { 
            for (let j = 0; j < skulistLength; j++) { 
              if (vm.watchList[i].name === vm.skuWishList[j].name) {
                vm.skuWishList.splice(j, 1);
                skulistLength = vm.skuWishList.length;
              }
            }
          }
          console.log(vm.skuWishList);
     }
     //clear sku selection
     this.clearSku = function() {
         angular.forEach(vm.skuGroup, function(selectedSku) { 
         console.log(selectedSku);            
        selectedSku.selected = false;
        });
     }
     //add selected skus to localstorage
     this.addSku = function() {
      let newWatchlist = [];
      angular.forEach(vm.skuGroup, function(selectedSku) { 
        if(selectedSku.selected) {
          let selectedSkuObj = {"name":selectedSku.name,"value":selectedSku.value};  
          newWatchlist.push(selectedSkuObj);
       }
       });
      vm.wishlist = vm.watchList.concat(newWatchlist);  
      localStorage.setItem("watchlist",JSON.stringify(vm.wishlist));
      vm.watchList = JSON.parse(localStorage.getItem('watchlist'));
      console.log(localStorage.getItem('watchlist'));
      vm.existingWatchlist = true;
     }
     this.closeAddSku = function(){
       vm.existingWatchlist = true;
     }
     // remove sku from watchlist
     this.removeSku = function(sku) {
      console.log(sku);
      for(let i=0;i < vm.watchList.length;i++){
        if(sku.name === vm.watchList[i].name) {
           vm.watchList.splice(i, 1);
        }
      }
      localStorage.setItem("watchlist",JSON.stringify(vm.watchList));
      console.log(vm.watchList);
      console.log(JSON.parse(localStorage.getItem("watchlist")));
    }

    $('#lineChart').highcharts({
      chart: {
        backgroundColor: 'transparent'
      },
      title: {
        text: null

      },
      subtitle: {
        text: null

      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        labels: {
                style: {
                    
                    fontSize:'1vw'
                }
            }
      },
      yAxis: {
        title: null,
        labels: {
          enabled: false
        },
      },
      plotOptions: {
        line: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        valueSuffix: '°C'
      },

      legend: {
      enabled:false
      },
      credits:{
        enabled:false
      },
      series: [{
        data: [3, 3, 4, 3.5, 3, 3.2, 2.5, 3, 5, 4.5, 4, 4],
        zoneAxis: 'x',
        zones: [{
          value: 8
        }, {
          dashStyle: 'dash',
          color: 'gray'
        }]
      }, {
        data: [2, 1, 1, 2, 2.5, 3.5, 3, 3.3, 3, 3.2, 4, 3]
      }]
    });

    // Initiate the chart
    this.drawHighmaps = function(data) {
      $('#usMaps').highcharts('Map', {
        chart: {
          backgroundColor: 'white',
          zoomType:{
            enabled:false
          },
        },
        title: {
          text: null
        },


        subtitle: {
          text: null
        },

        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        mapNavigation: {
          enabled: false,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        plotOptions:{
 series:{
     point:{
       events:{

         dblclick: function () {
             vm.doubleFunction(this.color);
           },
           click: function() {
            vm.singleFunction(this.color);
           }

       }
     }
 }
},
        tooltip: {
      formatter: function() {
          return '<div> <b>' + this.point.name + '</b></div>';
      }
  },
        colorAxis: {
          min: 0
        },

        series: [{
          data: data,
          borderColor:'#f6f6f6',
          mapData: Highcharts.maps['countries/us/us-all'],
          joinBy: 'hc-key',
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55'
            }
          },

          dataLabels: {
            enabled: true,
            formatter:function(){
              return null;
            }
          }
        }, {
          name: 'Separators',
          type: 'mapline',
          data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
          color: 'silver',
          showInLegend: false,
          enableMouseTracking: false
        }]
      });
    }

  }

}
