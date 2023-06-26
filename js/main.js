const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((elemento) => {
    criarElemento(elemento);
});

/* Evento de clique para envio do form */

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements['nome'];
  const quantidade = evento.target.elements['quantidade'];
  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  criarElemento(itemAtual);

  /* Salvando os elementos no localStorage */

  itens.push(itemAtual);

  localStorage.setItem('itens', JSON.stringify(itens));

  nome.value = '';
  quantidade.value = '';
});

/* Criação de elementos nos quais as informações do form serão armazenadas */

function criarElemento(item) {
  const novoItem = document.createElement('li');
  novoItem.classList.add('item');

  const numItem = document.createElement('strong');
  numItem.innerHTML = item.quantidade;

  novoItem.appendChild(numItem);
  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);
}
