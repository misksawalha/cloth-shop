
let card = document.getElementById('card');

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
let id;
let products = {
  "results": [
    {
      "productID": `24321`,
      "productName": "Hugo Boss men's suit",
      "productPrice": 2500,
      "productPriceFormatted": "DKK 2.500,00",
      "inStock": true,
      "productImg": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
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
      "productImg": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
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
      "productImg": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
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
      "productImg": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
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
      "productImg": "https://akamai-scene7.garnethill.com/is/image/garnethill/49187_SADD?&defaultImage=49187_main",
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
displayData()
$(window).resize(function () {
  width = window.innerWidth
  //  console.log('window was resized');
  displayData();
  // //console.log(window.innerWidth);
});
function displayData() {

  let res = '';
  let len = products.results.length;
  for (let i = 0; i < len; i++) {
    id = products.results[i].productID
   // console.log(id)
    let swatchRes = '';
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
                <div class="card-items"  id="cardItem${i}">
                  <img class="image" onclick="showDetails(${id})"  src=${products.results[i].productImg}>
                  <div class="small-items">
                    <p>${products.results[i].productName}</p>
                    <div class="swatches">
                      ${swatchRes}
                    </div>
                    <div>
                    <button  class="hide" onclick="toggle(${i})"> </button>
                    </div>
                    
                    <p>${products.results[i].productPrice}$</p>
                    <p>${products.results[i].productPriceFormatted}</p>
                  </div>
                </div>
              `;
    }
    else {
      for (let j = 0; j < 5; j++) {
        swatchRes += `
                  <div class="small-items">
                    <img src=${products.results[i].swatches[j].img.src}>
                  </div>
                `;
      }
      res += `
                <div class="card-items"  id="cardItem${i}">
                  <img class="image" onclick="showDetails(${id})" src=${products.results[i].productImg}>
                  <div class="small-items">
                    <p>${products.results[i].productName}</p>
                    <div class="swatches">
                      ${swatchRes}
                    </div>
                    <button  onclick="toggle(${i})">More</button>
                    <p>${products.results[i].productPrice}$</p>
                    <p>${products.results[i].productPriceFormatted}</p>
                 
                  </div>
                </div>
              `;
    }
 card.innerHTML = res;
    
  }
  
  // const scriptSrc = document.currentScript.src;
  //   const currentPageName = window.location.pathname.split('/').pop();
  //   if(currentPageName=="index.html")
  //   {
  //     card.innerHTML = res;
  //   }
  //   else{
      
  //   const scriptSrc = document.currentScript.src;
  //   const currentPageName = window.location.pathname.split('/').pop();
  //   displayProducts(id)
  //   //displayProduct(id)
  
  //  }
 
}

function toggle(key) {
  const cardItem = document.getElementById(`cardItem${key}`);
  const button = cardItem.querySelector('button');
  const swatchesContainer = cardItem.querySelector('.swatches');
  const product = products.results[key]
  console.log(products.results[key].swatches.length)
  if (products.results[key].swatches.length <= 5) {
    button.classList.add('hide');
    //  button.setAttribute('hide')
  }
  if (button.innerText === 'More') {
    ; // get the correct product
    let swatchRes = '';

    // generate HTML for all swatches of the product
    for (let j = 0; j < product.swatches.length; j++) {
      const imgSrc = product.swatches[j].img.src;
      swatchRes += `
          <div class="small-items">
            <img src="${imgSrc}">
          </div>
        `;
    }

    // update swatches with generated HTML and change button text
    swatchesContainer.innerHTML = swatchRes;
    button.innerHTML = 'Less';
  } else {
    // reset swatches to show only 5 swatches and change button text
    //   const product = products.results[key];
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

function showDetails(item) {
  console.log("item"+item)
  // Navigate to another HTML page using window.location.href
  window.location.href = "./product.html?id=" + item;
  const urlParams = new URLSearchParams(window.location.search);
  // const id = urlParams.get("id");
  // console.log(id)
  // displayProducts(id)
}

// async function displayProducts(id){
  
//   // Display the item details using JavaScript
//   console.log(id)
//   let res = '';
//   let len = products.results.length;
//   for (let i = 0; i < len; i++) {
//     if (products.results[i].productID == id) {
//        console.log("products.results[i].productID "+products.results[i].productID)
//        console.log("id "+id)
//       let swatchRes = '';
//       let swatchLen = products.results[i].swatches.length;
//       if (products.results[i].swatches.length <= 5) {
//         for (let j = 0; j < 5; j++) {
//           swatchRes += `
//                     <div class="small-items">
//                       <img src=${products.results[i].swatches[j].img.src}>
//                     </div>
//                   `;
//         }
//         res += `
//                   <div class="card-items"  id="cardItem${i}">
//                     <img class="image" onclick="displayProduct(${id})"  src=${products.results[i].productImg}>
//                     <div class="small-items">
//                       <p>${products.results[i].productName}</p>
//                       <div class="swatches">
//                         ${swatchRes}
//                       </div>
//                       <div>
//                       <button  class="hide" onclick="toggle(${i})"> </button>
//                       </div>
                      
//                       <p>${products.results[i].productPrice}$</p>
//                       <p>${products.results[i].productPriceFormatted}</p>
//                     </div>
//                   </div>
//                 `;
//       }
//       else {
//         for (let j = 0; j < 5; j++) {
//           swatchRes += `
//                     <div class="small-items">
//                       <img src=${products.results[i].swatches[j].img.src}>
//                     </div>
//                   `;
//         }
//         res += `
//                   <div class="card-items"  id="cardItem${i}">
//                     <img class="image" onclick="displayProduct(${id})" src=${products.results[i].productImg}>
//                     <div class="small-items">
//                       <p>${products.results[i].productName}</p>
//                       <div class="swatches">
//                         ${swatchRes}
//                       </div>
//                       <button  onclick="toggle(${i})">More</button>
//                       <p>${products.results[i].productPrice}$</p>
//                       <p>${products.results[i].productPriceFormatted}</p>
                   
//                     </div>
//                   </div>
//                 `;
//       }
//     }
//   }
//   card.innerHTML = res;
// }