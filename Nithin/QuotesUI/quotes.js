// fetch("https://type.fit/api/quotes")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
const reset = () => {
  location.reload();
}
const submit = async() => {
  const id_ss = document.getElementById("inp_1");
   const getData = async () => {
    let loadingElem = document.getElementById("loading");
    console.log(loadingElem)
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id_ss.value}`);
  const data = await res.json();
  console.log(data);
  insertQuoteRow(data);
  // data.map((quote) => {
  //   insertQuoteRow(quote);
  // });
   loadingElem = document.getElementById("loading");
    console.log(loadingElem)
  handleLoading(false);
};

getData();

const insertQuoteRow = (quote) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  td1.textContent = quote.id;
  td2.textContent = quote.title !== null ? quote.title : "Unknown Author";
  tr.appendChild(td1);
  tr.appendChild(td2);
  const tbody = document.getElementById("tbody");
  tbody.appendChild(tr);
};

const handleLoading = (status) => {
  if (status) {
    const loadingElem = document.getElementById("loading");
    loadingElem.style.visibility = "visible";
  } else {
    const loadingElem = document.getElementById("loading");
    loadingElem.style.visibility = "hidden";
  }
};
  
}



