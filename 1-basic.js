const menu = [
  {
    id: 1,
    title: "Мекици",
    category: "појадок",
    price: 80,
    img: "./images/item-1.jpeg",
    desc: `Омилен појадок за секој што ќе ги проба! Пржено тесто и доаѓа со следниве додатоци: џем, сирење и шеќер во прав. `,
  },
  {
    id: 2,
    title: "Тавче Гравче",
    category: "ручек",
    price: 150,
    img: "./images/item-2.jpeg",
    desc: `Ова традиционално македонско јадење се приготувава со компири и модри патлиџани и мелено месо. `,
  },
  {
    id: 3,
    title: "Мусака",
    category: "ручек",
    price: 150,
    img: "./images/item-3.jpeg",
    desc: `Ова традиционално македонско јадење се приготувава со компири и модри патлиџани и мелено месо.`,
  },
  {
    id: 4,
    title: "Ајвар",
    category: "појадок",
    price: 100,
    img: "./images/item-4.jpeg",
    desc: `Домашен ајвар направен од црвени пиперки, модри патлиџани и масло. Во прилог доаѓа селски леб од фурна. `,
  },
  {
    id: 5,
    title: "полнети пиперки",
    category: "ручек",
    price: 170,
    img: "./images/item-5.jpeg",
    desc: `Полнети пиперки со мелено месо и ориз е едно од омилените традиционални јадења на нашите простори.`,
  },
  {
    id: 6,
    title: "Шопска Салата",
    category: "салати",
    price: 110,
    img: "./images/item-6.jpeg",
    desc: `Оваа салата се состои од свежи домати, краставици и овчо сирење  `,
  },
  {
    id: 7,
    title: "Зелник со сирење ",
    category: "појадок",
    price: 80,
    img: "./images/item-7.jpeg",
    desc: `Се состои од тенки слоеви на кори, полнети со сирење.  Го послужуваме топол со јогурт.`,
  },
  {
    id: 8,
    title: "Сарма",
    category: "ручек",
    price: 200,
    img: "./images/item-8.jpeg",
    desc: `Мелено месо и ориз замотано во лиистови од кисела зелка. Иако турска по потекло сармата е едно од најчестите јадења на македонската трпеза.  `,
  },
  {
    id: 9,
    title: "Баклава",
    category: "десерт",
    price: 70,
    img: "./images/item-9.jpeg",
    desc: `Десерт направен од тенки кори исполнет со сецкани бадеми и 'фстаци, потопен со шербет.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
