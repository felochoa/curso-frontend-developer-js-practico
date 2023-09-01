
//primer tarea hacer que el menu de accuont aparezca u desaparezca al darle click
// la idea es asigarle la clase inactive de css al elemento para que desaparezca cuando le hagamos click

//seleccionamos el email 
const menuEmail = document.querySelector(".navbar-email")
//seleccionamos el menu 
const desktopMenu = document.querySelector(".desktop-menu")

// tarea 2 - arreglar el menu de hamburguesa en la version de mobil
// se debe desaparecer en la version de desktop

const mobileMenu = document.querySelector(".mobile-menu")
const menuHamIcon = document.querySelector(".menu")

//tarea 3 - al minimizar el tamaño de la pagina debe desaparecer el menu
// del email porque asi debe pasar en mobile

//se hace en el media query de styles.css

//tarea 4 - debe desaparecer el menu de carro y aparecer cuando se le da click 
//

const carMenu = document.querySelector(".product-detail")
const carIcon = document.querySelector(".navbar-shopping-cart")

//tarea 5 - crear la lista de productos 

const productList = []
productList.push({
    /* imagen nombre precio */
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
})
productList.push({
    /* imagen nombre precio */
    name: "Pantalla",
    price: 330,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
})
productList.push({
    /* imagen nombre precio */
    name: "Computador",
    price: 750,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
})

const cardsContainer = document.querySelector('.cards-container')


//////////////////////////////////////////////////////////////

menuEmail.addEventListener('click', toggleDesktopMenu)

menuHamIcon.addEventListener('click', toggleMobileMenu)

carIcon.addEventListener('click', toggleCarMenu)

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

//solucion platzi tarea 1

function toggleDesktopMenu(event) {
    console.log(event)

    
    const iscarMenuOpen = !carMenu.classList.contains('inactive')  
    
    if(iscarMenuOpen){ 
        carMenu.classList.toggle('inactive')
        desktopMenu.classList.toggle('inactive');
    }else{
        desktopMenu.classList.toggle('inactive');}

}

//tarea 2
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    
    const ismobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const iscarMenuOpen = !carMenu.classList.contains('inactive')        

    //cerrar otros menus
    if (iscarMenuOpen && ismobileMenuOpen ){
        carMenu.classList.toggle('inactive');
    }
}

//tarea 4 car menu
function toggleCarMenu() {
    
    carMenu.classList.toggle('inactive');

    const ismobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const iscarMenuOpen = !carMenu.classList.contains('inactive')
    const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive')  

    //cerrar otros menus
    if (iscarMenuOpen && ismobileMenuOpen ){
        mobileMenu.classList.toggle('inactive');
    }
   if (iscarMenuOpen && isdesktopMenuOpen){
    desktopMenu.classList.toggle('inactive');
    
   }
}


/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */


//tarea 5 crear los divs de los articulos
for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoidiv = document.createElement('p');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoidiv.appendChild(productPrice);
    productInfoidiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoidiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)

}