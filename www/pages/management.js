
  function removePoint() {
	  
	var selectedPoint = document.getElementById("points");
	var pointName = selectedPoint.options[selectedPoint.selectedIndex].value;
	
	var httprequestremovepoint = new XMLHttpRequest();
	var url = "http://localhost:8080/points/remove";
	
	httprequestremovepoint.open("POST", url, true);
	httprequestremovepoint.setRequestHeader("Content-type", "text/plain");
	
	httprequestremovepoint.onreadystatechange = function () {
		if (httprequestremovepoint.readyState === 4 && httprequestremovepoint.status === 200) {
			var json = JSON.parse(httprequestremovepoint.responseText);
			if (json.response === "success") {
					alert("Point remove successfully");
			} else {
				alert("Point can't be removed.");
			}
			
			location.reload();
		}
	};
	
	var data = JSON.stringify({"address" : pointName,  "latitude": 0, "longitude": 0});
	
	httprequestremovepoint.send(data);
    
  }
  
  function removeStartDirection() {
	
	var selectedStartDirection = document.getElementById("startdirections");
	var startAddress = selectedStartDirection.options[selectedStartDirection.selectedIndex].value;
	
	var httprequestremovestartdirection = new XMLHttpRequest();
	var url = "http://localhost:8080/directions/start/remove";
	
	httprequestremovestartdirection.open("POST", url, true);
	httprequestremovestartdirection.setRequestHeader("Content-type", "text/plain");
	
	httprequestremovestartdirection.onreadystatechange = function () {
		if (httprequestremovestartdirection.readyState === 4 && httprequestremovestartdirection.status === 200) {
			var json = JSON.parse(httprequestremovestartdirection.responseText);
			if (json.response === "success") {
					alert("Start direction remove successfully");
			} else {
				alert("Start direction can't be removed.");
			}
			
			location.reload();
		}
	};
	
	var data = JSON.stringify({"address" : startAddress});
	
	httprequestremovestartdirection.send(data);
	
    }
  
  function removeEndDirection() {
	
    var selectedEndDirection = document.getElementById("enddirections");
	var endAddress = selectedEndDirection.options[selectedEndDirection.selectedIndex].value;
	
	var httprequestremoveenddirection = new XMLHttpRequest();
	var url = "http://localhost:8080/directions/end/remove";
	
	httprequestremoveenddirection.open("POST", url, true);
	httprequestremoveenddirection.setRequestHeader("Content-type", "text/plain");
	
	httprequestremoveenddirection.onreadystatechange = function () {
		if (httprequestremoveenddirection.readyState === 4 && httprequestremoveenddirection.status === 200) {
			var json = JSON.parse(httprequestremoveenddirection.responseText);
			if (json.response === "success") {
					alert("End direction remove successfully");
			} else {
				alert("End direction can't be removed.");
			}
			
			location.reload();
		}
	};
	
	var data = JSON.stringify({"address" : endAddress});
	
	  httprequestremoveenddirection.send(data);
	
    }
	
	