// selecionar elemento
var title = document.querySelector("#title");
console.log(title);

// alterar via innerHTML
title.innerHTML = "Testando o texto alterado!";

// textContent -> é mais utilizado, recomendado e performance
var subtitle = document.querySelector(".subtitle");
console.log(subtitle);

subtitle.textContent = "Testando o textContent!";