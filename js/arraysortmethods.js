// // let arr=[204,1113,17,29,101,342,33,14];

// // let arr=[1,22,44,5,12,13,22]
// // // arr.sort((a,b)=>a-b);
// // // console.log(arr)

// // // arr.reverse()

// // arr.toSorted((a,b)=>a-b)

// // console.log(arr)



// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ]
  
//   cars.sort((a,b)=>a.type.length-b.type.length);


//   console.log(cars)


const products = [
    {
      id: 1,
      name: "Smartphone",
      description: "A high-end smartphone with a 6.5-inch display, 128GB storage, and a 48MP camera.",
      price: 699.99,
      category: "Electronics",
      inStock: true,
      ratings: 4.5,
      images: ["img/smartphone1.png", "img/smartphone2.png"]
    },
    {
      id: 2,
      name: "Laptop",
      description: "A powerful laptop with 16GB RAM, 512GB SSD, and a 15.6-inch display.",
      price: 1199.99,
      category: "Computers",
      inStock: false,
      ratings: 4.7,
      images: ["img/laptop1.png", "img/laptop2.png"]
    },
    {
      id: 3,
      name: "Wireless Headphones",
      description: "Noise-canceling wireless headphones with a 20-hour battery life and Bluetooth 5.0.",
      price: 199.99,
      category: "Accessories",
      inStock: true,
      ratings: 4.3,
      images: ["img/headphones1.png", "img/headphones2.png"]
    },
    {
      id: 4,
      name: "Smartwatch",
      description: "A smartwatch with fitness tracking, heart rate monitoring, and GPS.",
      price: 149.99,
      category: "Wearables",
      inStock: true,
      ratings: 4.2,
      images: ["img/smartwatch1.png", "img/smartwatch2.png"]
    },
    {
      id: 5,
      name: "Gaming Console",
      description: "A next-gen gaming console with 4K resolution support and a powerful GPU.",
      price: 499.99,
      category: "Gaming",
      inStock: true,
      ratings: 4.8,
      images: ["img/console1.png", "img/console2.png"]
    }
  ];

 let x= products.sort((a,b)=>a.price-b.price).map((x)=>`${x.name} with ${x.price}`)  
  console.log(x)