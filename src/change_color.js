let header_change = document.querySelector(".header");
header_change.classList.remove("sticky");

window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > 20){
        header_change.classList.add("sticky");
    }else{
        header_change.classList.remove("sticky");
    }
})