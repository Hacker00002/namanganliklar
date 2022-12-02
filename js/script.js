// modal-section-title
const elForm = document.querySelector('#form')
const elBg = document.querySelector('.bg')
const elBtn = document.querySelector('.logF')

elBtn.addEventListener('click', () =>{
    elForm.style.transform = "translateY(-0%)";
    elBg.style.display = 'block';
})

elBg.addEventListener('click', () =>{
    elForm.style.transform = "translateY(-250%)";
        elBg2.style.transform = "translateX(-250%)"
        elBg.style.display = 'none';
})

// object-section-title
const allObject = document.querySelector('.object')
const elInput1 = document.querySelector('.search-input')
const elInput2 = document.querySelector('.search-date')
const elInput3 = document.querySelector('.search-img')
const elInput4 = document.querySelector('.search-time')
const elButton = document.querySelector('#button')
const elBg2 = document.querySelector('.textBg')


function renderCards(cardsItems){
    allObject.innerHTML = ''

    cardsItems.forEach((element) => {
        
        const newDiv = document.createElement('div')

        newDiv.className ='prezident-img'

        newDiv.innerHTML = `
        <img src="${element.img}" class="img-eight">
        <p class="prezident-news">${element.about}</p>
        <p class="date">${element.time}/${element.date}</p>
        <a href="#" class="bgB" data-id=${element.id}>Delete</a>
        `
        allObject.appendChild(newDiv)

    })
}
renderCards(arrCards)

allObject.addEventListener('click', function(e){
    const targetT = e.target;

    if(targetT.matches('.bgB')){
        const ifSet = targetT.dataset.id;
        const removedArr = arrCards.filter(function(targetT){
            if(targetT.id != Number(ifSet)){
                return targetT;
            }
        })
        arrCards = removedArr;
        renderCards(removedArr)
    }
})

elForm.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const cardsProduct = {
        img: `${elInput3.value}`,
        about: `${elInput1.value}`,
        date: `${elInput2.value}`,
        time: `${elInput4.value}`
    }



    arrCards.push(cardsProduct)
    renderCards(arrCards)

    if(elInput1.value == '' ||elInput2.value == '' ||elInput3.value == ''){
        elBg2.style.transform = "translateX(0%)"
        elBg2.style.backgroundColor = 'red'
        elBg2.style.color = 'white'
        elBg2.textContent = 'Заполните информацию для размещения в базе данных'
    }else{
        elBg2.style.transform = "translateX(0%)"
    }

    elInput1.value = ''
    elInput2.value = ''
    elInput3.value = ''
    elInput4.value = ''
})