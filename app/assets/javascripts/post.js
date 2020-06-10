$(document).on('turbolinks:load', function() {
  var colors = ["#1e90ff", "#008000", "#8b008b", "#ffd700", "#d2691e", "#ffa500", "#ff69b4", "#6a5acd", "#ff4500"];
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

  $(function(){
    $(".GroupTags__button--tag").change(function(){
      $(".GroupTags").slideUp();
    });
  });

  $(function(){
    $("#groupButton").on("click", function(){
      $("#searchGroupList").show();
      $("#searchUserList").hide();
      $("#searchPostList").hide();
      $(this).css({background: "#ff9933", color: "white"});
      $("#userButton").css({background: "white", color: "#808080"});
      $("#postButton").css({background: "white", color: "#808080"});
      return false
    })
  })
  $(function(){
    $("#postButton").on("click", function(){
      $("#searchPostList").show();
      $("#searchUserList").hide();
      $("#searchGroupList").hide();
      $(this).css({background: "#ff9933", color: "white"});
      $("#userButton").css({background: "white", color: "#808080"});
      $("#groupButton").css({background: "white", color: "#808080"});
      return false
    })
  })

});
