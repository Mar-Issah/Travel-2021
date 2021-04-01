//create an array of the countries
const countries = [
    {
        id: 1,
        name: "Ghana",
        img: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909316/samples/Ghanaian-culture-african-dance_kl8ip5.jpg",

        caption:"Ghanaian culture, dance",

        text:"Explore Ghana, the land of rich culture, heritage, warmth and rhythm. Discover where nature is still pure and warmth flows easily. Akwaaba! discover yourself."
    },

    {
        id: 2,
        name: "Barbados",
        img: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909458/samples/barbados_nlluct.webp",

         caption:"Beach in Barbados",

        text:"Sun, sea and surf are part of the real deal in Barbados, along with some delicious local rum. There are an estimated 1,800 rum shops on the island itself and the country is literally surrounded by perfect sandy shores and cool waters. So, spend your day relaxing at a beach or honing your skill with a kiteboard or on a surfboard and sailboat. The nightlife is also pretty fabulous so save some time and energy to venture out and take it all in."
    },
    {
        id: 3,
        name: "Russia",
        img: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909409/samples/russia_gkfmtn.jpg",

         caption:"Saint Basils Cathedral, Russia",

        text:"Rich in natural landscapes and enormous tracts of land, the country is home to the largest freshwater lake in the world. Rivers and forests encompassing amazing flora and fauna, awe-inspiring volcanoes, the icy tundra region and the sun-kissed beaches, colorful cultural heritage, remarkable historical monuments, and inimitable cities are what adorn this country and make Russia a beckoning land to explore. Adding to its charm, the old Russian cities of Vladimir, Sergiev Posad, Suzdal, Rostov, Kostroma and others make the jewels of Russia’s Golden Ring."
    },
    {
        id: 4,
        name: "Morocco",
        img: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909396/samples/Morocco-Ouarzazate-Kasbah_thgekj.webp",

         caption:"Ouarzazate Kasbal, Morocco",

        text:"After recently having Marrakesh crowned as Africa's first Capital of Culture this year, it's not surprising that this magical destination is starting to develop a bit of a cult following. This northern African country is bursting with picturesque landscapes, rich heritage and lively getaways such as surfing and yoga. It's also been unprecedented in becoming the continents first nation to launch high-speed trains, making domestic travel that much easier."
    },

     {
        id: 5,
        name: "Kenya",
         img: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909383/samples/kenya-giraffe_yleuol.jpg",
        
          caption:"Giraffe in Kenya",

        text:"Kenya is the destination for you if you seek an adventure that is soaked in an ancient colorful culture and peppered with rare natural sights. Famed as the world center for animal safaris and active adventure holidays, Kenya is an absolute must-visit for the wildlife enthusiast"
    },
     
     {
        id: 6,
        name: "Japan",
         img: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909373/samples/Japan_bhwugz.jpg",
        
          caption:"Arakura Sengen shrine, Japan",

        text:"Once believed to be the first country to see the sun appear in the east every morning, the land of the rising sun should be one of the first places you consider for your 2021 escape. Whether you visit in April to marvel at the cherry blossoms that spring up all over the country, July to watch the postponed Olympics, or the winter months to search for the famous snow monkeys, Japan is sure to amaze."
    },

     {
        id: 7,
        name: "India",
         img: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909346/samples/India_wkgter.webp",
        
          caption:"Mahabodhi Temple, India",

        text:"Situated in South Asia, India is a country with deep cultural roots and a rich heritage. A great country for budget travel, India is popular for its forts and palaces. You can visit India to find yourself through yoga, to lose yourself in the mountains of Himalayas, to be mesmerised by the ancient temples. The crowded bazaars, blaring traffic, filmy music, the colour, the noise and not to forget, the chaos will leave you all amazed and overwhelmed."
    },
     
      {
        id: 8,
        name: "Greece",
          img: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909335/samples/Greece_kabnkg.jpg",
         caption:"Beautiful landscape in Greece",

        text:"It wouldn’t be very Greek if you didn’t try some glorious island hopping. With over 50 islands to choose from, rent a sailboat or catch a ride on a ferry to explore islands like the Cyclades Islands or Santorini and Mykonos.If the idea of island hopping isn’t appealing, you could opt to soak in the arts and culture with a trip to ancient historical sites, like Delphi (once considered to be the centre of the world), Corinth or Cape Sounio"
    },
      
    {
        id: 9,
        name: "Cuba",
        img: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909273/samples/cuba_n6hjlu.webp",

         caption:"Street in Cuba",

        text:"•	Cuba has a magical, lost-in-time appeal that speaks to the discerning traveller. Be it the sultry salsa music, colonial towns, history of revolution or vintage cars, there’s an enticing attraction to visit this unique country.The beaches are tranquil (and uncrowded), and there’s Latin-inspired music everywhere! You could quite literally find a place to sit down and be entertained for your whole trip. "
    },
    {
        id: 10,
        name: "Ethiopia",
        img: "https://res.cloudinary.com/dytnpjxrd/image/upload/v1605909305/samples/ethiopia_sugvmk.jpg",

         caption:"Gondar Fasiledes Castle, Ethiopia",

        text:"Ethiopia has astonishing landscapes, ranging from the flat-topped mountains of the north to the otherworldly multicoloured salt flats and lava lake of the Erta Ale volcano in the Danakil Depression; rich flora and fauna(this is the country where residents and hyenas live in peace); and ancient cultures, including the the city of Axum (one of the oldest continuously inhabited places in Africa), the rock-hewn churches of Lalibela and Africa’s oldest mosque, Nejashi."
    },


];

//select /retrieve all elements and store in variable

const img = document.getElementById("country-img");
const caption = document.getElementById("figcaption");
const name = document.getElementById("country-name");
const info = document.getElementById("info");

//retrieve elements using query selector this is to enable perform sertain action in this case the textContent not innerhmtl
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".surprise-me");

let currentItem = 2;   //default item to display 

//show initial item once window loads
window.addEventListener("DOMContentLoaded", () => {
    showCountry();
});
 

function showCountry() {
    const item = countries[ currentItem ];      //simplify by storing in variable //arrow fxn

    // element has already bn retrieve so set the content to display
    img.src = item.img;
    caption.textContent = item.caption;
    name.textContent = item.name;
    info.textContent = item.text;
}

//show next person on button click implement arrow fxn
nextBtn.addEventListener("click", () => {
    currentItem++;
    //currentItem is just a variable so it will keep increasing and if it exhaust the array length it will throw an error, so if its get to 10 then..set to 0 to restart
    if (currentItem > countries.length - 1) {
        currentItem = 0;
    }
    showCountry();
});

prevBtn.addEventListener("click", () => {
    currentItem--;
    //as you keep decreasing it will get to -1 so, if it less than 0 then set it to the full length of the array and start decreasing

    if (currentItem < 0) {
        currentItem = countries.length - 1;
    }
    showCountry();
});

// nextBtn.addEventListener("click", () => {
//     currentItem++;
//     if (currentItem > countries.length - 1) {
//         currentItem = 0;
//     }
//     showCountry();
// });

//use a random number since its a surprise
randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * countries.length);
    // console.log(currentItem);
    showCountry();
});



