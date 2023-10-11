// async function test() {
//   // const URLRandom = await axios.get("http://jservice.io/api/random");

//   // let category_ID = URLRandom.data[0].category_id;
//   // console.log(category_ID);
//   const URLCat = await axios.get(`https://jservice.io/api/category?id=285`);
//   // let arr = [];
//   // for (let i = 0; i < 5; i++) {
//   //   let tempRand = Math.floor(Math.random() * URLCat.data.clues.length);
//   //   arr[i] = tempRand;
//   // }
//   // console.log(arr);
//   // let tempRand = Math.floor(Math.random() * URLCat.data.clues.length);
//   console.log(URLCat.data);
// }
function selectCol(row, col) {
  const thID = document.getElementById(`${row}-${col}`); //table head cells
  console.log(thID);
  // return thID;
}
function selectCell(row, col) {
  const tdID = document.querySelectorAll(".row-1"); //table head cells

  // tdID[0].innerText = "CAT";
  // console.log(tdID[0].innerText);
  console.log(tdID);
  // return tdID;
}

// async function populateTable() {
//   // populates category row first and
//   for (let row = 1; row <= 6; row++) {
//     for (let col = 1; col < 6; col++) {
//       const resRand = await axios.get("http://jservice.io/api/random");
//       let category_ID = resRand.data[0].category_id;
//       const categoryRes = await axios.get(
//         `https://jservice.io/api/category?id=${category_ID}`
//       );
//       let randClue = [];
//       for (let i = 0; i < 5; i++) {
//         let tempRand = Math.floor(Math.random() * categoryRes.data.clues.length);
//         randClue[i] = tempRand;
//       }

//       // selectCell(row, col).textContent = categoryRes; selecting cells
//     }
//     selectRow(row).textContent = res.data[0].category.title;
//   }
// }

async function populateJeo() {
  let dim = 6;

  let randomID = new Array(dim);
  for (let cat = 0; cat < dim; cat++) {
    const randCategory = await axios.get("http://jservice.io/api/random"); //random ID
    let category_ID = randCategory.data[0].category_id;

    randomID[cat] = category_ID;
  }

  for (let col = 0; col < dim; col++) {
    const categoryRes = await axios.get(
      `https://jservice.io/api/category?id=${randomID[col]}`
    );

    for (let row = 1; row <= dim; row++) {
      let randomClue = Math.floor(
        Math.random() * categoryRes.data.clues.length
      );
      selectCell(col + 1, row).textContent =
        categoryRes.data.clues[randomClue].question; //selecting cells
    }
    selectCol(col).textContent = categoryRes.data.title;
  }
}
