
/*****************************
LIGHTROOM MODAL IMAGES SCRIPT
***************************8**/

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// close the modal when click esc
document.addEventListener('keyup', function(event) {
  if (event.keyCode === 27) {
    closeModal();
  }
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


/* Google Map API */
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

  /*    var image_LH = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      var LanternHillMarker = new google.maps.Marker({
       position: LH_Posit,
       map: map,
       icon: image_LH
     }); */
}
