var slide = document.getElementsByClassName("animie");
window.addEventListener("scroll", () => {
    console.log(window.scrollY);


    if (window.scrollY > 1700) 
    {
        slide.forEach(e => 
        {
            e.style.backgroundColor = "red";
        });
    }


})