$(function() {
  var colors = ["#008b8b", "#ff6347", "#dc143c", "#4682b4", "#b0c4de", "#deb887", "#db7093", "#6495ed", "#00ced1","#d2691e", "#6a5acd", "#cd5c5c","#db7093"];
  var RandomColor = colors[Math.floor(Math.random()*16)];

  $(".group").css("background-color", RandomColor);
});
