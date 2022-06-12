// cria elemento <p>
var novoParagrafo = document.createElement("p");
console.log(novoParagrafo);

// cria o texto
var texto = document.createTextNode("Este é o conteudo do paragrafo");

// inclui esse texto no elemento criado
novoParagrafo.append(texto);

// busca o body da pagina
var body = document.querySelector("body");
console.log(body);

// e no body, inclui esse novo elemento <p>
body.appendChild(novoParagrafo);

// inserindo num container...
var container = document.getElementById("container");
console.log(container);

var el = document.createElement("span");
el.appendChild(document.createTextNode("texto do span"));

console.log(el);

container.appendChild(el);