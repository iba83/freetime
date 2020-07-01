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

  $('.imageFile[type=file]').on('change', function(){
    var index = $('.imageFile[type=file]').index(this);
    console.log(index)
    var file = this.files[0];
    var reader = new FileReader();
    var fileBoxWidth = $('.NewPost__form__imageForm__imageBox').width();
    reader.onload = function () {
      $('.NewPost__form__imageForm__imageBox').before(`<img id="imageTag${index}">`);
      $(`#imageTag${index}`).attr('class', 'NewPost__form__imageForm--pict');
      $(`#imageTag${index}`).attr('src', reader.result);
      $('.NewPost__form__imageForm__imageBox').width(fileBoxWidth - 140);
      $('.NewPost__form__imageForm__imageBox').attr({for: `post_images_attributes_${index + 1}_image`});
      if (index >= 4){
        $('.NewPost__form__imageForm__imageBox').hide();
      }
    }
    reader.readAsDataURL(file);
  })


});
