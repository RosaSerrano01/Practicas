// ocultar o mostrar div que contine la lista
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list');

//costantes para agregar elementos a la lista
const addItemInput = document.querySelector('#addItem'); //input
const addItemButton = document.querySelector('button#addItemButton'); //button

//eliminar ultimo item
const removeItemButton = document.querySelector('button#removeItemButton');

//eliminar elemento seleccionado
const removeItem = document.querySelector('button#removeItem');

//mostrar y ocultar lista
hide.addEventListener('click',()=>{
    if(listDiv.style.display=='none'){
       listDiv.style.display='block';
       hide.textContent = '<<';
    }else{
        listDiv.style.display='none';
        hide.textContent = '>>';
    }

});

 //agregar elemento de la lista
 addItemButton.addEventListener('click',()=>{
    let list = document.querySelector('ul');
    let li  = document.createElement('li');
    li.textContent = addItemInput.value;
    list.appendChild(li); //agregar elemento a la lista
    addItemInput.value = "";

 });

 //eliminar ultimo elemento de la lista
 removeItemButton.addEventListener('click',()=>{
     let list = document.querySelector('ul');
     let li = document.querySelector('li:last-child');
     list.removeChild(li);
 });

 function findIndex(elem){
     var i, len = items.length;
     for(i=0;i<len;i++){
         if (items[i]===elem){
             return;
         }
     } return - 1; 
 }

 //obtener index of element in list 
var list = document.getElementById("listItems"),
items = list.getElementsByTagName("li");
list.onclick = function(e){
    var event = e || window.event,
    src = event.target || event.srcElement;
    var mayIndex = findIndex (src);
    //alert (myIndex);
    index = mayIndex;
    console.log(mayIndex);
    //cambiar color del elemento seleccionado
    if (event.target.tagName==='LI') {
        list.querySelectorAll('li') .forEach(el=>el.classList.remove('alert','alert-success'));//se agregan clases boostrap para los elementos
        items[index].classList.add('alert','alert-success');
    }
};

//eliminar elementos seleccionados
removeItem.addEventListener('click', () => {
    let showDiv = document.getElementById('list');
    let divAlert = document.createElement('div');
    let label = document.createElement('label');
    label.innerHTML = 'se elimino el elemento' + index;
    divAlert.classList.add('alert','alert-danger');//clase de la alerta 

    items[index].parentNode.removeChild(items[index]);
    divAlert.appendChild(label);
    showDiv.appendChild(divAlert);

});