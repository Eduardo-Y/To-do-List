// Verificando se a tecla enter foi pressionada
document.querySelector("#taskInput").addEventListener("keypress", teclaEnter);

// Adicionando tarefa caso a tecla enter tenha sido pressionada
function teclaEnter(event) {
    if (event.key == "Enter") {
        adicionarTarefa();
    }
}

function adicionarTarefa() {
    // Selecionando elementos: menu e input
    const menu = document.getElementById("menu");
    const input = document.querySelector("input");

    let lista;

    // Verificando se a lista de tarefas existe
    if (menu.querySelector("ul")) {
        // Caso exista: Seleciona ela
        lista = document.querySelector("ul");
    } else {
        // Caso contrário: Cria e depois a seleciona
        lista = document.createElement("ul");
        menu.appendChild(lista);
    }

    // Criando o novo item da lista (tarefa), botão de deletar tarefa, parágrafo (texto dentro da tarefa) e botão de tarefa feita (check)
    const novoItem = document.createElement("li");

    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.id = "delButton";
    delButton.onclick = () => {
        lista.removeChild(novoItem);
    };

    const paragrafo = document.createElement("p");
    paragrafo.textContent = input.value;

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
