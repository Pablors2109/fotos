// Esperar a que el DOM esté completamente cargado. chatgpt te quiero
// window.addEventListener('DOMContentLoaded', () => {
//     // Seleccionamos todos los elementos con la clase "corazon"
//     const corazones = document.querySelectorAll('[id^="corazon"]');

//     // Añadimos un event listener a cada corazón
//     corazones.forEach(corazon => {
//         corazon.addEventListener('click', () => {
//             // Buscar el elemento span asociado al corazón pulsado
//             const span = corazon.nextElementSibling;
//             if (span && span.tagName.toLowerCase() === 'span') {
//                 // Incrementar el valor numérico dentro del span
//                 const likes = parseInt(span.textContent, 10) || 0;
//                 span.textContent = likes + 1;
//             }
//         });
//     });
// });






// var corazon11=document.getElementById("corazon1")
// corazon11.onclick=function(){
//     var contador11=document.getElementById("span1")
//     contador1.innerHTML=parseInt(contador1.innerHTML)+1;
//     // contador1.innerHTML++; hace lo mismo que arriba, sumarle 1, sólo funciona en javascript 
// }
// var corazon22=document.getElementById("corazon2")
// corazon22.onclick=function(){
//     var contador2=document.getElementById("span2")
//     contador2.innerHTML++;
// }






var corazones=document.getElementsByClassName("fa-heart");
for (let index = 0; index < corazones.length; index++) {
    var element = corazones[index];
    element.onclick=function(c){
        var cont=c.target.nextElementSibling;
        cont.innerHTML++;
    }
    
}
