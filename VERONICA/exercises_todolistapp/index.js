//paso 1 ---- añadir elementos a la lista
//  - crear una lista vacia.
//      - dentro del html hacer una lista (ul - estatico por lo que no se mete en js) para poder ir metiendo los elementos deseados
//      - dentro de la lista, los (li - mover a js ya que será algo dinamico).
//  - crear input vacio dentro del HTML --- para que el usuario pueda agregar su info
//  - al lado del input agregar un boton en html que cuando se presione agregue un "task" para agregar contenido a lista
//  - crear una function que vaya añadiendo el elemento deseado a la lista 
//  - incorporar la lista en el JS
// De cada uno de estos pasos quer habeis definido,
// Sacar Que deberia hacer en el HTML para ese paso, que debería hacer en el CSS
// Que debería hacer en el JS para ese paso
/**
 * 
 TODO LIST APP
 * Queremos construir una aplicacion web para poder gestionar una lista de tareas. La aplicación tendrá las siguientes funcionalidades:
- Me debe permitir añadir nuevas tareas a la lista
- Me debe permitir marcar una tarea como hecha (sin borrarla de la lista)
- Me debe permitir filtrar mis tareas por todas, sin hacer y completadas
- Me debe mantener el estado de mi lista de tareas aun cuando apague el ordenador y lo vuelva a encender
El diseño es libre. Si no se os ocurre nada, podéis coger alguna imagen de ejemplo de internet.
 * 




 * 1- crear una lista vacia.
 *    - HTML: crear un ul sin li
 *      <ul></ul>
 *    - CSS: No tengo suficiente informacion, me falta el diseño
 *    - JS: Crear una variable con un array vacio 
 *      const ourList = [ ];
 * 
 * 2- crear input vacio dentro del HTML --- para que el usuario pueda agregar su info
 *      - HTML: crear un input usando la etiqueta <input type="text" id=input__Id> 
 *      - CSS: se estilizara cuando se sepa que diseño se quiere
 *      - JS: crear variable que almacene los datos del usuario (const ourInput = document.getElementbyId(input__Id)) 
 * 
 * 3- al lado del input agregar un boton en html que cuando se presione agregue un "task" para
 *  agregar contenido a lista
 * 
 *   - HTML: crear <button id=myBtn></button> agregarle Id al button
 *   - CSS : ya se hara
 *   - JS : llamar const myAddBtn = document.getElementbyId(myBtn)
 *        : escuchar el evento click del button con:
 *               button.addEventListener('click', newElement);
 *          
 *4- function!
 *     -HTML : no se hace nada!
 *     - CSS : no se hace nada!!
 *     - JS:  crear una funcion que añada los elemnetos a la lista cada vez que se haga click (.push)
 *           function newElement(){}; no necesitamos parametros
 *             1- recuperar el valor del input (element) 
 *             let valueInput = document.getElementById('input__Id').value;
 *             let noSeQuePoner = document.createTextNode(valueInput);
 *             2- añadirlo a la lista  
 *             (ourList.push(valueInput))
 *             3 -crear el elmento en el DOM 
 *             const myInput = document.createElement('input');
 *             4-insertar en la lista el elmento creado en el paso 3
 *             myInput.appenchild(ourList.push(valueInput));
 *          
 *             al final de la funcion debe ir  document.getElementById("myInput").valueInput = "";
 * 
 * 5- incorporar la lista en el JS:
 *     -HTML: No se hace nada
 *     - CSS: Tampoco
 *     - JS: 1. se crea la constante para crear el elemento li 
 *          const LIST_ITEM = document.createElement('li');
 *           2. se hace el appenchild con el body
 *          document.body.appenchild(LIST__ITEM);
 * 
 * tarea para mañana:
18:10
añadir en cada linea de codigo que hemos hecho hoy que significa la linea que hicimos
18:10
y unificar luego
18:10
tarea 2
hacer la funcionalidad que marque la tarea como completada
18:11
en un comentario, que haria (como haria para eliminar el elemento de la lista) escrito en castellano (SIN CODIGO)
lo mas detallado posible (editado) 
 * 
 *   
 * 
Que necesito? 
1. crear otro evento (deleteValue) de tipo click al boton donde quiero hacer click para eliminar el elemento
          
2. crear un boton en el js que aparezca al lado del li haciendo un appenchild con el ul al que le daremos click para eliminar el valor
    2.1 De momento no importa su posición en el DOM ya que eso se estiliza con el css
     2.2 Debe estar incluido en el primer evento que hicimos y que aparezca al mismo tiempo que aparece el value del input
     2.3 darle una clase a ese boton

Que necesito para eliminarlo?

2. necesito encontrar un metodo de array para eliminar el valor de un array puesto que ourList es un array
     2.2 Para remover un  del array original puede ser el array.splice 
     array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
     Se me ocurre algo así como hicimos con el push
     ourList.splice(ourInput.value)

    
1- Listar los pasos de la funcionalidad eliminar tarea

    - crear un boton en la funcion mostrar tarea, darle su clase y hacerle un appenchild que aparezca al mismo tiempo que la tarea y el ckeckbox 

    - crear un addEventListener donde utilice el splice para remover de la lista y el remove en el html


2- Implementéis los pasos anteriores
3- Listar los pasos de la funcionalidad filtrar
      - el input checkbox tiene una propiedad checked que es un booleano true y false
      - cuando le dé check al input task completed debo filtrar las tareas que tenga la propiedad checked === true.
      
4- Implementéis filtrar


 */



