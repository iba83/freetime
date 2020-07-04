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

  function btnAction(){
    var length = $(".NewPost__form__imageForm img").length;
    if (length > 4){
      $('.NewPost__form__imageForm__imageBox').hide();
    }  
    $('.editBtn').off("click").on("click", function(){
      var name = $(this).attr('name');
      $(`#post_images_attributes_${name}_image`).trigger("click");
      $(`#post_images_attributes_${name}_image`).on('change', function(){
        $(`#pictBtns${name}`).remove();
      })
    });

    $('.deleteBtn').on("click", function(){
      var name = $(this).attr('name');
      $(`#imageItem${name}`).remove();
      $(`#post_images_attributes_${name}_image`).val('');
      $(`#post_images_attributes_${name}__destroy`).prop("checked", true);
      $('.NewPost__form__imageForm__imageBox').attr({for: `post_images_attributes_${name}_image`});
      $('.NewPost__form__imageForm__imageBox').show();
    });
  }

  function labelNum(){
    var a = ["#editBtn0", "#editBtn1", "#editBtn2", "#editBtn3", "#editBtn4"];
    var b = []
    $.each(a,
      function(index, elem) {
        $(function(){
          if(!($(elem).size())){
            var lastNumber = elem.slice( -1 );
            var id = Number(lastNumber);
            b.push(id);
          }
        });
      }
    );
    var num = b.shift()
    $('.NewPost__form__imageForm__imageBox').attr({for: `post_images_attributes_${num}_image`});
  }

  labelNum();
  btnAction();

  $('.imageFile[type=file]').on('change', function(){
    var index = $('.imageFile[type=file]').index(this);
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function () {
      if ($(`#post_images_attributes_${index}__destroy`)){
        $(`#post_images_attributes_${index}__destroy`).prop('checked', false);
      }
      $('.NewPost__form__imageForm__imageBox').before(`<div class="NewPost__form__imageForm__item" id="imageItem${index}"></div>`)
      $(`#imageItem${index}`).append(`<img id="imageTag${index}">`);
      $(`#imageTag${index}`).attr({class: 'NewPost__form__imageForm__item--pict', src: reader.result});
      $(`#imageTag${index}`).after(`<div class="pictBtns" id="pictBtns${index}"></div>`);
      $(`#pictBtns${index}`).append(`<a class="editBtn pictBtn fas fa-images" id="editBtn${index}" name="${index}"></a>`,
      `<a class="deleteBtn pictBtn fas fa-trash-alt" id="deleteBtn${index}" name="${index}"></a>`);
      labelNum();
      btnAction();
    }
    reader.readAsDataURL(file);
  });

});
