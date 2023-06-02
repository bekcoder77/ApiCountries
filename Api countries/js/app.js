window.addEventListener("DOMContentLoaded", () => {
  const contires = document.querySelector(".contires");
  const select = document.querySelector(".select");
  const input = document.querySelector("#input");
  const checkbox = document.querySelector("#checkbox");
  const container = document.querySelector(".container");
  const navbar = document.querySelector(".navbar");
  const loader = document.querySelector(".loader");
  const API = "https://restcountries.com/v3.1/all";
  select.addEventListener('change', ()=>{
    const selecttV = select.value
    contires.childNodes.forEach((item) => {
      if(item.className){
      let regions = item.querySelector("span").textContent
      if(selecttV =="All"){
      item.classList.remove("hidden")
      }
   else if(!regions.includes(selecttV)){
      item.classList.add("hidden")
    }else{
      item.classList.remove("hidden")
    }
    input.value =''
      }
     });
    })
  checkbox.addEventListener("click", () => {
    container.classList.toggle("active");
    contires.classList.toggle("active");
    navbar.classList.toggle("active");
  });
  input.addEventListener("input", () => {
    const search = input.value.toLowerCase().trim();
    contires.childNodes.forEach((item) => {
     if(item.className){
     let countryName = item.querySelector("h1").textContent.toLowerCase()
      if(!countryName.includes(search)){
        item.classList.add("hidden")
      }else{
        item.classList.remove("hidden")
      }
     }
    });
  });
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      newData(data);
   
    });
  const newData = (data) => {
    data.forEach((item) => {
      contires.innerHTML += `
     <div class="box">
     <img src="${item.flags.png} " alt="">
     <h1>${item.name.common}</h1>
     <div class="title">
         <div class="fl">
             <h2>Population :</h2>
             <p>${item.population}</p>
         </div>
         <h3>Region :<span>${item.region}</span></h3>
         <h3>Capital :<span>${item.capital}</span></h3>
     </div>
   </div>
     `;
    });
  };
});




