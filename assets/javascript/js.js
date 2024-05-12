// link til scroll til toppen
function scrollToTop() {
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    const productNames = [
        //1
        "cohesive-tshirt-white",
        //2
        "magazine-tshirt-black",
        //3
        "japan-06-tshirt-white",

        //4
        "sun-tshirt-black",

        //5
        "padlock-tshirt-black",
        //6
        "together-tshirt-white",
        //7
        "small-embroidered-sun-hoodie-brown",
        //8
        "relaxed-sun-jogger-shorts-brown",
        //9
        "mick-fanning-hoodie-green",
        //10
        "relaxed-skate-pant-blue",
        //11
        "adwysd-core-hoodie-black",
        //12
        "reversible-no-cuff-skull-beanie-forest-green",
        //13
        "flight-zip-up-hoodie-black",
        //14
        "big-adwysd-court-short-royal-blue",
        //15
        "rel-xed-royal-blue-jogger",
        //16
        "flight-open-cuff-jogger-black",
        //17
        "royal-blue-sun-hoodie",
        //18
        "rel-xed-royal-blue-jogger",
        //19
        "sun-sock-black",
        //20
        "mac-zip-up-hoodie-black",
        //21
        "nylon-always-up-cap-black",
        //22
        "nylon-5-panel-sun-cap-purple",
        //23
        "mick-fanning-hoodie-black",
        //24
        "education-polo-shirt-purple-pink",
        //25
        "sun-court-short-brown-black",
        //26
        "sun-court-short-navy-grey",
        //27
        "star-mesh-football-jersey-blue-navy",
        //28
        "hidden-placket-shirt-star-stripes",
        //29
        "embossed-sun-belt-purple",
        //30
        "embossed-sun-belt-brown",
        //31
        "ethan-knitted-sweater-purple",
        //32
        "adwysd-cohesive-sock-green-white",
        //33
        "clear-blue-case",
        //34
        "clear-yellow-case",
        //35
        "education-polo-shirt-brown-stripe",
        //36
        "reusable-ripstop-bag-cohesive-plaid",


    ];
    const productPrices = [
        //1
        "310.00 kr",
        //1
        "310.00 kr",
        //2
        "310.00 kr",
        //3
        "310.00 kr",
        //4
        "310.00 kr",
        //5
        "310.00 kr",
        //6
        "885,00 kr",
        //7
        "620,00 kr",
        //8
        "885,00 kr",
        //9
        "708,00 kr",
        //10
        "885,00 kr",
        //11
        "266,00 kr",
        //12
        "885,00 kr",
        //13
        "620,00 kr",
        //14
        "620,00 kr",
        //15
        "885,00 kr",
        //16
        "885,00 kr",
        //17
        "885,00 kr",
        //18
        "107,00 kr",
        //19
        "885,00 kr",
        //20
        "310,00 kr",
        //21
        "310,00 kr",
        //22
        "885,00 kr",
        //23
        "531,00 kr",
        //24
        "443,00 kr",
        //25
        "443,00 kr",
        //26
        "620,00 kr",
        //27
        "708,00 kr",
        //28
        "222,00 kr",
        //29
        "222,00 kr",
        //30
        "885,00 kr",
        //31
        "107,00 kr",
        //32
        "222,00 kr",
        //33
        "222,00 kr",
        //34
        "531,00 kr",
        //35
        "89,00 kr",


    ];

    function updateProductsInfo() {
        products.forEach((product, index) => {
            const nameElement = product.querySelector('h2');
            const priceElement = product.querySelector('p');

            nameElement.textContent = productNames[index];
            priceElement.textContent = productPrices[index];
        });
    }

    updateProductsInfo();
});
