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

  const existe = itens.find(elemento => elemento.nome === nome.value);

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  if (existe) {
    /*Conferindo se o elemento ja existe e atualizando ele  na lista e no localStorage*/
    itemAtual.id = existe.id;
    
    atualizaElemento(itemAtual);

    itens[existe.id] = itemAtual;
  } else {
    /* Se o elemento não existe cria o elemento e adciona um id baseado no tamanho do array*/
    itemAtual.id = itens.length;

    criarElemento(itemAtual);

    itens.push(itemAtual);
  }

  /* Salvando os elementos no localStorage */
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
  numItem.dataset.id = item.id;

  novoItem.appendChild(numItem);
  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);

}

/*Função da Atualização do elemento */

function atualizaElemento(item) {
document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
  // 
}
