const data = [
    { id: 1, username: "Ali", department: "Development", salar: "3000 AZN" },
    { id: 2, username: "Farid", department: "Doctor", salar: "4000 AZN" },
    { id: 3, username: "Umid", department: "Avtos", salar: "FREE" },
  ];

  const tbody = document.getElementById('dataTable');

  for(let i = 0; i< data.length; i++) {
    tbody.innerHTML += `
    <tr>
    <td>${data[i].username}</td>
    <td>${data[i].department}</td>
    <td>${data[i].salar}</td>
    </tr>
    `;
  }