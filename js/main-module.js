import { add, sub, molt, div } from './util/math.js'; // Importo un modulo esterno e in particolare una sua funzione.

/**
 * Funsione ad uso dimostrativo:
 *  - La funzione è esportata dal modulo e utilizza al suo interno la funzione "add" precedentemente importata.
 * 
 * @param  {} a primo valore
 * @param  {} b secondo valore
 */


export function callAdd(a, b) {
  return add(parseInt(a), parseInt(b));
}

export function callSub(a, b) {
  return sub(parseInt(a), parseInt(b));
}

export function callMolt(a, b) {
  return molt(parseInt(a), parseInt(b));
}

export function callDiv(a, b) {
  return div(parseInt(a), parseInt(b));
}

export const addItem = () => {
  // Accedo al DOM recuperando il riferimento al tag UL con id "myList"
  const ul = document.getElementById("myList");
  // Creo un nodo di tipo LI  
  const li = document.createElement("li");

  // Setto in un tag html (un LI) una delle sue proprietà (id)
  li.setAttribute('id', 'mylist-item');

  // Aggiungo all'elemento un Child node di tipo testo (il contenuto del Li)
  li.appendChild(
    //Creo un elemento di testo
    document.createTextNode('Elemento lista'));

  // Aggingo il LI nel DOM della pagina. D'ora in poi si visualizza il LI
  ul.appendChild(li);
 
}
  

export const removeItem = () => {
  // Accedo al DOM recuperando il riferimento al tag UL con id "myList"
  const ul = document.getElementById("myList");
  // Recupero il riferimento al tag LI con id "myList-Item"
  const item = document.getElementById('mylist-item');
  // In UL rimuovo un nodo child che corrisponde a item
  ul.removeChild(item);
}

export function addImg() {
  // Accedo al DOM recuperando il riferimento al tag UL con id "myImg"
  const div = document.getElementById("myImg");
  const img = document.createElement("img");
  img.setAttribute('id', 'immagine');
  img.setAttribute('style', 'padding:9px; max-width: 260px;');
  img.setAttribute('src', "https://image.freepik.com/vector-gratis/desarrollo-software-codificacion-programacion-concepto-procesamiento-datos-codigo-computadora-interfaz-ventana_82984-264.jpg");
  div.appendChild(img);
}

export function removeImg() {
  const div = document.getElementById("myImg");

  const imgcan = document.getElementById("immagine");

  div.removeChild(imgcan);
}

export const cercaF = () => {

  const promiseFetch = fetch('http://www.omdbapi.com/?s=%27blade%20runner%27&apikey=cea54230');
  
  console.log(promiseFetch);
  
  promiseFetch
  
  .then(ris => {
    if (ris) return ris.json(); // in questo modo verifico che il risultato nn sia UNDEFINE or NULL
  })

  .then(arrjson => {
    const arraymov = arrjson.Search;
    arraymov.forEach(risfilm => {
      console.info(risfilm.Title);
      console.info(risfilm.Year);
    })
  })

  .catch(err => {
    console.error(err);
  })
}


















//TODO: callAdd arrow function version

export function addListElements() {
  for (let index = 1; index < 5; index++) {
    const node = document.createElement('LI'); // Create a <li> node
    const textnode = document.createTextNode('Elemento' + index); // Create a text node
    node.appendChild(textnode); // Append the text to <li>
    document.getElementById('myList').appendChild(node); // Append <li> to <ul> with id="myList"
  }
}

export function removeListElements() {
  const domElement = document.getElementById('myList');
  while (domElement.hasChildNodes()) {
    domElement.removeChild(domElement.firstChild);
  }
}





















