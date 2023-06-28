// specieData.js

// Function to fetch species data from the server
const fetchSpeciesData = async () => {
    try {
      const response = await fetch('/api/species');
      if (response.ok) {
        const species = await response.json();
        const specieSelect = document.getElementById('specie');
        specieSelect.innerHTML = ''; // Clear existing options
        species.forEach((specie) => {
          const option = document.createElement('option');
          option.value = specie.id;
          option.textContent = specie.name;
          specieSelect.appendChild(option);
        });
      } else {
        console.log('Error:', response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // Call the function to fetch and populate species data
  fetchSpeciesData();
  