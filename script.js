const recipes = [
    {
      title: "Spaghetti",
      image: "spaghetti.jpg",
      url: "recipe1.html"
    },
    {
      title: "Pancakes",
      image: "pancakes.jpg",
      url: "recipe2.html"
    },
    {
      title: "Vegetable Fried Rice",
      image: "vegfriedrice.jpg",
      url: "recipe3.html"
    },
    {
      title: "Grilled Cheese Sandwich",
      image: "sandwich.jpg",
      url: "recipe4.html"
    }
  ];
  
  const recipeGrid = document.getElementById("recipeGrid");
  const searchBar = document.getElementById("searchBar");
  const loader = document.getElementById("loader");
function displayRecipes(filteredRecipes) {
  loader.classList.add("hidden"); // Hide loader when content is ready
  recipeGrid.innerHTML = "";
  filteredRecipes.forEach(recipe => {
    const card = document.createElement("a");
    card.className = "recipe-card";
    card.href = recipe.url;
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" style="width:100%">
      <h3>${recipe.title}</h3>
    `;
    recipeGrid.appendChild(card);
  });
}

setTimeout(() => {
  displayRecipes(recipes); // Simulate loading time
}, 1000);
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".recipe-card");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

