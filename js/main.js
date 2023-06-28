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

    itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
  } else {
    /* Se o elemento não existe cria o elemento e adciona um id baseado no tamanho do array -melhorado*/
    itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;

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

  novoItem.appendChild(botaoDeletar(item.id));

  lista.appendChild(novoItem);
}

/*Função da Atualização do elemento */

function atualizaElemento(item) {
document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
  // 
}

/* Função para deletar o item */

function botaoDeletar(id) {
  /*criando o botão de deletar */
  const elementoBotao = document.createElement("button");
  elementoBotao.innerText = "X";

  /*Apontando para o que botão precisa deletar ao ser clicado */

  elementoBotao.addEventListener('click', function() {
    deletarElemento(this.parentNode, id);
  })

  return elementoBotao;
}

function deletarElemento(tag, id) {
  tag.remove();

  itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

  localStorage.setItem('itens', JSON.stringify(itens));
}
