$(function() {
  $(".languages").slideUp();
  $(".top-language b").click(function() {
    $(this)
      .next()
      .slideToggle(300);
  });
});
