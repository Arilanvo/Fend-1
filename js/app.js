//scrollintoview code
const links = document.querySelectorAll(".nav-item");

links.forEach((item) => {
  item.addEventListener("click", () => {
    let el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

//highlight current

$(document).on("click", "ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
