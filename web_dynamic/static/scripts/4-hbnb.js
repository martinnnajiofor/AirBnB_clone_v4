window.onload = function () {
  let amenities = {}
  // debugger
  $('input[type="checkbox"]').change(function() {
    if (this.checked) {
      amenities[$(this).data('id')] = ($(this).data('name'));
    } else {
      delete amenities[($(this).data('id'))];
    }
    //$('#h4_amenities').text(Object.values(amenities))
    $('#h4_amenities').text(Object.keys(amenities).map(function(k){return amenities[k]}).join(", "));
  });

  $.get('http://127.0.0.1:5001/api/v1/status/', function (data, status) {
    // console.log(status)
    // console.log(data.status)
    if (data.status === 'OK'){
      $('#api_status').addClass('available')
      showPlaces()
    }
    else {
      $('#api_status').removeClass('available')
    }
  });

  // $.post('http://127.0.0.1:5001/api/v1/places_search/', JSON.stringify({}), function( data ) {
  //   console.log( data );
  // }, "json");
  function showPlaces (amnts={}) {
    $.ajax({
      url: 'http://127.0.0.1:5001/api/v1/places_search/',
      type: 'POST',
      data: JSON.stringify(amnts),
      dataType: 'json',
      contentType: 'application/json'
    }).done(function (data) {
      // console.log(data);
      data.forEach(place => {
	    $('section.places').append(
          '<article>' +
            '<div class="headline">' +
            '<h2>' + place.name + '</h2>' +
            '<div class="price_by_night"> $ ' + place.price_by_night + '</div>' +
            '</div>' +
            '<div class="information">' +
            '<div class="max_guest">' +
            '<div class="guest_icon"></div>' +
            '<p>' + place.max_guest + ' Guest</p>' +
            '</div>' +
            '<div class="number_rooms">' +
            '<div class="bed_icon"></div>' +
            '<p>' + place.number_rooms + ' Room</p>' +
            '</div>' +
            '<div class="number_bathrooms">' +
            '<div class="bath_icon"></div>' +
            '<p>' + place.number_bathrooms + ' Bathroom</p>' +
            '</div>' +
            '</div>' +
            '<div class="user"><b>Owner</b>: John Lennon</div>' +
            '<div class="description">' + place.description + '</div>' +
            '</article>'
	);
      });
    });
  };

  $('section button').click(function () {
//    debugger
    const amnts = Object.keys(amenities)
    showPlaces({'amenities': amnts});
//    if (amnts.length > 0) $(".places").load(location.href + ".places");
    if (amnts.length > 0) $(".places").load(" .places > *");
  });
}
//  var textinputs = document.querySelectorAll(".popover li input[type=checkbox]")
//  console.log(textinputs)
//  var checkbox = (Array.from(textinputs)).filter((element)=> element.checked === true);
//  console.log(checkbox)
