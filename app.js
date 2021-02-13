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
    price: 100,
    img: "./images/item-2.jpeg",
    desc: `Традиционален македонски специјалитет.Бел грав подготвен во земјено тавче сервирн со феферонка.`,
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
    title: "Ајвар ",
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
    desc: `Полнети пиперки со мелено месо и ориз е едно од омилените традиционални јадења на нашите простори. `,
  },
  {
    id: 6,
    title: "Палачинки",
    category: "десерт",
    price: 70 ,
    img: "./images/item-6.jpeg",
    desc: `Палачинките иако по потекло не се македонски тие се најчест десерт во нашава земја. Можни додатоци:џем, мед и ореви и нутела.`,
  },
  {
    id: 7,
    title: "Зелник со сирење",
    category: "појадок",
    price: 80,
    img: "./images/item-7.jpeg",
    desc: `Се состои од тенки слоеви на кори, полнети со сирење.  Го послужуваме топол со јогурт. `,
  },
  {
    id: 8,
    title: "Сарма",
    category: "ручек",
    price: 200,
    img: "./images/item-8.jpeg",
    desc: `Мелено месо и ориз замотано во лиистови од кисела зелка. Иако турска по потекло сармата е едно од најчестите јадења на македонската трпеза. `,
  },
  {
    id: 9,
    title: "Баклава",
    category: "десерт",
    price: 70,
    img: "./images/item-9.jpeg",
    desc: `Десерт направен од тенки кори исполнет со сецкани бадеми и 'фстаци, потопен со шербет.`,
  },
  {
    id: 10,
    title: "Шопска Салата",
    category: "салати",
    price: 110,
    img: "./images/item-10.jpeg",
    desc: `Оваа салата се состои од свежи домати, краставици и овчо сирење `,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price} МКД</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["Сè"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "Сè") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
