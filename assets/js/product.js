let card = document.getElementById('card');
let preview = document.getElementById('preview')
let images = document.getElementById('images')
let thumbnails = document.getElementById('thumbnails')
let width;
let res = ``;
let buttonName = "";
let myButtonName = ""
let value;
let j = 0;
let itr = "";
let flag = 0;
let i = 0;
let key = -1
let final = ``
let mainImage = ``

let multi;
let products = {
  "results": [
    {
      "productID": `24321`,
      "productName": "Hugo Boss men's suit",
      "productPrice": 2500,
      "productPriceFormatted": "DKK 2.500,00",
      "inStock": true,
      "mainImage": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
      "productImg": [
        { "img": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main" },
        { "img": "https://picsum.photos/id/1041/150/150" },
        { "img": "https://picsum.photos/id/1043/150/150" },
        { "img": "https://picsum.photos/id/1044/150/150" },
        { "img": "https://picsum.photos/id/1045/150/150" },
      ],
      "href": "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
      "swatches": [
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },

      ]
    },
    {
      "productID": "24322",
      "productName": "Hugo Boss men's suit",
      "productPrice": 2500,
      "productPriceFormatted": "DKK 2.500,00",
      "inStock": true,
      "mainImage": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
      "productImg": [
        { "img": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main" },
        { "img": "https://picsum.photos/id/1041/150/150" },
        { "img": "https://picsum.photos/id/1043/150/150" },
        { "img": "https://picsum.photos/id/1044/150/150" },
        { "img": "https://picsum.photos/id/1045/150/150" },
      ],
      "href": "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
      "swatches": [
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        }, {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },

      ]
    },
    {
      "productID": "24323",
      "productName": "Hugo Boss men's suit",
      "productPrice": 2500,
      "productPriceFormatted": "DKK 2.500,00",
      "inStock": true,
      "mainImage": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
      "productImg": [
        { "img": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main" },
        { "img": "https://picsum.photos/id/1041/150/150" },
        { "img": "https://picsum.photos/id/1043/150/150" },
        { "img": "https://picsum.photos/id/1044/150/150" },
        { "img": "https://picsum.photos/id/1045/150/150" },
      ],
      "href": "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
      "swatches": [
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        }, {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },

      ]
    },
    {
      "productID": "24324",
      "productName": "Hugo Boss men's suit",
      "productPrice": 2500,
      "productPriceFormatted": "DKK 2.500,00",
      "inStock": true,
      "mainImage": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
      "productImg": [
        { "img": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main" },
        { "img": "https://picsum.photos/id/1041/150/150" },
        { "img": "https://picsum.photos/id/1043/150/150" },
        { "img": "https://picsum.photos/id/1044/150/150" },
        { "img": "https://picsum.photos/id/1045/150/150" },
      ],
      "href": "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
      "swatches": [
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        }, {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },

      ]
    },
    {
      "productID": "24325",
      "productName": "Hugo Boss men's suit",
      "productPrice": 2500,
      "productPriceFormatted": "DKK 2.500,00",
      "inStock": true,
      "mainImage": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
      "productImg": [
        { "img": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main" },
        { "img": "https://picsum.photos/id/1041/150/150" },
        { "img": "https://picsum.photos/id/1043/150/150" },
        { "img": "https://picsum.photos/id/1044/150/150" },
        { "img": "https://picsum.photos/id/1045/150/150" },
      ],
      "href": "/riley-heeled-buckle-boots/shoes-accessories/new-arrivals/572383?uniqueId=572383",
      "swatches": [
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },
        {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        }, {
          "swatchDefAttCode": "BLCK",
          "swatchName": "Black",
          "swatchAttrName": "color",
          "img": { "src": "https://akamai-scene7.garnethill.com/is/image/garnethill/48611_BLCK_SW?$SLI_MiniSwatch$" }
        },

      ]
    },
  ]
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
////console.log(id)
displayProduct(id)


async function displayProduct(id) {

  let res = '';
  let multiImage = ``;
  let len = products.results.length;
  for (let i = 0; i < len; i++) {
    if (products.results[i].productID == id) {
      let swatchRes = '';

      let imagesLen = products.results[i].productImg.length
      console.log(imagesLen)
      let swatchLen = products.results[i].swatches.length;
      if (products.results[i].swatches.length <= 5) {
        for (let j = 0; j < 5; j++) {
          swatchRes += `
            <div class="small-items">
              <img src=${products.results[i].swatches[j].img.src}>
            </div>
          `;
        }
        res += `
          <div class="card-items" id="cardItem${i}">
            <div class="small-items">
              <p>${products.results[i].productName}</p>
              <div class="swatches">
                ${swatchRes}
              </div>
              <div>
                <button class="hide" onclick="toggle(${i})"></button>
              </div>
              <p>${products.results[i].productPrice}$</p>
              <p>${products.results[i].productPriceFormatted}</p>
            </div>
            <div class="accordion ">

            <div class="container">
              <div class="accordion">
                <div class="accordion__item">
                  <a class="accordion__item__title" >
                   PRODUCTS DETAILS
                  </a>
                </div>
                <div class="accordion__item">
                  <a class="accordion__item__title" >
                   FREE SHIPPING IN THE CONTIGUOUS
                  </a>
                 
                </div>
                <div class="accordion__item">
                  <a class="accordion__item__title" >
                   FREE RETURNS WITHIN 10 DAYS
                  </a>

                </div>
                <div class="accordion__item">
                  <a class="accordion__item__title" >
                    QUALITY CERTIFICATIONS
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
        `;
      } else {
        for (let j = 0; j < 5; j++) {
          swatchRes += `
            <div class="small-items">
              <img src=${products.results[i].swatches[j].img.src}>
            </div>
          `;
        }
        res += `
          <div class="card-items" id="cardItem${i}">
            <div class="small-items">
              <p>${products.results[i].productName}</p>
              <div class="swatches">
                ${swatchRes}
              </div>
              <button onclick="toggle(${i})">More</button>
              <p>${products.results[i].productPrice}$</p>
              <p>${products.results[i].productPriceFormatted}</p>
            </div>
           
            <div class="quantity">
                <button class="minus-btn">-</button>
                <input type="text" class="quantity-input" value="1">
                <button class="plus-btn">+</button>
                <button class="cart-btn">Add to cart</button>
                 </div>
                 <div class="container">
                 <div class="accordion">
                   <div class="accordion__item">
                     <a class="accordion__item__title" >
                      PRODUCTS DETAILS
                     </a>
                   </div>
                   <div class="accordion__item">
                     <a class="accordion__item__title" >
                      FREE SHIPPING IN THE CONTIGUOUS
                     </a>
                    
                   </div>
                   <div class="accordion__item">
                     <a class="accordion__item__title" >
                      FREE RETURNS WITHIN 10 DAYS
                     </a>
   
                   </div>
                   <div class="accordion__item">
                     <a class="accordion__item__title" >
                       QUALITY CERTIFICATIONS
                     </a>
                   </div>
                 </div>
               </div>
        `;
      }
      for (let k = 0; k < imagesLen; k++) {

        multiImage += `
        
        <img  onclick="preview.src=img${k}.src" name="img${k}" src="${products.results[i].productImg[k].img}" />
        `

      }
    }

  }
  mainImage += `
  <img name="preview" src=${products.results[i].mainImage} />
  `
  //console.log(mainImage)
  card.innerHTML = res
  //console.log(images)
  images.innerHTML = mainImage
  thumbnails.innerHTML = multiImage
}
function toggle(key) {
  const cardItem = document.getElementById(`cardItem${key}`);
  const button = cardItem.querySelector('button');
  const swatchesContainer = cardItem.querySelector('.swatches');
  const product = products.results[key]
  if (products.results[key].swatches.length <= 5) {
    button.classList.add('hide');

  }
  if (button.innerText === 'More') {
    let swatchRes = '';


    for (let j = 0; j < product.swatches.length; j++) {
      const imgSrc = product.swatches[j].img.src;
      swatchRes += `
            <div class="small-items">
              <img src="${imgSrc}">
            </div>
          `;
    }


    swatchesContainer.innerHTML = swatchRes;
    button.innerHTML = 'Less';
  } else {

    let swatchRes = '';
    for (let j = 0; j < 5; j++) {
      const imgSrc = product.swatches[j].img.src;
      swatchRes += `
            <div class="small-items">
              <img src="${imgSrc}">
            </div>
          `;
    }
    swatchesContainer.innerHTML = swatchRes;
    button.innerHTML = 'More';
  }
}
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const quantityInput = document.querySelector(".quantity-input");

minusBtn.addEventListener("click", function() {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

plusBtn.addEventListener("click", function() {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});
