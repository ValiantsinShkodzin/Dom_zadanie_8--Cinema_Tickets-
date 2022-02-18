
myCard = [{
    poster: "Poster.png",
    type: "BlueRay.png",
    sale:"discont.png",
    title1:"Тайная жизнь",
    title2:"домашних животных 2",
    price: 50,
    sale_percent: 10,
    currency:"руб.",
    rating: 4,
    button:"button.png",
    promotion: true,
},
{
    poster: "toy4.jpg",
    type: NaN,
    sale:"discont.png",
    title1:"История игрушек 4",
    title2:"Приключения Вилкинса",
    price: 60,
    sale_percent: 10,
    currency:"руб.",
    rating: 4.5,
    button:"button.png",
    promotion: false,
},
{
    poster: "ferd.jpg",
    type: "BlueRay.png",
    sale:"discont.png",
    title1:"Фердинанд",
    title2:"Побег из коровника",
    price: 40,
    sale_percent: 10,
    currency:"руб.",
    rating: 3.5,
    button:"button.png",
    promotion: true,
}];



let s = "";
for (i=0; i<myCard.length; i++){


// Формат полной стоимости

let fullPrice = `${myCard[i].price},00 ${myCard[i].currency}`;  //50,00 руб

console.log(fullPrice);

let salePrice = `${Math.round(myCard[i].price-myCard[i].price*(myCard[i].sale_percent/100))},00 ${myCard[i].currency}`; // -10%

console.log(salePrice);

//  Вывод акции
let op = 0;
if (myCard[i].promotion) {
    myDivPrice = `
    <div>${salePrice}</div>
    <div>${myCard[i].price},00 ${myCard[i].currency}</div>
    `;
    op = 1;
    }
else myDivPrice = `<div>${myCard[i].price},00 ${myCard[i].currency}</div>`;


// Расчет рейтинга
let rank = "";
    if (myCard[i].rating < 1 || myCard[i].rating > 5) {
        rank = "star_border star_border star_border star_border star_border"; 
    }else if (myCard[i].rating == 0.5) {
        rank = "star_half star_border star_border star_border star_border";
    }else if (myCard[i].rating == 1) {
        rank = "star star_border star_border star_border star_border";
    }else if (myCard[i].rating == 1.5) {
        rank = "star star_half star_border star_border star_border";
    }else if (myCard[i].rating == 2) {
        rank = "star star star_border star_border star_border";
    }else if (myCard[i].rating == 2.5) {
        rank = "star star star_half star_border star_border";
    }else if (myCard[i].rating == 3) {
        rank = "star star star star_border star_border";
    }else if (myCard[i].rating == 3.5) {
        rank = "star star star star_half star_border";
    }else if (myCard[i].rating == 4) {
        rank = "star star star star star_border";
    }else if (myCard[i].rating == 4.5) {
        rank = "star star star star star_half ";
    }else if (myCard[i].rating == 5) {
        rank = "star star star star star";
    };

    console.log(rank);



        s += `
            <div class="card">
                <div class="poster">
                    <img src="images/${myCard[i].poster}" alt="">
                    <img style="opacity:${op}"src="images/${myCard[i].sale}" alt="">
                    <img src="images/${myCard[i].type}" alt="">
                </div>
                <div class="title">
                    <div>${myCard[i].title1}</div>
                    <div>${myCard[i].title2}</div>
                
                </div>
                <div class="price">
                    ${myDivPrice}
                </div>
                <div class="rating">
                    <span class="material-icons">
                    ${rank}
                    </span>
                </div>
                <div class="order">
                    <img src="images/${myCard[i].button}" alt="">
                </div>
            </div>`

    cards.innerHTML = s;
}