const itemsData = 
// data.json
[
  {
    "id": 1,
    "name": "Pizza",
    "price": 10,
    "description": "A delicious pizza made with fresh ingredients.",
    // "imgUrl" : "../src/assets/burger.jpeg"
    "imgUrl" : require("../assets/pizza.jpeg"),
  },
  {
    "id": 2,
    "name": "Burger",
    "price": 12,
    "description": "A juicy burger made with fresh beef.",
    "imgUrl" : require("../assets/burger.jpeg")

  },
  {
    "id": 3,
    "name": "Salad",
    "price": 8,
    "description": "A healthy salad made with fresh vegetables.",
    "imgUrl" : require("../assets/IMG_salad.jpg")
  },
  {
    "id": 4,
    "name": "Sandwich",
    "price": 10,
    "description": "A healthy Sandwich made with fresh vegetables.",
    "imgUrl" : require("../assets/sandwich.jpeg")
  }
];

export default itemsData;