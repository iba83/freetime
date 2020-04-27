$(document).on('turbolinks:load', function() {
  var colors = ["#4682b4", "#008080", "#2e8b57", "#ffd700", "#d2691e", "#ff6347", "#ff69b4", "#6a5acd"];
  var RandomColor = colors[Math.floor(Math.random()*colors.length)];  

  $(".group").each(function(){
    var color = RandomColor
    $(this).css('background', color);
    id = $.inArray(color, colors);
    colors.splice(id, 1);
    RandomColor = colors[Math.floor(Math.random()*colors.length)];   
  })

  $(function(){
    $(".etc").on("click", function(){
      $(".OtherGroups").slideToggle();
      return false
    })
  })

  $(function(){
    $("#tag").on("click", function(){
      $(".GroupTags").slideToggle();
      return false
    })
  })

});
