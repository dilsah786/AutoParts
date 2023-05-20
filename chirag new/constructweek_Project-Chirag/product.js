const exteriorParts = [
    {
      image: "https://m.media-amazon.com/images/I/31+mT5KQDeL.jpg",
      category: "Exterior Parts",
      productName: "Front Bumper",
      markedPrice: 199.99,
      discountedPrice: 179.99,
      ratings: 3.5
    },
    {
      image: "https://carorbis.com/wp-content/uploads/2020/06/zxcvbmbjhfthd-01-280x280.jpg",
      category: "Exterior Parts",
      productName: "Side Mirror",
      markedPrice: 79.99,
      discountedPrice: 69.99,
      ratings: 3.3
    },
    {
      image: "https://m.media-amazon.com/images/I/6177BYPoesL._SL1080_.jpg",
      category: "Exterior Parts",
      productName: "Car Internal LED",
      markedPrice: 29.99,
      discountedPrice: 24.99,
      ratings: 4.7
    },
    {
      image: "https://m.media-amazon.com/images/I/41ZK4aM4zgL._SX300_SY300_QL70_FMwebp_.jpg",
      category: "Exterior Parts",
      productName: "Car Phone Holder",
      markedPrice: 5.99,
      discountedPrice: 2.99,
      ratings: 4.1
    },
    {
      image: "https://m.media-amazon.com/images/I/31X+9wLLkXL._AC._SR360,460.jpg",
      category: "Exterior Parts",
      productName: "Grille",
      markedPrice: 129.99,
      discountedPrice: 109.99,
      ratings: 1.6
    },
    {
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRkL9Dabe5YGzHBZTWN_OYJgXjYpeWhXhHh4TPZhsCiE_Zb4RmzWzZRGxIBVGtkFC_XhjGpNwaBq2QyTfnGL9SB8Hg6a6PHrdgWsh6KjQBZscuO-JR0ZWTU",
      category: "Exterior Parts",
      productName: "Apollo 4g Tyres",
      markedPrice: 249.99,
      discountedPrice: 219.99,
      ratings: 3
    },
    {
      image: "https://m.media-amazon.com/images/I/418FYAdB2IL._AC._SR360,460.jpg",
      category: "Exterior Parts",
      productName: "Hood",
      markedPrice: 299.99,
      discountedPrice: 279.99,
      ratings: 4.7
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--BTOCB2HrQsyMF7zeI6rc2GNf2vGvFz1_g&usqp=CAU",
      category: "Exterior Parts",
      productName: "Trunk Spoiler",
      markedPrice: 89.99,
      discountedPrice: 79.99,
      ratings: 4.4
    },
    {
      image: "https://m.media-amazon.com/images/I/81kG+PyEzEL._AC._SR360,460.jpg",
      category: "Exterior Parts",
      productName: "Universe Anti Scratch",
      markedPrice: 139.99,
      discountedPrice: 119.99,
      ratings: 4.5
    },
    {
      image: "https://m.media-amazon.com/images/I/81beem8IlpL._AC._SR360,460.jpg",
      category: "Exterior Parts",
      productName: "Air Intake",
      markedPrice: 299.99,
      discountedPrice: 259.99,
      ratings: 4.6
    },
    {
      image: "https://carorbis.com/wp-content/uploads/2021/08/1-01-11-280x280.png",
      category: "Exterior Parts",
      productName: "BodyCover",
      markedPrice: 199.99,
      discountedPrice: 179.99,
      ratings: 4.7
    },
    {
      image: "https://m.media-amazon.com/images/I/616yvupE77L._SX522_.jpg",
      category: "Exterior Parts",
      productName: "CEAT Scooter Tyres",
      markedPrice: 199.99,
      discountedPrice: 169.99,
      ratings: 3.5
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdngU8kEeruKVnTQHZKabrVmHHygBxCM97HA&usqp=CAU",
      category: "Exterior Parts",
      productName: "Fog Lights",
      markedPrice: 69.99,
      discountedPrice: 59.99,
      ratings: 2.1
    },
    {
      image: "https://carorbis.com/wp-content/uploads/2020/07/sfghjk-01-280x280.jpg",
      category: "Exterior Parts",
      productName: "Window Visors",
      markedPrice: 49.99,
      discountedPrice: 39.99,
      ratings: 4.4
    },
    {
      image: "https://m.media-amazon.com/images/I/51mkZaEKyLL._AC_UL600_FMwebp_QL65_.jpg",
      category: "Exterior Parts",
      productName: "Car Bumper",
      markedPrice: 149.99,
      discountedPrice: 129.99,
      ratings: 4.6
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCECyNAYcljaqldUo_nOV4pCpF59zCs3WyQ&usqp=CAU",
      category: "Exterior Parts",
      productName: "Bumper Trim",
      markedPrice: 79.99,
      discountedPrice: 69.99,
      ratings: 4.3
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslOfZCHezxGb8waqWBzlbgax7mZ4tHDaALQ&usqp=CAU",
      category: "Exterior Parts",
      productName: "Antenna",
      markedPrice: 19.99,
      discountedPrice: 14.99,
      ratings: 4.2
    },
    {
      image: "https://m.media-amazon.com/images/I/710CHKJ0puL._SX522_.jpg",
      category: "Exterior Parts",
      productName: "Tyre inflator",
      markedPrice: 29.99,
      discountedPrice: 24.99,
      ratings: 4.4
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFAWYpAOh_3vJNAnQIbvTTaqi6dxv8OjGag&usqp=CAU",
      category: "Exterior Parts",
      productName: "Wheel Arch Trim",
      markedPrice: 59.99,
      discountedPrice: 49.99,
      ratings: 4.6
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFAWYpAOh_3vJNAnQIbvTTaqi6dxv8OjGag&usqp=CAU",
      category: "Exterior Parts",
      productName: "License Plate ",
      markedPrice: 9.99,
      discountedPrice: 7.99,
      ratings: 4.2
    },
    {
      image: "https://m.media-amazon.com/images/I/711rzgVu02L._SX522_.jpg",
      category: "Exterior Parts",
      productName: "JK TUBELESS TYRES",
      markedPrice: 149.99,
      discountedPrice: 129.99,
      ratings: 4.6
    },
    {
      image: "https://m.media-amazon.com/images/I/71sCtipYbEL._AC._SR360,460.jpg",
      category: "Exterior Parts",
      productName: "Steering Wheel",
      markedPrice: 299.99,
      discountedPrice: 249.99,
      ratings: 4.7
    },
    {
      image: "https://m.media-amazon.com/images/I/61N5Gzv+SBL._AC._SR360,460.jpg",
      category: "Exterior Parts",
      productName: "ShatterProof Glass",
      markedPrice: 129.99,
      discountedPrice: 109.99,
      ratings: 3.8
    },
    {
      image: "https://m.media-amazon.com/images/I/21StpJen4lL._AC._SR360,460.jpg",
      category: "Exterior Parts",
      productName: "Car Battery",
      markedPrice: 249.99,
      discountedPrice: 219.99,
      ratings: 4.8
    }

  ];
  let itemdiv = document.getElementById("itemDiv");
