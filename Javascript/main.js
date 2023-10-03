const linkBtn = document.querySelector("header .container .link-btn");
const burger = document.getElementById("burger");
const exitBtn = document.getElementById('exit');
const hoverActive = document.querySelectorAll("header .container .hover-active");
const sendTo = document.querySelectorAll('a');

burger.addEventListener("click", () => {
	linkBtn.classList.add("active");
});

exitBtn.addEventListener("click", () => {
  linkBtn.classList.remove("active");
})

hoverActive.forEach((e) => {
  e.addEventListener('click', () => {
    hoverActive.forEach((ele) => {
      if (e != ele) {
        ele.classList.remove('active');
      } else {
        ele.classList.toggle('active');
      }
    })
  })
})

sendTo.forEach((e) => {
  e.addEventListener('click', () => {
    window.scrollTo({
			top: parseInt(e.dataset.count),
      left: 0
		});
    linkBtn.classList.remove("active");
  })
})


window.addEventListener('scroll', () => {
  console.log(window.scrollY);
})
