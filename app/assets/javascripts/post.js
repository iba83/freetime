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
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function () {
      $('.NewPost__form__imageForm__imageBox').before(`<div class="NewPost__form__imageForm__item" id="imageItem${index}"></div>`)
      $(`#imageItem${index}`).append(`<img id="imageTag${index}">`);
      $(`#imageTag${index}`).attr({class: 'NewPost__form__imageForm__item--pict', src: reader.result});
      $(`#imageTag${index}`).after(`<div class="pictBtns" id="pictBtns${index}"></div>`);
      $(`#pictBtns${index}`).append(`<p class="editBtn pictBtn fas fa-images" id="editBtn${index}"></p>`, `<p class="deleteBtn pictBtn fas fa-trash-alt" id="editBtn${index}"></p>`);
      var length = $(".NewPost__form__imageForm__item--pict").width();
      $('.NewPost__form__imageForm__imageBox').width(800 - length);
      $('.NewPost__form__imageForm__imageBox').attr({for: `post_images_attributes_${index + 1}_image`});
      if (index >= 4){
        $('.NewPost__form__imageForm__imageBox').hide();
      }
      $('#editBtn0').off("click").on("click", function(){
        $('#post_images_attributes_0_image').trigger("click");
        $('#post_images_attributes_0_image').on('change', function(e){
          $('#pictBtns0').remove();
          e.stopPropagation();
        })
      });
      $('#editBtn1').off("click").on("click", function(){
        $('#post_images_attributes_1_image').trigger("click");
        $('#post_images_attributes_1_image').on('change', function(){
          $('#pictBtns1').remove();
        })
      });
      $('#editBtn2').off("click").on("click", function(){
        $('#post_images_attributes_2_image').trigger("click");
        $('#post_images_attributes_2_image').on('change', function(){
          $('#pictBtns2').remove();
        })
      });
      $('#editBtn3').off("click").on("click", function(){
        $('#post_images_attributes_3_image').trigger("click");
        $('#post_images_attributes_3_image').on('change', function(){
          $('#pictBtns3').remove();
        })
      });
      $('#editBtn4').off("click").on("click", function(){
        $('#post_images_attributes_4_image').trigger("click");
        $('#post_images_attributes_4_image').on('change', function(){
          $('#pictBtns4').remove();
        })
      });
      return false
    }
    reader.readAsDataURL(file);
  });

});
