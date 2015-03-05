$('p > img').unwrap();

$( "#menuBtn" ).click(function() {
  $("#menuContainer").toggleClass("in-view");
  $("#menuContainer").toggleClass("unstyled");
  var btnCopy = $(this).text();
  $(this).text( btnCopy == "Menu" ? "Close" : "Menu");
});