document.addEventListener("DOMContentLoaded", function (event) {
    let tarefas = localStorage.getItem("tarefas");
    if (tarefas) {
        tarefas = tarefas.split(",");
    }
    const lista = document.querySelector("ul");

    for (let i = 0; i < tarefas.length; i++) {
        adicionarTarefa(tarefas[i]);
    }
});

// Verificando se a tecla enter foi pressionada
document.querySelector("#taskInput").addEventListener("keypress", teclaEnter);

// Adicionando tarefa caso a tecla enter tenha sido pressionada
function teclaEnter(event) {
    if (event.key == "Enter") {
        adicionarTarefa();
    }
}

function adicionarTarefa(tarefa = null) {
    // Selecionando elementos: menu e input
    const menu = document.getElementById("menu");
    const input = document.querySelector("input");

    let lista, tarefasStorage;

    // Verificando se a lista de tarefas existe
    if (menu.querySelector("ul")) {
        // Caso exista: Seleciona ela
        lista = document.querySelector("ul");
        tarefasStorage = localStorage.getItem("tarefas").split(",");
    } else {
        // Caso contrário: Cria e depois a seleciona
        lista = document.createElement("ul");
        menu.appendChild(lista);
        // Verificando se uma tarefa é nova ou apenas esta sendo carregada
        if (!tarefa) {
            localStorage.setItem("tarefas", "");
        }
        // Atribui um array com o nome as tarefas na ordem correta em uma variável
        tarefasStorage = localStorage.getItem("tarefas").split("");
    }

    // Criando o novo item da lista (tarefa)
    const novoItem = document.createElement("li");

    // parágrafo (texto dentro da tarefa)
    const paragrafo = document.createElement("p");
    // Verificando se uma tarefa é nova ou apenas esta sendo carregada
    if (tarefa) {
        paragrafo.textContent = tarefa;
    } else {
        paragrafo.textContent = input.value;

        // Armazenando a tarefa
        let arrayTarefas = tarefasStorage.concat(input.value);
        localStorage.setItem("tarefas", `${arrayTarefas}`);
    }

    // Criando botão de deletar tarefa
    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.id = "delButton";
    delButton.onclick = () => {
        // Remove o elemento "novoItem" da lista
        lista.removeChild(novoItem);

        // Remove a tarefa do armazenamento local do navegador
        tarefasStorage = localStorage.getItem("tarefas").split(",");
        const index = tarefasStorage.indexOf(paragrafo.textContent);
        tarefasStorage.splice(index, 1);
        localStorage.setItem("tarefas", `${tarefasStorage}`);
    };

    // botão de tarefa feita (check)
    const check = document.createElement("input");
    check.className = "check";
    check.type = "checkbox";

    // Conectando os elementos delButton, 'paragrafo' e check dentro do item
    novoItem.appendChild(delButton);
    novoItem.appendChild(paragrafo);
    novoItem.appendChild(check);

    // Ligando a nova tarefa a lista
    lista.appendChild(novoItem);
}
