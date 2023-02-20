(function() {
    'use strict';
  
    $("div.highlight").on("mouseover", function() {
      let width = $(this).width();
      $(this).data("width", $(this).width())
      if (width < $(this).find("table").width()) {
        $(this).width($(".post-content").width() + 76);
      }
    }).on("mouseout", function() {
      $(this).width($(this).data("width"));
    })
  }())
  