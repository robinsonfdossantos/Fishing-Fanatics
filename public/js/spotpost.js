

const postSpot = async (event) => {
    event.preventDefault();
    
        let formTitle = document.getElementById('title').value.trim()
        let formDescription = document.getElementById('description').value.trim()
        let formLocation = document.getElementById('location').value.trim()
        let formComments = document.getElementById('comments').value.trim()
      const card = document.createElement('div');
      const cardHeader = document.createElement('h5');
      const cardTitle = document.createElement('h5');
      const cardText = document.createElement('p');
      const cardLocation = document.createElement('p');
      const cardBody = document.createElement('div');
      const postContainer = document.querySelector('.post-container')
      card.setAttribute('style', 'width:600px')
      cardHeader.setAttribute('class', 'card-header')
      cardTitle.setAttribute('class', 'card-title')
      cardText.setAttribute('class', 'card-text')
      cardBody.setAttribute('class', 'card-body');
      postContainer.appendChild(card)
      card.appendChild(cardHeader, cardBody);
    const data = {
        title: formTitle,
        description: formDescription,
        comments: formComments,
        location: formLocation,
    }
    const response = await fetch('/api/spots', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    
        console.log(response)
        cardHeader.textContent = response.title
        cardTitle.textContent = response.description
        cardText.textContent = response.comments
        cardLocation.textContent = response.location


  };
  
  document.getElementById('post').addEventListener('submit', postSpot);
  