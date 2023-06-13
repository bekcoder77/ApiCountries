const body = document.querySelector("body");
const contires = document.querySelector(".contires");
const select = document.querySelector(".select");
const input = document.querySelector("#input");
const input2 = document.querySelector("#input2");
const checkbox = document.querySelector("#checkbox");
const container = document.querySelector(".container");
const navbar = document.querySelector(".navbar");
const loader = document.querySelector(".loader");
const countryModal = document.querySelector(".countryModal");

const api_link = "https://restcountries.com/v3.1/all";

const getData = async (api) => {
  loader.classList.add("act");
  const req = await fetch(api);
  const data = await req.json();
  data.forEach((item) => {
    contires.innerHTML += `
   <div class="box" onclick="getCountry(${item.idd.root})">
   <img src="${item.flags.png} " alt="">
   <h1>${item.name.common}</h1>
   <div class="title">
       <div class="fl">
           <h2>Population :</h2>
           <p>${item.population}</p>
       </div>
       <h3>Region :<span>${item.region}</span></h3>
       <h3>Capital :<span class="capital">${item.capital}</span></h3>
   </div>
 </div>
   `;
  });
  loader.classList.remove("act");
};
getData(api_link);

checkbox.addEventListener("click", () => {
  container.classList.toggle("active");
  contires.classList.toggle("active");
  navbar.classList.toggle("active");
});

input.addEventListener("input", () => {
  const search = input.value.toLowerCase().trim();
  contires.childNodes.forEach((item) => {
    if (item.className) {
      let countryName = item.querySelector("h1").textContent.toLowerCase();
      if (!countryName.includes(search)) {
        item.classList.add("hidden");
      } else {
        item.classList.remove("hidden");
      }
    }
  });
});
select.addEventListener("change", () => {
  const selecttV = select.value;
  contires.childNodes.forEach((item) => {
    if (item.className) {
      let region = item.querySelector("span").textContent;
      if (selecttV == "All") {
        item.classList.remove("hidden");
      } else if (!region.includes(selecttV)) {
        item.classList.add("hidden");
      } else {
        item.classList.remove("hidden");
      }
    }
    input.value = "";
    input2.value = "";
  });
});
input2.addEventListener("input", () => {
  const searchC = input2.value.toLowerCase().trim();
  contires.childNodes.forEach((item) => {
    if (item.className) {
      let countryName = item
        .querySelector(".capital")
        .textContent.toLowerCase();
      if (!countryName.includes(searchC)) {
        item.classList.add("hidden");
      } else {
        item.classList.remove("hidden");
      }
    }
    input.value = "";
  });
});
