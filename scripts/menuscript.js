let debounce = false;
let menu = document.getElementById('mobile-nav-menu');
function openMenu(){
    if (debounce == false){
        debounce = true;
                menu.style.display = "flex";
                menu.style.opacity = 0;
                menu.style.marginTop = Math.sin(1/100)*100 + "px"
                for(let i = 1; i<157; i++){
                    setTimeout(function timer(){
                        console.log(menu.style.opacity = Math.sin(i/100));
                        console.log(menu.style.marginTop = Math.sin(i/100)*100 + "px");
                    }, i*3);
                }
                debounce = false;
                menu.style.opacity = 1;
            }
        }

        
        function closeMenu(){
            if (debounce == false){
                debounce = true;
                        for(let i = 157; i>1; i--){
                            setTimeout(function timer2(){
                                console.log(menu.style.opacity = 1-i/100);
                                if(i == 156){
                                    console.log(i);
                                    menu.style.display = "none";
                                    debounce = false;
                                }
                            }, i*3);

                        }


                    }
                }