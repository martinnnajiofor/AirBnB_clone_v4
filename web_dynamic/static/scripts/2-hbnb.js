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
    }
    else {
      $('#api_status').removeClass('available')
    }
});
}
//  var textinputs = document.querySelectorAll(".popover li input[type=checkbox]")
//  console.log(textinputs)
//  var checkbox = (Array.from(textinputs)).filter((element)=> element.checked === true);
//  console.log(checkbox)
