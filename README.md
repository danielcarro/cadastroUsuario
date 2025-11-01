
# Projeto Cadastro de Usuário

Projeto desenvolvido como parte da **Atividade Prática** da disciplina de *Projeto de Software*, utilizando **Java**, **Spring MVC**, **JSP**, **JavaScript** e **Bootstrap 5**.

## Descrição

O sistema consiste em um formulário de cadastro de usuários, com validação de campos, principalmente o campo de e-mail, e preenchimento automático de endereço a partir do CEP utilizando a **API ViaCEP**.

O projeto foi implementado seguindo a arquitetura **MVC** com Spring, e contém validação de front-end com **jQuery**.

## Estrutura do Projeto

```
cadastroUsuario/
│
├─ src/main/java/com/mycompany/cadastroUsuario/controller
│   └─ UsuarioController.java
│
├─ src/main/webapp/WEB-INF/views
│   └─ index.jsp
│
├─ src/main/webapp/resources/js
│   ├─ validation.js
│   └─ viacep.js
│
├─ src/main/webapp/resources/css
│   └─ style.css
│
└─ pom.xml
```

### Principais Tecnologias

* **Java 17**
* **Spring Web MVC 4.3.29**
* **Tomcat 11**
* **JSP / JSTL**
* **Bootstrap 5**
* **jQuery**
* **API ViaCEP** (para preenchimento automático de endereço pelo CEP)

## Funcionalidades

1. Formulário de cadastro de usuário:

   * Campos: nome, e-mail, telefone, CEP, endereço, cidade, UF.
   * Validação em tempo real com **jQuery** (campo e-mail obrigatório e formato correto).
2. Preenchimento automático de endereço usando a **API ViaCEP**.
3. Estrutura MVC organizada com Spring MVC e JSP.
4. Suporte a arquivos estáticos (JS e CSS) via `<mvc:resources>`.

## Como Executar

1. Clonar o projeto:

```bash
git clone https://github.com/danielcarro/ecotrack.git
```

2. Importar no **NetBeans** como projeto Maven existente.
3. Garantir que o **Tomcat 11** esteja configurado.
4. Rodar o projeto.
5. Acessar no navegador: `http://localhost:8080/cadastroUsuario/`.

## Links do Projeto

* Repositório GitHub: [https://github.com/danielcarro/ecotrack](https://github.com/danielcarro/ecotrack)
* Deploy na Vercel: [https://ecotrack-kohl.vercel.app/](https://ecotrack-kohl.vercel.app/)
* Trello (organização das tarefas): *Espaço para print da Trello*

## Observações

* Certifique-se que os arquivos **validation.js** e **viacep.js** estejam dentro de `resources/js/` para não gerar erro 404.
* JSPs devem estar dentro de `WEB-INF/views/` para respeitar a segurança da aplicação.
* Para validação de campos e consumo da API, jQuery deve ser importado no `index.jsp` antes dos scripts JS.

