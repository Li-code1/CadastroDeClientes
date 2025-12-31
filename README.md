
---

# 📌 Projeto CRUD de Clientes com CrudCrud

Este projeto é uma aplicação web simples para **cadastrar, listar, editar e excluir clientes** utilizando a **API do CrudCrud**.  
O objetivo é praticar o consumo de APIs com **Fetch API**, manipulando requisições **GET, POST, PUT e DELETE**.

---

## 🚀 Funcionalidades
- **Cadastrar Cliente** → Inserir nome e e-mail e salvar na API.  
- **Listar Clientes** → Exibir todos os clientes cadastrados.  
- **Editar Cliente** → Atualizar os dados de um cliente existente.  
- **Excluir Cliente** → Remover um cliente da API.  

---

## 📂 Estrutura do Projeto
```
/projeto-crudcrud
  ├── index.html   # Interface da aplicação
  ├── scripts.js   # Código JavaScript para interagir com a API
  └── styles.css   # Estilos básicos (opcional)
```

---

## 🖥️ Tecnologias Utilizadas
- **HTML5** → Estrutura da página  
- **CSS3** → Estilização básica  
- **JavaScript (ES6+)** → Lógica da aplicação  
- **Fetch API** → Consumo da API REST  
- **CrudCrud** → API gratuita para testes de CRUD  

---

## ⚙️ Configuração
1. Acesse [CrudCrud](https://crudcrud.com/) e gere sua **chave de API**.  
   - Exemplo de endpoint:  
     ```
     https://crudcrud.com/api/1234567890abcdef1234567890abcdef/clientes
     ```
   - ⚠️ Atenção: a chave expira em **24 horas**.  

2. No arquivo `scripts.js`, substitua:
   ```javascript
   const API_URL = "https://crudcrud.com/api/SUA_CHAVE/clientes";
   ```

3. Abra o `index.html` em seu navegador.  

---

## 📸 Demonstração
- Formulário para cadastrar clientes.  
- Lista exibindo clientes cadastrados.  
- Botões **Editar** (azul) e **Excluir** (vermelho).  

---

## 🔧 Melhorias Futuras
- Paginação da lista de clientes.  
- Validação avançada de formulário.  
- Notificações mais amigáveis (toast em vez de `alert`).  
- Persistência de chave da API em variáveis de ambiente.  

---

## 📄 Licença
Este projeto é de uso livre para fins de estudo e prática.  

---

