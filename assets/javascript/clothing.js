// Define an array of objects, each representing a different item for sale
const items = [
    {
        // Item 1
        name: "cohesive-tshirt-white",
        price: 310.00,
        image: "assets/images/clothes/1.webp",
        description: "cohesive print on front, adwysd logo on back, they fit true to size, postage, uk £5, worldwide £10 orders, from this release take 2-10 working days for dispatch",
        sizes: ["small", "medium", "large", "extra large", "xxl"]
    },
    {
        // Item 2
        name: "magazine-tshirt-black",
        price: 22.99,
        image: 'assets/images/clothes/2.webp',
        description: "A trendy t-shirt with a unique design.",
        sizes: ["S", "M", "L", "XL"]
    },

];






// Function to populate the details of the current item on the page
function populateItemDetails(itemIndex) {
    const currentItem = items[itemIndex];

    // Set the title of the document
    document.title = currentItem.name;

    // Set the text content of the h1 element
    document.querySelector("h1").textContent = currentItem.name;

    // Set other item details
    document.getElementById("itemImage").src = currentItem.image;
    document.getElementById("itemDescription").innerText = currentItem.description;

    // Populate the price
    document.getElementById("itemPrice").innerText = currentItem.price.toFixed(2) + " kr";

    // Populate the sizes dropdown
    const sizesSelect = document.getElementById("itemSizes");
    sizesSelect.innerHTML = ""; // Clear previous options
    currentItem.sizes.forEach(size => {
        const sizeOption = document.createElement("option");
        sizeOption.value = size;
        sizeOption.textContent = size;
        sizesSelect.appendChild(sizeOption);
    });
}


function getItemIndexFromURL() {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Get the value of the 'index' parameter from the URL
    const indexParam = urlParams.get('index');

    // If 'index' parameter exists and is a valid integer, return it
    if (indexParam !== null && !isNaN(indexParam)) {
        return parseInt(indexParam);
    } else {
        // If 'index' parameter is missing or not a valid integer, return 0 as default
        console.error("Invalid or missing item index parameter in the URL. Defaulting to index 0.");
        return 0;
    }
}


// Call the function to populate item details when the page loads
window.onload = function () {
    const itemIndex = getItemIndexFromURL();
    if (!isNaN(itemIndex) && itemIndex >= 0 && itemIndex < items.length) {
        populateItemDetails(itemIndex);
    } else {
        console.error("Invalid item index.");
    }
};

// image switcher 
// Function to change the main image based on the clicked image
function changeMainImage(imageSrc) {
    document.getElementById("itemImage").src = imageSrc;
}

// Function to set opacity to 0.8 for clicked image
function setOpacityToEighty(id) {
    // Reset opacity for both images
    document.getElementById("frontImage").style.opacity = "1";
    document.getElementById("backImage").style.opacity = "1";

    // Set opacity to 0.8 for the clicked image
    document.getElementById(id).style.opacity = "0.7";
}

// Event listener for the front image
document.getElementById("frontImage").addEventListener("click", function () {
    changeMainImage("assets/images/clothes/1,1.webp");
    setOpacityToEighty("frontImage");
});

// Event listener for the back image
document.getElementById("backImage").addEventListener("click", function () {
    changeMainImage("assets/images/clothes/1,2.webp");
    setOpacityToEighty("backImage");
});
