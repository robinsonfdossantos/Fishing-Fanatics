const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    const fishName = document.getElementById('new-fish').value;
  
    if (!fishName || fishName.trim() === '') {
      console.error('Fish name cannot be empty');
      return;
    }
  
    try {
      const response = await fetch('/api/species', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: fishName }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add fish species');
      }
  
      const result = await response.json();
      console.log(result);
  
      document.getElementById('new-fish').value = '';
  
      location.reload();
    } catch (error) {
      console.error('Error adding fish species:', error.message);
    }
  };
  
  document.getElementById('add-fish').addEventListener('click', handleFormSubmit);
  