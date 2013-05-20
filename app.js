function TotalCtrl($scope) {
	$scope.totals = {
		aa : 0,
		fpt : 0,
		apt : 0
	};
	$scope.total = 0;
	$scope.totalize = function(){
		$scope.total = $scope.totals['aa'] + 
						$scope.totals['fpt'] + 
						$scope.totals['apt']; 
	};
  
}
function secsElapsed(){
		//segundos transcurridos desde el 1/1/2013
		//new Date(2013,1,1).getTime();
		return (new Date().getTime()  - 1359687600000) / 1000; 
}


function SubTotalAerolineas($scope,$timeout){
	var seed = 0;
	var ratio = 92;
	
	$scope.subtotal = 0;
    $scope.onTimeout = function(){
 		$scope.subtotal = seed + ratio * secsElapsed();
		$scope.totals['aa'] = $scope.subtotal;
		$scope.totalize();
        ttimeout = $timeout($scope.onTimeout,200);
    }
    var ttimeout = $timeout($scope.onTimeout,200);
}

function SubTotalFPT($scope,$timeout){
	var seed = 0;
	var ratio = 86;
	$scope.subtotal = 0;
    $scope.onTimeout = function(){
 		$scope.subtotal = seed + ratio * secsElapsed();
		$scope.totals['fpt'] = $scope.subtotal;
        ttimeout = $timeout($scope.onTimeout,200);
    }
    var ttimeout = $timeout($scope.onTimeout,200);
}

function SubTotalAPT($scope,$timeout){
	var seed = 0;
	var ratio = 30;
	$scope.subtotal = 0;
    $scope.onTimeout = function(){
 		$scope.subtotal = seed + ratio * secsElapsed();
		$scope.totals['apt'] = $scope.subtotal;
        ttimeout = $timeout($scope.onTimeout,200);
    }
    var ttimeout = $timeout($scope.onTimeout,200);
	
}