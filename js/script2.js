const allObjectTwo = document.querySelector(".object2");
const elForm1 = document.querySelector("#form1");
const elInput = document.querySelector("#news");
const elBtn = document.querySelector("#btn");

alert("Yangiliklarni izlash uchun rustilida yozing!!!")
// 
function renderCards2(cardsItems2, pok = "") {
  allObjectTwo.innerHTML = ''
  cardsItems2.forEach((element2) => {
  const newDivTwo = document.createElement("div");
  newDivTwo.className = "all5";
  newDivTwo.innerHTML = `
  <p>${element2.name}</p>
  <img src="${element2.img}" class="img-eight"/>
  <p class="prezident-news">${element2.about}</p>
  <p class="date">${element2.time}/${element2.data}</p>
  `;
  allObjectTwo.appendChild(newDivTwo);
  });
}
renderCards2(allServer);
// search for cards
elForm1.addEventListener("submit", (e) => {
  e.preventDefault();
  const elSearch = elInput.value.trim();
  const allSearchTwo = new RegExp(elSearch, "gi");
  const FilterItem = allServer.filter(elemTwo => elemTwo.name.match(allSearchTwo));
  if (FilterItem.length > 0) {
    renderCards2(FilterItem);
  } else {
    alert("Нет новостей, которые вы искали ❌❌❌");
  }
  if(elInput.value == ""){
    alert("Qiymat kiriting")
  }
  elInput.value = ''
});
renderCards2(allServer);