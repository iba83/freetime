$(document).on('turbolinks:load', function() {
  $(function(){
    $("#nowfollowing").on("click", function(){
      $(".followUsers").slideToggle();
      return false
    })
  })

  $(function(){
    $(".userGroupsIndex__items a").on("click", function(){
      var btn = $(this).attr("value");
      var groupId = Number(btn);
      var groupUser = $.grep(gon.posts, function(obj, index){
        return(obj.group_id == groupId);
      })
            
      console.log(gon.posts);
      return false
    })
  });

});
