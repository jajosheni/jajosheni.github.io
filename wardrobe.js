
const wardrobe = {
  tops: [
    { name: "Olive green blouse", color: "green", type: "blouse" },
    { name: "Black turtleneck", color: "black", type: "turtleneck" },
    { name: "Beige blouse", color: "neutral", type: "blouse" },
    { name: "Camel blouse", color: "brown", type: "blouse" },
    { name: "White turtleneck", color: "white", type: "turtleneck" },
    { name: "Navy blue turtleneck", color: "blue", type: "turtleneck" },
    { name: "Blue turtleneck", color: "blue", type: "turtleneck" },
  ],
  trousers: [
    { name: "Navy blue trousers", color: "blue", type: "trousers" },
    { name: "Black trousers", color: "black", type: "trousers" },
    { name: "Gray trousers", color: "gray", type: "trousers" },
    { name: "Dark red trousers", color: "red", type: "trousers" },
    { name: "Beige trousers", color: "neutral", type: "trousers" },
    { name: "Brown trousers", color: "brown", type: "trousers" },
  ],
  shoes: [
    { name: "Black high neck shoes", color: "black", type: "shoes" },
    { name: "White Nike casual", color: "white", type: "casual" },
  ],
  outerwear: [
    { name: "Black long coat", color: "black", type: "long coat" },
    { name: "Dark blue long coat", color: "blue", type: "long coat" },
    { name: "Gray long coat", color: "gray", type: "long coat" },
    { name: "Dark Olive jacket", color: "green", type: "jacket" },
    { name: "Navy blue jacket", color: "blue", type: "jacket" },
    { name: "Gray jacket", color: "gray", type: "jacket" },
  ],
};

const predefinedOutfits = [
  { top: "Olive green blouse", trousers: "Beige trousers", shoes: "White Nike casual", outerwear: "Dark Olive jacket", rating: 8 },
  { top: "Black turtleneck", trousers: "Gray trousers", shoes: "Black high neck shoes", outerwear: "Black long coat", rating: 9 },
  { top: "Beige blouse", trousers: "Brown trousers", shoes: "White Nike casual", outerwear: "Gray long coat", rating: 7 },
  { top: "Camel blouse", trousers: "Navy blue trousers", shoes: "Black high neck shoes", outerwear: "Dark blue long coat", rating: 8 },
  { top: "White turtleneck", trousers: "Black trousers", shoes: "White Nike casual", outerwear: "Gray jacket", rating: 10 },
  { top: "Navy blue turtleneck", trousers: "Dark red trousers", shoes: "Black high neck shoes", outerwear: "Navy blue jacket", rating: 7 },
  { top: "Blue turtleneck", trousers: "Gray trousers", shoes: "White Nike casual", outerwear: "Dark blue long coat", rating: 8 },
  { top: "Black turtleneck", trousers: "Beige trousers", shoes: "White Nike casual", outerwear: "Gray jacket", rating: 8 },
  { top: "Beige blouse", trousers: "Navy blue trousers", shoes: "Black high neck shoes", outerwear: "Dark Olive jacket", rating: 7 },
  { top: "White turtleneck", trousers: "Brown trousers", shoes: "White Nike casual", outerwear: "Black long coat", rating: 9 },
  { top: "Navy blue turtleneck", trousers: "Gray trousers", shoes: "Black high neck shoes", outerwear: "Gray long coat", rating: 8 },
  { top: "Blue turtleneck", trousers: "Black trousers", shoes: "White Nike casual", outerwear: "Navy blue jacket", rating: 7 },
  { top: "Olive green blouse", trousers: "Dark red trousers", shoes: "Black high neck shoes", outerwear: "Gray long coat", rating: 7 },
  { top: "Camel blouse", trousers: "Beige trousers", shoes: "White Nike casual", outerwear: "Dark blue long coat", rating: 8 },
  { top: "Beige blouse", trousers: "Gray trousers", shoes: "Black high neck shoes", outerwear: "Navy blue jacket", rating: 7 },
  { top: "White turtleneck", trousers: "Navy blue trousers", shoes: "Black high neck shoes", outerwear: "Dark Olive jacket", rating: 9 },
  { top: "Navy blue turtleneck", trousers: "Beige trousers", shoes: "White Nike casual", outerwear: "Black long coat", rating: 8 },
  { top: "Blue turtleneck", trousers: "Brown trousers", shoes: "Black high neck shoes", outerwear: "Gray jacket", rating: 7 },
  { top: "Olive green blouse", trousers: "Black trousers", shoes: "White Nike casual", outerwear: "Dark blue long coat", rating: 8 },
  { top: "Camel blouse", trousers: "Dark red trousers", shoes: "Black high neck shoes", outerwear: "Gray jacket", rating: 7 },
  { top: "Black turtleneck", trousers: "Brown trousers", shoes: "White Nike casual", outerwear: "Dark Olive jacket", rating: 8 },
  { top: "Beige blouse", trousers: "Black trousers", shoes: "Black high neck shoes", outerwear: "Gray long coat", rating: 9 },
  { top: "White turtleneck", trousers: "Gray trousers", shoes: "White Nike casual", outerwear: "Navy blue jacket", rating: 10 },
  { top: "Navy blue turtleneck", trousers: "Dark red trousers", shoes: "Black high neck shoes", outerwear: "Gray jacket", rating: 7 },
  { top: "Blue turtleneck", trousers: "Beige trousers", shoes: "White Nike casual", outerwear: "Black long coat", rating: 8 },
  { top: "Olive green blouse", trousers: "Gray trousers", shoes: "Black high neck shoes", outerwear: "Gray long coat", rating: 8 },
  { top: "Camel blouse", trousers: "Black trousers", shoes: "White Nike casual", outerwear: "Dark Olive jacket", rating: 9 },
  { top: "Black turtleneck", trousers: "Navy blue trousers", shoes: "Black high neck shoes", outerwear: "Navy blue jacket", rating: 10 },
  { top: "White turtleneck", trousers: "Dark red trousers", shoes: "White Nike casual", outerwear: "Black long coat", rating: 8 },
  { top: "Navy blue turtleneck", trousers: "Brown trousers", shoes: "Black high neck shoes", outerwear: "Gray jacket", rating: 7 },
  { top: "Blue turtleneck", trousers: "Beige trousers", shoes: "White Nike casual", outerwear: "Dark blue long coat", rating: 9 },
  { top: "Beige blouse", trousers: "Dark red trousers", shoes: "Black high neck shoes", outerwear: "Dark blue long coat", rating: 8 },
  { top: "Olive green blouse", trousers: "Navy blue trousers", shoes: "White Nike casual", outerwear: "Gray jacket", rating: 8 },
  { top: "Camel blouse", trousers: "Gray trousers", shoes: "Black high neck shoes", outerwear: "Black long coat", rating: 9 },
];

