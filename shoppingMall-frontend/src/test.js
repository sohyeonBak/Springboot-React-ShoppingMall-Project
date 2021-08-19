
export const initialState= {
  mainProducts : [
    {
      "id": 1,
      "productName": "aaa1",
      "color": [],
      "size": [],
      "stock": [],
      "Image" : [],
      "price" : 164000,
      "KindId" : [],
      "content" : '',
      "hit" : 1000
    }
  ],
  
  kind : [
    {
      "id" : 1,
      "name" : "top",
      "categoryName" : [
        {
          "id" : 1,
          "name" : "All"
        },
        {
          "id" : 2,
          "name" : "knit"
        },
        {
          "id" : 3,
          "name" : "dress"
        },
        {
          "id" : 4,
          "name" : "outer"
        }
      ] 
    },
    {
      "id" : 2,
      "name" : "bottom",
      "categoryName" : [
        {
          "id" : 1,
          "name" : "All"
        },
        {
          "id" : 2,
          "name" : "slacks"
        },
        {
          "id" : 3,
          "name" : "jean"
        },
        {
          "id" : 4,
          "name" : "shorts"
        }
      ] 
    },
    {
      "id" : 3,
      "name" : "accessory",
      "categoryName" : [
        {
          "id" : 1,
          "name" : "All"
        },
        {
          "id" : 2,
          "name" : "bag"
        },
        {
          "id" : 3,
          "name" : "shoes"
        },
        {
          "id" : 4,
          "name" : "jewellery"
        }
      ] 
    }
  ]
}


// "Review": [
//   {
//     "id" : 1,
//     "User" : {
//       "id" : 2,
//       "nickname" : "yeong123"
//     },
//     "Image" : [],
//     "star" : 4,
//     "createDate": "2021-07-24",
//   }
// ]