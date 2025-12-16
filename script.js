function adicionarTarefa() {
    const menu = document.getElementById("menu");
    const input = document.querySelector("input");
    let lista = null;

    if (menu.querySelector("ul")) {
        lista = document.querySelector("ul");
    } else {
        lista = document.createElement("ul");
        menu.appendChild(lista);
    }
    const novoItem = document.createElement("li");

    const paragrafo = document.createElement("p");
    paragrafo.textContent = input.value;

    const delButton = document.createElement("button");
    delButton.textContent = "X";
    delButton.id = "delButton";
    delButton.onclick = () => {
        lista.removeChild(novoItem);
    };

    const check = document.createElement("input");
    check.className = "check";
    check.type = "checkbox";

    novoItem.appendChild(delButton);
    novoItem.appendChild(paragrafo);
    novoItem.appendChild(check);
    lista.appendChild(novoItem);
}
