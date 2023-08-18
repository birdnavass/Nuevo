document.getElementById("contenido1").addEventListener("click", function(){
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "vistas/contenido1.html",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.getElementById("container").innerHTML = xhr.responseText
        }
    }
    xhr.send();
})
document.getElementById("contenido2").addEventListener("click", function(){
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "vistas/contenido2.html",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.getElementById("container").innerHTML = xhr.responseText
        }
    }
    xhr.send();
})
