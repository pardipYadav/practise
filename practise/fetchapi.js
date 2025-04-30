// const userList = document.getElementById("userList");

// const res = fetch("https://jsonplaceholder.typicode.com/users");
// res
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Something went wrongs");
//     }
//     return response.json();
//   })
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(user);
//       const li = document.createElement("li");
//       li.textContent = `${user.name} (${user.email}`;

//       userList.appendChild(li);
//     });
//   })
//   .catch((error) => {
//     userList.innerHTML = `<li style="color:red;">Error: ${error.message}</li>`;
//   });

const getPlist = async (data) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let reponse = await p.json();
  return reponse;
};
const getId = async (id) => {
  let resp = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  let r = await resp.json();
  return r;
};
const mainFunc = async () => {
  let data = {
    title: "pardeep",
    body: "bhai",
    userId: 101,
  };
  let listP = await getPlist(data);
  console.log(listP);
  console.log(await getId(5));
};

mainFunc();
