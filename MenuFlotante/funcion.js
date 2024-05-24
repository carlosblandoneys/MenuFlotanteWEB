document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");

    let menuVisible = false; 

    menu.addEventListener("click", function() {
        
        if (!menuVisible) {
            menu.style.right = "15%"; 
            menuVisible = true;
            console.log("menu desplegado");
        } else {
            menu.style.right = "5%"; 
            menuVisible = false;
            console.log("menu oculto");
        }
    });
});
