$(document).on('turbolinks:load', function() {
  $(function(){
    $("#nowfollowing").on("click", function(){
      $(".followUsers").slideToggle();
      return false
    })
  })
});
