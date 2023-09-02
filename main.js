
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 100);
})


// open faq qestion
let faqs = document.querySelectorAll(".faq");
faqs.forEach(feq => {
    feq.addEventListener("click", () => {
        feq.classList.toggle("open");

        // change icon
    let icon =  feq.querySelector(".faq_icon i");
    if (icon.className === "fa-solid fa-plus")icon.className = "fa-solid fa-minus"
    else icon.className = "fa-solid fa-plus";
    })
})

