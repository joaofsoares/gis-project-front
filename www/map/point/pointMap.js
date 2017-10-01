
	  var map;
	  function initMap() {
		  
        var myLatLng = {lat: 53.350, lng: -6.266};

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: myLatLng
        });
		
		var xmlhttppoint = new XMLHttpRequest();
		var url = "http://localhost:8080/points";

		xmlhttppoint.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				
				var json = JSON.parse(xmlhttppoint.responseText);
				
				for (var pointIndex in json) {
					
					var marker = new google.maps.Marker({
						position: {lat: json[pointIndex].latitude, lng: json[pointIndex].longitude},
						map: map,
						title: json[pointIndex].address
					});
					
				}
				
				
			}
		};
		xmlhttppoint.open("GET", url, true);
		xmlhttppoint.send();

      }