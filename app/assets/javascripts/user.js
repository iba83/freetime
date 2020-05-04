$(document).on('turbolinks:load', function() {
  $(function(){
    $(".userGroupsIndex__Edit--userEdit").on("click", function(){
      $(".followUsers").slideToggle();
      return false
    })
  })
});
