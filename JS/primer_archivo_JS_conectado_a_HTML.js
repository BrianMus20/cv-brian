
//en este primer ejemplo se utiliza el evento del click en el boton
/**
document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos programando nuestro primer evento en JS"
}
 */
//en este otro ejemplo se utiliza el evento del click en el documento

document.addEventListener('click',function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos programando nuestro primer evento en JS"
})

//Prueba por mi cuenta: Cambiar Imagen:

document.getElementById('cambiar_imagen').onclick = function(){
    document.getElementById('imagen').src="https://images.unsplash.com/photo-1674842342916-361c15254730?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
}

document.getElementById('imagen_anterior').onclick = function(){
    document.getElementById('imagen').src="https://images.unsplash.com/photo-1674796774722-9ef7213689f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=346&q=80"
}