// Substitua pelo seu endpoint gerado no CrudCrud
const API_URL = "https://crudcrud.com/api/https:7befa185b15b4d1c9afd269ee545335b";

// Seletores
const form = document.getElementById("clienteForm");
const listaClientes = document.getElementById("listaClientes");

// Variável para controlar edição
let clienteEditando = null;

// Função para listar clientes
async function listarClientes() {
  listaClientes.innerHTML = ""; // limpa lista antes de renderizar
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Erro ao buscar clientes");
    const clientes = await response.json();

    if (clientes.length === 0) {
      listaClientes.innerHTML = "<li>Nenhum cliente cadastrado.</li>";
      return;
    }

    clientes.forEach(cliente => {
      const li = document.createElement("li");
      li.textContent = `${cliente.nome} - ${cliente.email}`;

      // Botão Editar
      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.classList.add("edit");
      btnEditar.onclick = () => prepararEdicao(cliente);

      // Botão Excluir
      const btnExcluir = document.createElement("button");
      btnExcluir.textContent = "Excluir";
      btnExcluir.classList.add("delete");
      btnExcluir.onclick = () => excluirCliente(cliente._id);

      li.appendChild(btnEditar);
      li.appendChild(btnExcluir);
      listaClientes.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao listar clientes:", error);
    listaClientes.innerHTML = "<li>Erro ao carregar clientes.</li>";
  }
}

// Função para cadastrar ou editar cliente
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    if (clienteEditando) {
      // Atualizar cliente (PUT)
      await fetch(`${API_URL}/${clienteEditando}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email })
      });
      clienteEditando = null;
      alert("Cliente atualizado com sucesso!");
    } else {
      // Criar novo cliente (POST)
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email })
      });
      alert("Cliente cadastrado com sucesso!");
    }
    form.reset();
    listarClientes();
  } catch (error) {
    console.error("Erro ao salvar cliente:", error);
    alert("Erro ao salvar cliente.");
  }
});

// Função para excluir cliente
async function excluirCliente(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    alert("Cliente excluído com sucesso!");
    listarClientes();
  } catch (error) {
    console.error("Erro ao excluir cliente:", error);
    alert("Erro ao excluir cliente.");
  }
}

// Função para preparar edição
function prepararEdicao(cliente) {
  document.getElementById("nome").value = cliente.nome;
  document.getElementById("email").value = cliente.email;
  clienteEditando = cliente._id;
}

// Inicializa listagem ao carregar a página
listarClientes();
