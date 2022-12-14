VanillaTilt.init(document.querySelectorAll(".project"), {
  max: 25,
  speed: 400,
  easing: "cubic-bezier(.02,.77,.43,.87)",
  perspective: 730,
  transition: true,
  gyroscope: true
});

const body = document.body;
const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");
const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

const isDark = () => body.classList.contains("dark");

const setTheme = (bodyClass, buttonClass) => {
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));
  body.classList.add(bodyClass);
  btnTheme.classList.add(buttonClass);
  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", buttonClass);
};

const toggleTheme = () =>
  isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

const displayList = () => {
  const navUl = document.querySelector(".nav__list");

  if (btnHamburger.classList.contains("fa-bars")) {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }
};

const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");
  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};

btnTheme.addEventListener("click", toggleTheme);
btnHamburger.addEventListener("click", displayList);
document.addEventListener("scroll", scrollUp);

const setBodyTheme = () => body.classList.add(getBodyTheme);
const setBtnTheme = () => btnTheme.classList.add(getBtnTheme);

setBodyTheme();
setBtnTheme();

window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};

var particles = Particles.init({
  selector: ".background",
  color: ["#faebd7", "#ff0266", "#03dac6"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 670,
      options: {
        color: ["#dfe9f3", "#03dac6", "#ff0266"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});