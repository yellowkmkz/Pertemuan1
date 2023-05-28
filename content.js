const contentData = [{
    "id": 1,
    "type": "Yogurt - Banana, 175 Gr",
    "price": "$1076.58",
    "image": "https://robohash.org/consequaturliberomollitia.png?size=50x50&set=set1"
  }, {
    "id": 2,
    "type": "Tart - Pecan Butter Squares",
    "price": "$1455.58",
    "image": "https://robohash.org/nostrumoccaecatidolore.png?size=50x50&set=set1"
  }, {
    "id": 3,
    "type": "Cheese - Parmesan Grated",
    "price": "$1178.01",
    "image": "https://robohash.org/laudantiumnumquamrerum.png?size=50x50&set=set1"
  }, {
    "id": 4,
    "type": "Dried Cranberries",
    "price": "$1117.70",
    "image": "https://robohash.org/abevenietsimilique.png?size=50x50&set=set1"
  }, {
    "id": 5,
    "type": "Fudge - Cream Fudge",
    "price": "$1306.56",
    "image": "https://robohash.org/dolorestemporaaspernatur.png?size=50x50&set=set1"
  }, {
    "id": 6,
    "type": "Water, Tap",
    "price": "$1062.03",
    "image": "https://robohash.org/nonexcepturitenetur.png?size=50x50&set=set1"
  }, {
    "id": 7,
    "type": "Wine - Guy Sage Touraine",
    "price": "$1244.02",
    "image": "https://robohash.org/optioautrerum.png?size=50x50&set=set1"
  }, {
    "id": 8,
    "type": "Hot Chocolate - Individual",
    "price": "$1425.37",
    "image": "https://robohash.org/hicnobisnulla.png?size=50x50&set=set1"
  }, {
    "id": 9,
    "type": "Nestea - Iced Tea",
    "price": "$1099.17",
    "image": "https://robohash.org/suntquosofficiis.png?size=50x50&set=set1"
  }, {
    "id": 10,
    "type": "Table Cloth 54x72 Colour",
    "price": "$1063.65",
    "image": "https://robohash.org/accusantiumharumquam.png?size=50x50&set=set1"
  }, {
    "id": 11,
    "type": "Quiche Assorted",
    "price": "$1471.62",
    "image": "https://robohash.org/ullamrecusandaererum.png?size=50x50&set=set1"
  }, {
    "id": 12,
    "type": "Nantuket Peach Orange",
    "price": "$1124.34",
    "image": "https://robohash.org/optioestperspiciatis.png?size=50x50&set=set1"
  }, {
    "id": 13,
    "type": "Crackers Cheez It",
    "price": "$1143.04",
    "image": "https://robohash.org/fugitveritatisea.png?size=50x50&set=set1"
  }, {
    "id": 14,
    "type": "Wine - Bouchard La Vignee Pinot",
    "price": "$1178.05",
    "image": "https://robohash.org/magniofficiaconsequatur.png?size=50x50&set=set1"
  }, {
    "id": 15,
    "type": "Basil - Thai",
    "price": "$1031.07",
    "image": "https://robohash.org/doloremnonaliquid.png?size=50x50&set=set1"
  }, {
    "id": 16,
    "type": "Capon - Breast, Wing On",
    "price": "$1056.88",
    "image": "https://robohash.org/repellatassumendaut.png?size=50x50&set=set1"
  }, {
    "id": 17,
    "type": "Loquat",
    "price": "$1496.98",
    "image": "https://robohash.org/rerumaliquidfugit.png?size=50x50&set=set1"
  }, {
    "id": 18,
    "type": "Water, Tap",
    "price": "$1147.62",
    "image": "https://robohash.org/omnisofficiased.png?size=50x50&set=set1"
  }, {
    "id": 19,
    "type": "Oil - Food, Lacquer Spray",
    "price": "$1387.97",
    "image": "https://robohash.org/repudiandaevelaut.png?size=50x50&set=set1"
  }, {
    "id": 20,
    "type": "Cheese - Manchego, Spanish",
    "price": "$1007.33",
    "image": "https://robohash.org/porroconsecteturconsequatur.png?size=50x50&set=set1"
  }]

  console.log(contentData)

  const table = document.querySelector('section#content table')

//   console.log(table)

for (let i = 0; i < contentData.length; i++) {
    table.innerHTML += `
    <tr>
        <td>${contentData[i].id}</td>
        <td>${contentData[i].type}</td>
        <td>${contentData[i].price}</td>
        <td>
            <img src="${contentData[i].image}" />
        </td>
        </tr>
        `
}