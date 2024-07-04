document.addEventListener("DOMContentLoaded", function () {
  // Função da página de login
  function Entrar() {
    window.location.href = "home.html";
  }

  // Saudação da página home
  var data = new Date();
  var hora = data.getHours();
  let msg = document.getElementById("msg");

  if (hora > 0 && hora < 12) {
    msg.innerHTML = "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML = "Boa tarde!";
  } else {
    msg.innerHTML = "Boa noite!";
  }
  // Fim saudação

  // Manipulação do formulário e lista de tarefas
  const form = document.getElementById("taskForm");
  const ul = document.getElementById("itemList");
  const templateLi = ul.querySelector("li.hidden");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = form.querySelector("#input-add");
    const value = input.value.trim();

    if (value === "") {
      window.alert("Digite um item");
    } else {
      const li = templateLi.cloneNode(true);
      li.classList.remove("hidden");
      li.querySelector("span").textContent = value;

      // Adicionar event listeners aos botões do novo item
      li.querySelector(".delete").addEventListener("click", function () {
        if (confirm("Deseja deletar esse item?")) {
          li.remove();
        }
      });

      li.querySelector(".confirm").addEventListener("click", function () {
        li.querySelector("span").classList.toggle("line-trough");
      });

      ul.appendChild(li);
      input.value = ""; // Limpa o input após adicionar o item
    }
  });

  // Adicionar event listeners aos botões existentes
  const existingDeleteButtons = document.querySelectorAll(".delete");
  const existingConfirmButtons = document.querySelectorAll(".confirm");

  existingDeleteButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      if (confirm("Deseja deletar esse item?")) {
        event.target.closest("li").remove();
      }
    });
  });

  existingConfirmButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Item confirmado!");
    });
  });
});
