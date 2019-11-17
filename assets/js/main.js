const inputTarefa = document.getElementById("tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}
function criaApagar(){
    const btn_apagar = document.createElement('button');
    btn_apagar.innerHTML =  'Apagar';
    tarefas.appendChild(btn_apagar);
}
function criaTarefa(texto) {
  const li = criaLi();
  li.innerHTML= texto;
  tarefas.appendChild(li);
}
function limpaCampos(){
    const li = criaLi();
    inputTarefa.value ='';
    tarefas.removeChild(tarefas.lastChild);
}

//Quando o user clicar irá executar uma função anônima. with EcmaScript
btnTarefa.addEventListener("click", () => {
  //Aqui eu pego o valor que está em inputTarefa e mostro.
  if (!inputTarefa.value) {
    return alert("É necessário digitar uma tarefa TIAGO! =\\ ");
  } else {
    if (inputTarefa) {
      criaTarefa(inputTarefa.value);
      criaApagar();
    }
  }
});
