let app = document.querySelector("section#app")

function criarTarefa(input) {
  // Lista de tarefas
  let lista = document.querySelector("ul.lista")
  
  let tarefa = document.createElement("li")
  tarefa.classList.add("tarefa")
  tarefa.innerHTML = `<p style="width: 80%;">${input}</p>`
  
  let deletar = document.createElement("span")
  deletar.classList.add("material-symbols-outlined", "deletar")
  deletar.innerText = "delete"
  
  deletar.addEventListener("click", () => {
    lista.removeChild(tarefa)
    salvarTarefas()
  })
  
  tarefa.appendChild(deletar)
  lista.appendChild(tarefa)
}

function adicionarTarefa() {
  let tarefaInput = document.querySelector("input#tarefa")
  
  if (tarefaInput.value == "") return
  
  criarTarefa(tarefaInput.value)
  
  tarefaInput.value = ""
  
  salvarTarefas()
}

// Pega as tarefas e salva elas no Local Storage
function salvarTarefas() {
  let tarefas = document.querySelectorAll("li.tarefa > p").values().toArray()
  tarefas = tarefas.map(tarefa => tarefa.innerText)
  
  localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

// Pega as tarefas do Local Storage e coloca elas na página
function carregarTarefas() {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
  
  tarefas.forEach(tarefa => {
    criarTarefa(tarefa)
  })
}

carregarTarefas()