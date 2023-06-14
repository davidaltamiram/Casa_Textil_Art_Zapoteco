var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

document.addEventListener('click', function(event) {
    var popover = document.getElementById('boton');
    var isClickInsidePopover = popover.contains(event.target);
    if (!isClickInsidePopover) {
      $('[data-bs-toggle="popover"]').popover('hide');
    }
  });