
//primer tarea hacer que el menu de accuont aparezca u desaparezca al darle click
// la idea es asigarle la clase inactive de css al elemento para que desaparezca cuando le hagamos click

//seleccionamos el email 
const menuEmail = document.querySelector(".navbar-email")
//seleccionamos el menu 
const desktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener('click', toggleDesktopMenu)

//reto solucion propia:
/* function toggleDesktopMenu(event){
    
    var  desktopMenuClass = desktopMenu.className

    if(desktopMenuClass === "desktop-menu"){
        event.menuEmail
        desktopMenu.classList.add('inactive')
        return

    }else if(desktopMenuClass === "desktop-menu inactive"){
        desktopMenu.classList.remove('inactive')
        return
    }


} */

//solucion platzi

function toggleDesktopMenu(event) {
    desktopMenu.classList.toggle('inactive');
}
