const products = [
    
    {
        id: 1,
        name: "Vani Plunge Midi Dress",
        price: 2600,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/pzsku/Z84B24C0D971B17B95B44Z/45/_/1664175675/0cb17767-1989-4b99-8525-aa31b3a0e5e4.jpg?format=avif&width=800",
        category: "Women fashion"
    },  {
        id: 2,
        name: "Textured Puff Sleeve Dress",
        price: 2300,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/pzsku/ZC26C4B4E0AE23A5E2707Z/45/_/1682546158/2f1f91a6-6a91-43b6-8f35-63086534149d.jpg?format=avif&width=800",
        category: "Women fashion"
    }, {
        id: 3,
        name: "Woven Dress Cream Multicolour",
        price: 2500,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1641554944/N51800246V_1.jpg?format=avif&width=800",
        category: "Women fashion"
    }, {
        id: 4,
        name: "Check Print Shirt Pale Blue",
        price: 1600,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1630565486/N46541444V_1.jpg?format=avif&width=800",
        category: "Men fashion"
    }, {
        id: 5,
        name: "Logo Zip Through Hoodie",
        price: 1900,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/pzsku/Z4AB9A9C4879A6722D9C6Z/45/_/1677407305/02777c99-8128-4126-b079-cf658835c873.jpg?format=avif&width=800",
        category: "Men fashion"
    }, {
        id: 6,
        name: "Hybrid Hoodie For Men",
        price: 2100,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/pzsku/Z8F82621EAAA4236117D3Z/45/_/1679500682/d9d1789f-a06c-4eca-8991-a63430c45a24.jpg?format=avif&width=800",
        category: "Men fashion"
    }, {
        id: 7,
        name: "Boys 3-Stripes T-Shirt Black&White",
        price: 1200,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1639392373/N31503259V_1.jpg?format=avif&width=800",
        category: "Kids fashion"
    }, {
        id: 8,
        name: "Boys adidas T-Shirt Black&White",
        price: 1500,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1651774354/N31503250V_1.jpg?format=avif&width=800",
        category: "Kids fashion"
    }, {
        id: 9,
        name: "Badge Of Sports T-Shirt",
        price: 1500,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1618218616/N46245891V_1.jpg?format=avif&width=800",
        category: "Kids fashion"
    }, {
        id: 10,
        name: "Merage Running Shoes",
        price: 2500,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/pzsku/Z6C4E28851318D918BBD5Z/45/_/1668590549/5c5aed93-ed46-4628-9023-a9f53e4f8b99.jpg?format=avif&width=800",
        category: "shoes",
        description: "Breathable mesh upper Adjustable lace closure for a customized fit Slightly cushioned footbed provides comfort Patterned outsole provides traction and grip adidas signature branding detail"
    }, {
        id: 11,
        name: "iPhone 13 Pro Max Clear Case",
        price: 500,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1652440718/N50727766A_1.jpg?format=avif&width=800",
        category: "phone case and cover",
        description: "Compatible with wireless charging, no need to remove the case before charging.Ergonomically designed for easy grip.Premium TPU material, effectively delays the yellowing of the iPhone 13 Pro Max 6.7inches."
    },{
        id: 12,
        name: "Anti-Scratch Case For iPhone 13",
        price: 550,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1631624486/N50858172A_1.jpg?format=avif&width=800",
        category: "phone case and cover",
        description: "Scratch Resistant: Premium materials provide long-lasting protection from scratches and scrapes."
    },{
        id: 13,
        name: "Protective Case For iPhone 14 Pro",
        price: 450,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/pzsku/Z2D3AE3D24954404AF9EBZ/45/_/1663075654/7c2c0d6a-c00e-40e9-81ab-ec5cd2d4d989.jpg?format=avif&width=800",
        category: "phone case and cover",
        description: "The transparent shell is made of high-grade TPU raw material, which can delay the yellowing time and keep the transparent state for a long time. Also, you can stick all kinds of funny stickers at will."
    },{
        id: 14,
        name: "Wavebuds S8 Smart Black",
        price: 1550,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1679214673/N53393027A_1.jpg?format=avif&width=800",
        category: "Airpod",
        description: "IPX5-rated true wireless earphones. Sweat and rain resistant for an active lifestyle on-the-go Built-in Voice Assistant supporting both Google and Siri for a hands-free experience"
    },{
        id: 15,
        name: "AirPods (3rd generation) white",
        price: 1650,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1667497500/N51445769A_1.jpg?format=avif&width=800",
        category: "Airpod",
        description: "With plenty of talk and listen time voice activated siri access and an available wireless charging case AirPods deliver an incredible wireless headphone experience"
    },{
        id: 16,
        name: "AirPods Pro 2 with Leather Case",
        price: 2000,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/pzsku/Z0D9C8EEAE94903B62630Z/45/_/1666752474/223f6809-de2e-4516-ac56-5ea791753231.jpg?format=avif&width=800",
        category: "Airpod",
        description: "Designed with Details & Sophisticatedly optimized premium design offers perfect Grip to your hand, Durable Protection and a Premium look ",
    },{
        id: 17,
        name: "Leather Strap For Apple Watch",
        price: 1000,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1623688830/N19296562A_1.jpg?format=avif&width=800",
        category: "Smart watch band",
        description: "Curated with high-grade material to minimise wear and prevent skin irritations Innovative clasp closure offers a secure fit around the wrist Precisely designed to allow comfortable wrist movements"
    },{
        id: 18,
        name: "Magnetic Strap For Apple Watch",
        price: 1200,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/v1537270359/N16969735A_1.jpg?format=avif&width=800",
        category: "Smart watch band",
        description: "Curated with high-grade material to minimise wear and prevent skin irritations Innovative clasp closure offers a secure fit around the wrist Precisely designed to allow comfortable wrist movements"
    },{
        id: 19,
        name: "Black Strap For Apple Watch",
        price: 1250,
        quantity: 1,
        imgurl: "https://f.nooncdn.com/p/pzsku/Z2B8D6DADD91A93FC877DZ/45/_/1650135528/c10752a1-4aa3-485e-bab5-647e86681378.jpg?format=avif&width=800",
        category: "Smart watch band",
        description: "Curated with high-grade material to minimise wear and prevent skin irritations Innovative clasp closure offers a secure fit around the wrist Precisely designed to allow comfortable wrist movements"
    },
]

export default products;