document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("bg-white", "shadow-md", "text-slate-600");
      navbar.classList.remove("bg-transparent");
      updateNavbarTextColor("text-gray-800", "text-gray-600");
    } else {
      navbar.classList.remove("bg-white", "shadow-md");
      navbar.classList.add("bg-transparent");
      updateNavbarTextColor("text-white", "text-gray-200");
    }
  });
});

// counter
var a = 0;
$(window).scroll(function () {
  if ($("#counter").length) {
    // checking if CountTo section exists in the page, if not it will not run the script and avoid errors
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  }
});
