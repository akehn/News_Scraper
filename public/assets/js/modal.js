$(document).ready(function(){
    
    $("#login").click(function() {
      $("#modal-container").removeClass('modal-hidden');
      $("#modal-overlay").removeClass('modal-hidden')
    })
    $("#modal-overlay").click(function() {
      $("#modal-container").addClass('modal-hidden');
      $("#modal-overlay").addClass('modal-hidden')
    })
  
    });