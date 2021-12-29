// fetch("https://type.fit/api/quotes")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const insertQuoteRow = (quote, index) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  td1.textContent = index + 1;
  td2.textContent = quote.author !== null ? quote.author : "Unknown Author";
  td3.textContent = quote.text;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
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
const getData = async () => {
    let loadingElem = document.getElementById("loading");
    console.log(loadingElem)
  const res = await fetch("https://type.fit/api/quotes");
  const data = await res.json();
  console.log(data);
  data.map((quote, index) => {
    insertQuoteRow(quote, index);
  });
   loadingElem = document.getElementById("loading");
    console.log(loadingElem)
  handleLoading(false);
};

getData();
