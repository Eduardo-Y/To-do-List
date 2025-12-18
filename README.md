# 📝 To-do List (v2.0 - Persistência de Dados)

![Status](https://img.shields.io/badge/Status-Funcional-brightgreen)
![LocalStorage](https://img.shields.io/badge/Storage-Local__Storage-orange)

Uma evolução da Lista de Tarefas clássica, agora com suporte a **persistência de dados**. Suas tarefas não desaparecem mais ao atualizar a página ou fechar o navegador!

## 🎯 Objetivo do Projeto

O foco desta versão foi o gerenciamento de dados no lado do cliente (Client-side storage) e a automação de interface:

-   **Persistência com LocalStorage:** Manipulação de strings e arrays para salvar dados no navegador.
-   **Ciclo de Vida (DOMContentloaded):** Recuperação automática de informações ao carregar a aplicação.
-   **Eventos de Teclado:** Implementação de atalhos (tecla Enter) para agilizar a inserção de dados.
-   **Manipulação Dinâmica Complexa:** Criação e remoção de elementos (Nós) e sincronização simultânea com o banco de dados local.

## 🚀 Tecnologias Utilizadas

-   **HTML5:** Interface estrutural.
-   **CSS3:** Estilização visual e responsiva.
-   **JavaScript (ES6+):** Lógica avançada de armazenamento e manipulação de eventos.

## ⚙️ Novas Funcionalidades e Melhorias

-   [x] **Salvar Tarefas:** Os itens são armazenados automaticamente no `localStorage`.
-   [x] **Carregamento Automático:** Ao abrir o site, o script lê os dados salvos e reconstrói a lista.
-   [x] **Atalho de Teclado:** Pressione `Enter` no campo de input para adicionar uma tarefa instantaneamente.
-   [x] **Sincronização de Deleção:** Ao remover uma tarefa visualmente, ela também é excluída do histórico do navegador.
-   [x] **Criação de Estrutura Dinâmica:** O elemento `<ul>` agora é gerado via JS apenas quando necessário.

## 🧠 Como funciona a lógica?

1. **Verificação inicial:** O script checa se existe a chave `"tarefas"` no armazenamento.
2. **Adição:** Ao adicionar um item, o texto é concatenado a um array e transformado em string para salvar.
3. **Remoção:** O sistema localiza o `índice` do texto no array, remove-o usando `.splice()` e atualiza o banco local.

---

## 🛠️ Como rodar o projeto

1. Clone este repositório:
    ```bash
    git clone [https://github.com/Eduardo-Y/To-do-List.git](https://github.com/Eduardo-Y/To-do-List.git)
    ```
2. Abra o arquivo index.html em seu navegador.

👨‍💻 Autor

Desenvolvido por Yoda - Explorando o ecossistema Front-end.
