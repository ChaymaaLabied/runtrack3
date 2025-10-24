const btn = document.getElementById("update");
const tbody = document.querySelector("#usersTable tbody");

async function updateUsers() {
  try {
    const response = await fetch("users.php");
    const users = await response.json();

    tbody.innerHTML = "";
    users.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.nom}</td>
        <td>${user.prenom}</td>
        <td>${user.email}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
  }
}

btn.addEventListener("click", updateUsers);
