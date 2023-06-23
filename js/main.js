const form = document.getElementById('novoItem');
const lista = document.getElementById("lista");

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criaElemento(nome, quantidade) {
 const novoItem = document.createElement("li");
 novoItem.classList.add("item");

 const numItem = document.createElement("strong");
 numItem.innerHTML = quantidade;

 novoItem.appendChild(numItem); 
 novoItem.innerHTML += nome;  

 lista.appendChild(novoItem);
}