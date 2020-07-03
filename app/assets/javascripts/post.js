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

  var btnAction = function(){
    $('.editBtn').off("click").on("click", function(){
      var name = $(this).attr('name');
      $("NewPost__form__imageForm__item--pict").removeAttr("id")
      $(`#post_images_attributes_${name}_image`).trigger("click");
      $(`#post_images_attributes_${name}_image`).on('change', function(){
        $(`#pictBtns${name}`).remove();
      })
    });

    $('.deleteBtn').off("click").on("click", function(){
      $("NewPost__form__imageForm__item--pict").removeAttr("id")
      var name = $(this).attr('name');
      $(`#post_images_attributes_${name}_image`).val('');
      $(`#imageItem${name}`).remove();
      $(`#post_images_attributes_${name}__destroy`).prop("checked", true);
      $('.NewPost__form__imageForm__imageBox').attr({for: `post_images_attributes_${name}_image`});
    });

    var length = $(".NewPost__form__imageForm img").length;
    if (length > 4){
      $('.NewPost__form__imageForm__imageBox').hide();
    }

    $(".deleteBtn").on("click", function(){
      $('.NewPost__form__imageForm__imageBox').show();
    })
  }

  btnAction();

  $('.imageFile[type=file]').on('change', function(){
    var index = $('.imageFile[type=file]').index(this);
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function () {
      $('.NewPost__form__imageForm__imageBox').before(`<div class="NewPost__form__imageForm__item" id="imageItem${index}"></div>`)
      $(`#imageItem${index}`).append(`<img id="imageTag${index}">`);
      $(`#imageTag${index}`).attr({class: 'NewPost__form__imageForm__item--pict', src: reader.result});
      $(`#imageTag${index}`).after(`<div class="pictBtns" id="pictBtns${index}"></div>`);
      $(`#pictBtns${index}`).append(`<p class="editBtn pictBtn fas fa-images" id="editBtn${index}" name="${index}"></p>`, `<p class="deleteBtn pictBtn fas fa-trash-alt" id="deleteBtn${index}"></p>`);
      $('.NewPost__form__imageForm__imageBox').attr({for: `post_images_attributes_${index + 1}_image`});
      // if ($(`#post_images_attributes_${index}__destroy`)){
      //   $(`#post_images_attributes_${index}__destroy`).prop('checked', false);
      // }
      btnAction();
    }
    reader.readAsDataURL(file);
  });
});
