const allObjectTwo = document.querySelectorAll(".object2");

function renderCards2(cardsItems2) {
  cardsItems2.forEach((element2) => {
    // allObjectTwo.innerHTML = "";
    const newDivTwo = document.createElement("div");

    newDivTwo.className = "all5";

    newDivTwo.innerHTML = `
    <img src="${element2.img}" />
    <p class="prezident-news">${element2.about}</p>
    <p class="date">${element2.time}/${element2.data}</p>
    `;
    allObjectTwo.appendChild(newDivTwo);
  });
}
renderCards2(allServer);
