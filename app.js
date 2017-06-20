
$(document).ready(function() {
  $('#menu li:first-child').addClass('selected');
  $('section.container article:nth-child(2)').addClass('middle');
  $('#list-container .list-item:odd').addClass('highlighted');


  $('#list-container .list-item:last-child').attr('style', 'border: 1px solid red');

  // $('#list-container .list-item:last-child').css('border', '1px solid red');

  // border: 1px solid red

  $('#form-container input:focus').css('border', '1px solid red');
  //$('#form-container input:focus').attr('style', 'border: 1px solid red');

});
