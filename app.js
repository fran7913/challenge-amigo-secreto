// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creamos una lista vacía para almacenar los nombres
var AmigoSecreto=[];

// Función para agregar un nuevo nombre a la lista
function agregarAmigo() {
  // Agregamos el nuevo nombre a la lista, obtiene el valor del campo de entrada con el ID "amigo" y lo guarda en la variable capturaAmigos.
  let capturaAmigos= document.getElementById("amigo").value;
  let result = document.getElementById("resultado");

  //verifica si el campo está vacío. Si está vacío, llama a la función cambiaAnunciosResultado() para mostrar un mensaje de error.

  if (capturaAmigos === "") {
    ("Ingresa el nombre de un amigo");
  } else {

    //Si el campo no está vacío, verifica si el nombre ya existe en la lista agregarAmigo. Si existe, llama a la función reiniciaCajaTexto() para limpiar el campo de entrada y luego llama a cambiaAnunciosResultado() para mostrar un mensaje de error.
    if(AmigoSecreto.includes(capturaAmigos)) {

      reiniciaCajaTexto();

      cambiaAnuncio("Este nombre de amigo esta repetido");

      return;

    } else {

      //Si el nombre no existe en la lista, agrega el nombre a la lista agregarAmigo, llama a la función agregarAmigosLista() para actualizar la lista de amigos en la página, y luego llama a reiniciaCajaTexto() para limpiar el campo de entrada.

      result.innerHTML = "";
      AmigoSecreto.push(capturaAmigos);
      //element.forEach();   
      agregarAmigosLista(AmigoSecreto);
      reiniciaCajaTexto();
    }
  }
  
}

// Llamamos a la función para agregar algunos nombres
//Esta función se encarga de actualizar la lista de amigos en la página. 
//Primero, obtiene una referencia al elemento HTML con el ID "listaAmigos" y limpia su contenido. Luego, construye una cadena de texto con los nombres de los amigos en formato de lista HTML (<li>) y asigna esa cadena al innerHTML del elemento "listaAmigos".
//Finalmente, retorna.


function agregarAmigosLista(elemento){                       

  let lista = document.getElementById("listaAmigos"); 
  lista.innerHTML = "";                                   
  
  let contenidoLista="";

 for (let i=0; i< elemento.length;i++){                   
                  
  contenidoLista += `<li>${elemento[i]}</li>`;          

         
 }      
  
 lista.innerHTML = contenidoLista                        

 return;   

 }

//Esta función se encarga de limpiar el campo de entrada con el ID "amigo".
//Simplemente asigna una cadena vacía al value del campo de entrada.
//Retorna

function reiniciaCajaTexto() {                  

  

  return document.getElementById("amigo").value="";;

}

//Esta función se encarga de seleccionar un amigo secreto de forma aleatoria.
//Primero, genera un número aleatorio entre 0 y la longitud de la lista ingresaAmigos
//

function sortearAmigo() {                        
  
    let numeroGenerado = Math.floor(Math.random() * AmigoSecreto.length);

    //Verifica si la lista ingresaAmigos está vacía. Si está vacía, llama a cambiaAnunciosResultado() para mostrar un mensaje de error.erifica si la lista ingresaAmigos está vacía. Si está vacía, llama a cambiaAnunciosResultado() para mostrar un mensaje de error. 
    //Si la lista no está vacía, llama a cambiaAnunciosResultado() para mostrar el nombre del amigo secreto seleccionado aleatoriamente.
 

    if (AmigoSecreto.length < 1) {       
                                      
                                                                          

      cambiaAnuncio("Ingresa por lo menos 1 amigo.");   

      
      return ;
  } 

    else {

                                                                                          
                                                                                     

      cambiaAnuncio(`Tu amigo secreto es: ${AmigoSecreto[numeroGenerado]}`) 
               
      AmigoSecreto.splice(numeroGenerado, 1);                                          
     
      agregarAmigosLista(AmigoSecreto);                                             

     } 
  

}

//Esta función se encarga de actualizar el contenido del elemento HTML con el ID "resultado".

function cambiaAnuncio(anuncio){

  //Primero, obtiene una referencia al elemento "resultado" y limpia su contenido.
  //asigna el valor del parámetro anuncio al innerHTML del elemento "resultado".

let result = document.getElementById("resultado");                           
result.innerHTML = "";                                                      
result.innerHTML += anuncio                                                 

return;

}