const ourlist = [];// creo un array vacío


// PARA AÑADIR TAREAS
const ourInput = document.getElementById("id_input");// obtengo del html a traves del id el elemento input
const ourButton = document.getElementById("id_button");// obtengo del html a traves del id el elemento boton 
const BTN_DELETE =document.getElementById('btn_delete'); // obtengo el id del btn eliminar
const TASK_COMPLETED = document.getElementById('task_completed'); // obtengo del html a traves del id el input checkbox




function mostrarTareaEnHTML(tarea,index) {
  const checkboxInput=document.createElement('input');//creamos un elemento input
  checkboxInput.type="checkbox";
  checkboxInput.id= "id_checkbox";
  checkboxInput.name= 'checkbox_name';
  
  
  const labelcheck= document.createElement('label');
  labelcheck.htmlFor= "id_checkbox";
  labelcheck.textContent = tarea; // le asignamos el valor de nuestro input a el li
  
  const li = document.createElement('li'); //creamos un elemento li 

  // AGREGUÉ EL BOTON PARA ELIMINAR LA TAREA
  const BTN_DELETE = document.createElement('button'); //creando boton para eliminar la task 
  BTN_DELETE.id ='btn_delete'; //la clase para el boton de eliminar task
  BTN_DELETE.textContent ='x'; // el texto del boton

  li.setAttribute('data-position',index);
  li.appendChild(checkboxInput);
  li.appendChild(labelcheck);
  li.appendChild(BTN_DELETE);

  const list = document.getElementById("id_list");// obtengo del html a traves del id el elemento ul (lista)
  list.appendChild(li);// le añado el elemento li al ul

}

ourButton.addEventListener('click', function () { // escuchamos el evento que va realizar el usuario cuando haga click    sobre el boton

  //esto se ejecuta cada vez que el usuario hace click en el boton
  let newOurlist = ourlist.push(ourInput.value);// agregamos a nuestra lista el valor del input
  mostrarTareaEnHTML(ourInput.value,newOurlist-1);//llamamos a la función que pinta el valor en html
  ourInput.value = "";// le asigno un string vacío a el valor del input

});

const INPUT_CHECKED = document.getElementById('id_checkbox'); // llamo el input checkbox de la tarea

TASK_COMPLETED.addEventListener('click', tareas_completadas);
  
function tareas_completadas (){
   const myCheckbox = document.getElementById('id_checkbox');

   if (myCheckbox.checked === true){
    document.getElementsByTagName('li'); 
   }
}

   ourlist.filter(tareas_completadas);