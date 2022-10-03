let nav=document.getElementById("nav");
let span = document.querySelector(".up");

window.onscroll=
    ()=>{
        console.log(this.scrollY);
        if (this.scrollY >= 500){
            nav.style.backgroundColor="#9f9494";
            span.classList.add("show")
        }
        else{
             nav.style.backgroundColor="transparent";
             span.classList.remove("show")
        }
       
       
    }
     span.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    
