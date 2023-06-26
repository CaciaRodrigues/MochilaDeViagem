const form = document.getElementById('novoItem');
const lista = document.getElementById("lista");
const itens = [];

/* Evento de clique para envio do form */

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value);

    nome.value = "";
    quantidade.value = "";
})

/* Criação de elementos nos quais as informações do form serão armazenadas */

function criaElemento(nome, quantidade) {
 const novoItem = document.createElement("li");
 novoItem.classList.add("item");

 const numItem = document.createElement("strong");
 numItem.innerHTML = quantidade;

 novoItem.appendChild(numItem); 
 novoItem.innerHTML += nome;  

 lista.appendChild(novoItem);

 /* Salvando os elementos no localStorage */

 const itemAtual = {
    "nome" : nome,
    "quantidade": quantidade

 }

 itens.push(itemAtual);

 localStorage.setItem("item", JSON.stringify(itens));
 
}