let currentPage = 1;
const itemsPerPage = 9;
let sortingOption = "lowToHigh"; // Default sorting option

exterior(exteriorParts);

// Handle sort option change
document.getElementById("sortOptions").addEventListener("change", function () {
  sortingOption = this.value;
  exterior(exteriorParts);
});



//debouncing
const debounceDelay = 300;

let debounceTimer;

// Add event listener to the search input field
document.getElementById("search_input").addEventListener("input", function (event) {
  // Clear the previous debounce timer
  clearTimeout(debounceTimer);

  // Start a new debounce timer
  debounceTimer = setTimeout(function () {
    const searchQuery = event.target.value.trim().toLowerCase();

    // Filter the data based on the search query
    const filteredData = exteriorParts.filter(function (item) {
      return item.productName.toLowerCase().includes(searchQuery);
    });

    // Call the exterior function with the filtered data
    exterior(filteredData);
  }, debounceDelay);
});



function exterior(datapart) {
  // Apply sorting based on selected option
  let sortedData = sortData(datapart, sortingOption);

  itemdiv.innerHTML = "";

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToShow = sortedData.slice(startIndex, endIndex);

  itemsToShow.forEach((elem) => {
    // Adding image
    let childdiv = document.createElement("div");
    childdiv.classList.add("child");
    let img = document.createElement("img");
    img.src = elem.image;
    img.alt = "Stockimages";
    childdiv.appendChild(img);

    // Adding texts
    const productcat = document.createElement("h3");
    productcat.textContent = elem.category;
    const productName = document.createElement("h4");
    productName.textContent = elem.productName;

    const markedPrice = document.createElement("p");
    markedPrice.innerHTML =
      "<del>" + `$${elem.markedPrice}` + "</del>" + " " + " " + " " + `$${elem.discountedPrice}`;

    const ratings = document.createElement("p");
    ratings.textContent = "Ratings: ";

    const ratingStars = document.createElement("span");
    ratingStars.classList.add("rating-stars");

    const rating = Math.round(elem.ratings);
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.classList.add("star");

      if (i <= rating) {
        star.textContent = "\u2605"; // Filled star (Unicode character)
        star.style.color = "gold";
      } else {
        star.textContent = "\u2606"; // Empty star (Unicode character)
      }

      ratingStars.appendChild(star);
    }

    ratings.appendChild(ratingStars);

    childdiv.appendChild(img);
    childdiv.appendChild(productcat);
    childdiv.appendChild(productName);
    childdiv.appendChild(markedPrice);
    childdiv.appendChild(ratings);

    // Adding Add to Cart button
    const cartSymbol = '\u{1F6D2}';
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = cartSymbol +"Add to Cart";
    addToCartButton.classList.add("add-to-cart-button");

    addToCartButton.addEventListener("mouseover", function (event) {
      addToCartButton.classList.add("zoom-in");
    });

    addToCartButton.addEventListener("mouseout", function (event) {
      addToCartButton.classList.remove("zoom-in");
    });
    addToCartButton.style.display = "none"; // Hide the button initially
//CARTKEY
    addToCartButton.addEventListener("click", function () {
      // Save item to local storage
      let cartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];
      cartItems.push(elem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert("Item added to cart!");
    });

    childdiv.addEventListener("mouseover", function (event) {
      addToCartButton.style.display = "block"; // Show the button on mouseover
    });

    childdiv.addEventListener("mouseout", function (event) {
      addToCartButton.style.display = "none"; // Hide the button on mouseout
    });

    childdiv.appendChild(addToCartButton);

    itemdiv.appendChild(childdiv);
  });

  // Add pagination buttons
  addPagination(sortedData.length);
}

function addPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationDiv = document.createElement("div");
  paginationDiv.classList.add("pagination");

  // Create previous button
  const prevButton = createPaginationButton("prev", "\u00AB");
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      exterior(exteriorParts);
      goToPage(currentPage);
    }
  });
  paginationDiv.appendChild(prevButton);

  // Create page buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = createPaginationButton(i, i);
    pageButton.addEventListener("click", () => {
      currentPage = i;
      exterior(exteriorParts);
    });
    paginationDiv.appendChild(pageButton);
  }

  // Create next button
  const nextButton = createPaginationButton("next", "\u00BB");
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      exterior(exteriorParts);
    }
  });
  paginationDiv.appendChild(nextButton);

  itemdiv.appendChild(paginationDiv);
}

function createPaginationButton(buttonValue, buttonText) {
  const button = document.createElement("button");
  button.textContent = buttonText;
  button.value = buttonValue;
  button.classList.add("pagination-button");
  return button;
}

function sortData(data, sortingOption) {
  switch (sortingOption) {
    case "lowToHigh":
      return data.sort((a, b) => a.discountedPrice - b.discountedPrice);
    case "highToLow":
      return data.sort((a, b) => b.discountedPrice - a.discountedPrice);
    case "sortByRating":
      return data.sort((a, b) => b.ratings - a.ratings);
    case "popularity":
      return data.sort((a, b) => b.popularity - a.popularity);
    default:
      return data;
  }
}



