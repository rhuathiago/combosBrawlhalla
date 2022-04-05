let armas = document.querySelectorAll(".icons-weapons")
let resultado = document.getElementById('resultado')
armas.forEach(armas => {
    armas.addEventListener('click', escolherArma)
    function escolherArma(){
        if(event.target.id == 'arco'){ 
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/arconovo.png)";
        }if(event.target.id == 'lança'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/lançanova.png)";
        }if(event.target.id == 'marreta'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/marretanova.png)";
        }if(event.target.id == 'foguete'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/foguetenovo.png)";
        }if(event.target.id == 'katar'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/katarnova.png)";
        }if(event.target.id == 'orbe'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/orbenova.png)";
        }if(event.target.id == 'greatsword'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/greatswordnova.png)";
        }if(event.target.id == 'canhao'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/canhaonovo.png)";
        }if(event.target.id == 'espada'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/espadanova.png)";
        }if(event.target.id == 'pistola'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/pistolasnovas.png)";
        }if(event.target.id == 'foice'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/foicenova.png)";
        }if(event.target.id == 'machado'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/machadonovo.png)";
        }if(event.target.id == 'luvas'){
            
            document.getElementById('icon-weapon').style.backgroundImage="url(src/assets/imagensarmas80/luvasnovas.png)";
        }         
        console.log(event.target.id)
    }
})