function populateDropdown(dropdownId, items) {
  const dropdown = document.getElementById(dropdownId);
  items.forEach(item => {
    const option = document.createElement('option');
    option.value = item.name;
    option.textContent = item.name;
    dropdown.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateDropdown('topsDropdown', wardrobe.tops);
  populateDropdown('trousersDropdown', wardrobe.trousers);
  populateDropdown('shoesDropdown', wardrobe.shoes);
  populateDropdown('outerwearDropdown', wardrobe.outerwear);
});

// Function to check dropdowns and enable/disable the button
function checkDropdowns() {
  const topsValue = document.getElementById('topsDropdown').value;
  const trousersValue = document.getElementById('trousersDropdown').value;
  const shoesValue = document.getElementById('shoesDropdown').value;
  const outerwearValue = document.getElementById('outerwearDropdown').value;
  
  const button = document.getElementById('todaysStyleButton');
  button.disabled = !(topsValue || trousersValue || shoesValue || outerwearValue); // Disable if all are empty
}

// Add event listeners to each dropdown to check their status on change
document.getElementById('topsDropdown').addEventListener('change', checkDropdowns);
document.getElementById('trousersDropdown').addEventListener('change', checkDropdowns);
document.getElementById('shoesDropdown').addEventListener('change', checkDropdowns);
document.getElementById('outerwearDropdown').addEventListener('change', checkDropdowns);

// Initial check in case of pre-selected values
checkDropdowns();

document.getElementById('todaysStyleButton').addEventListener('click', function() {
  const selectedTop = document.getElementById('topsDropdown').value;
  const selectedTrousers = document.getElementById('trousersDropdown').value;
  const selectedShoes = document.getElementById('shoesDropdown').value;
  const selectedOuterwear = document.getElementById('outerwearDropdown').value;

  const matchingOutfits = predefinedOutfits.filter(outfit => {
    return (!selectedTop || outfit.top === selectedTop) &&
           (!selectedTrousers || outfit.trousers === selectedTrousers) &&
           (!selectedShoes || outfit.shoes === selectedShoes) &&
           (!selectedOuterwear || outfit.outerwear === selectedOuterwear);
  });


  displayMatchingOutfits(matchingOutfits.slice(0, 5)); // Display only up to 5 matching outfits
});

function displayMatchingOutfits(outfits) {
  // Sort the outfits by rating in descending order
  const sortedOutfits = outfits.sort((a, b) => b.rating - a.rating);
  
  const container = document.getElementById('matchingOutfits');
  container.innerHTML = ''; // Clear previous results

  sortedOutfits.forEach(outfit => {
    const outfitElement = document.createElement('div');
    outfitElement.className = 'outfit';
    outfitElement.innerHTML = `
      <p><strong>Top:</strong> ${outfit.top}</p>
      <p><strong>Trousers:</strong> ${outfit.trousers}</p>
      <p><strong>Shoes:</strong> ${outfit.shoes}</p>
      <p><strong>Outerwear:</strong> ${outfit.outerwear}</p>
      <p><strong>Rating:</strong> ${outfit.rating}/10</p>
    `;
    container.appendChild(outfitElement);
  });
}

