// Object containing Items
let productslist = [
  {
    id: 1,
    title: "Mens Premium T-Shirts ",
    price: 599,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "Men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 2,
    title: "Mens Cotton Jacket",
    price: 599,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "Men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 3,
    title: "Mens Casual Slim Fit",
    price: 599,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "Men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 4,
    title: "Women's Leather Biker Jacket",
    price: 599,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "Women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  },
  {
    id: 5,
    title: "Women Jacket",
    price: 599,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "Women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 6,
    title: "Women's Short Sleeve",
    price: 599,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  },
  {
    id: 7,
    title: "Women's Short Sleeve",
    price: 599,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "Women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
  },
  {
    id: 8,
    title: "Womens T Shirt Cotton",
    price: 599,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  },
  {
    id: 9,
    title: "Men T Shirt Cotton",
    price: 599,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Men's clothing",
    image:
      "https://www.mydesignation.com/wp-content/uploads/2020/02/golden-yellow-plain-tshirt-mydesignation.jpg",
  },
  {
    id: 10,
    title: "Men Denim Jeans",
    price: 599,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Momen's clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WpNYVu4y-aEMtFy1saoOa-DGVclBTTz0JR-wUANUHSNNP3seTI8aKuPJjj8nkPXeLew&usqp=CAU",
  },
  {
    id: 11,
    title: "Women Overhood Coat",
    price: 599,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Women's clothing",
    image: "https://m.media-amazon.com/images/I/61NGtyCS8sL._AC_UY1100_.jpg",
  },
  {
    id: 12,
    title: "Women Overhood Jacket",
    price: 599,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Women's clothing",
    image:
      "https://images-cdn.ubuy.co.in/635d6cd31c8da04be10d4823-felgay-womens-zip-up-long-hoodie-jacket.jpg",
  },
  {
    id: 13,
    title: "Men Fashion Shirt",
    price: 599,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Men's clothing",
    image: "https://m.media-amazon.com/images/I/61WIZbILqVL._AC_SX342_.jpg",
  },
  {
    id: 14,
    title: "Men Short Pants",
    price: 599,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Men's clothing",
    image: "https://m.media-amazon.com/images/I/6112D69JlOL._AC_UY1100_.jpg",
  },
  {
    id: 15,
    title: "Women Fancy Sweater",
    price: 599,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image:
      "https://marlameridith.com/wp-content/uploads/2019/01/grey-fair-isle.jpg",
  },
  {
    id: 16,
    title: "Women Fashionable Dress",
    price: 599,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Women's clothing",
    image: "https://m.media-amazon.com/images/I/61XDqERNiaL._AC_SX522_.jpg",
  },
];

// Extracting classes and id's
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const upperprocontind = document.querySelectorAll(
  ".upperproductcontainerindex"
);

// TO DSIPLAY THE HAMBURGER ICON INSTEAD OF NAVBAR ON SMALL SCREEN DEVICES

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// TO DISPLAY THE PRODUCTS IN INDEX PAGE IN UPPER PART

productslist.slice(0, 8).map((e) => {
  upperprocontind[0].innerHTML += `<div class="prod" onclick="window.location.href="sproduct.html";">
  <img src="${e.image}"alt="f1" />
  <div class="description">
  <span>${e.category}</span>
  <h5>${e.title}</h5>
  <div class="star">
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  </div>
  <h4>INR ${e.price}</h4>
  </div>
  <a href="#"
  ><svg
  class="cart"
  xmlns="http://www.w3.org/2000/svg"
  height="1em"
  viewBox="0 0 576 512">
  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
  <style>
  svg {
    fill: #505258;
  }
  </style>
  <path
  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg
  ></svg></a>
  </div>`;
});
// TO DISPLAY THE PRODUCTS IN INDEX PAGE IN Lower PART

const lowerprocontind = document.querySelectorAll(
  ".lowerproductcontainerindex"
);
productslist.slice(8, 16).map((e) => {
  lowerprocontind[0].innerHTML += `<div class="prod" onclick="window.location.href='sproduct.html';">
  <img src="${e.image}"alt="f1" />
  <div class="description">
  <span>${e.category}</span>
  <h5>${e.title}</h5>
  <div class="star">
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  </div>
  <h4>INR ${e.price}</h4>
  </div>
  <a href="#"
  ><svg
  class="cart"
  xmlns="http://www.w3.org/2000/svg"
  height="1em"
  viewBox="0 0 576 512">
  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
  <style>
  svg {
    fill: #505258;
  }
  </style>
  <path
  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg
  ></svg></a>
  </div>`;
});

const singleprod = document.querySelectorAll(".prod");
for (let i = 0; i < 15; i++) {
  singleprod[i].addEventListener("click", () => {
    window.location.href = "sproduct.html";
  });
}
