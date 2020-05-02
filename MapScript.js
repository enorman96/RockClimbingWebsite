
/*****************************
Google Map API SCRIPT
***************************8**/
// Initialize and add the map
function initMap() {
  // all locations
  // The location of LanternHill
  var LH_Posit = {
    lat: 41.4601,
    lng: -71.9445
  };

  var RaggedMt_Posit = {
    lat: 41.6183,
    lng: -72.8233
  };

  // beach pond, exeter ri
  var BP_Posit = {
    lat: 41.6183,
    lng: -71.7934
  };

  // ross pond, killingly ct
  var RP_Posit = {
    lat: 41.7733,
    lng: -71.8638
  };
  // The location of Rock Spot Peacedale
  var RS_Peacedale_Posit = {
    lat: 41.4506,
    lng: -71.4972
  };
  // entral Rock Gym, Glastonbury CT
  var CRG_Glas_Posit = {
    lat: 41.7234,
    lng: -72.5826
  };
  // entral Rock Gym, Glastonbury CT
  var CRG_Warwick_Posit = {
    lat: 41.7303,
    lng: -71.4826
  };
  // The map, centered at LanternHill
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 8,
      center: LH_Posit
    });

  // different color icons
  var iconGreen = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
  var iconBlue = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
  var iconYellow = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
  var iconOrange = 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png';
  var iconPurple = 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';



  // The marker, positioned at LanternHill
  var marker_LH = new google.maps.Marker({
    position: LH_Posit,
    label: "Lantern Hill",
    map: map,
    icon: iconGreen
  });

  var marker_Ragged = new google.maps.Marker({
    position: RaggedMt_Posit,
    label: "Ragged Mt",
    map: map,
    icon: iconGreen
  });


  var marker_BeachPond = new google.maps.Marker({
    position: BP_Posit,
    label: "Beach Pond",
    map: map,
    icon: iconGreen
  });

  var marker_RossPond = new google.maps.Marker({
    position: RP_Posit,
    label: "Ross Pond",
    map: map,
    icon: iconGreen
  });

  var marker_RS_P = new google.maps.Marker({
    position: RS_Peacedale_Posit,
    label: "Rock Spot",
    map: map,
    icon: iconPurple
  });

  var marker_CRG_Glas = new google.maps.Marker({
    position: CRG_Glas_Posit,
    label: "CRG Glastonbury",
    map: map,
    icon: iconPurple
  });

  var marker_CRG_War = new google.maps.Marker({
    position: CRG_Warwick_Posit,
    label: "CRG Warwick",
    map: map,
    icon: iconPurple
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';
  var infowindow = new google.maps.InfoWindow({
     content: contentString
   });
  marker_CRG_War.addListener('click', function() {
      infowindow.open(map, marker_CRG_War);
    });

  /*    var image_LH = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      var LanternHillMarker = new google.maps.Marker({
       position: LH_Posit,
       map: map,
       icon: image_LH
     }); */
}
