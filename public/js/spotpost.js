

const postSpot = async (event) => {
  event.preventDefault();

  let formTitle = document.getElementById('title').value.trim()
  let formDescription = document.getElementById('description').value.trim()
  let formLocation = document.getElementById('location').value.trim()
  let formComments = document.getElementById('comments').value.trim()
  let formSpecie = document.getElementById('specie').value;


  const card = document.createElement('div');
  const cardHeader = document.createElement('h5');
  const cardTitle = document.createElement('h5');
  const cardText = document.createElement('p');
  const cardLocation = document.createElement('p');
  const cardSpecie = document.createElement('p');
  const cardBody = document.createElement('div');
  const postContainer = document.querySelector('.post-container')
  card.setAttribute('style', 'width:600px')
  cardHeader.setAttribute('class', 'card-header')
  cardTitle.setAttribute('class', 'card-title')
  cardText.setAttribute('class', 'card-text')
  cardLocation.setAttribute('class', 'card-text')
  cardSpecie.setAttribute('class', 'card-text')
  cardBody.setAttribute('class', 'card-body');

  postContainer.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(cardHeader);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardLocation);
  cardBody.appendChild(cardSpecie);


  const data = {
    title: formTitle,
    description: formDescription,
    comments: formComments,
    location: formLocation,
    specie_id: formSpecie,
  }
  
  const response = await fetch('/api/spots', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      document.location.replace(window.location.href);
    // document.location.replace('/season/1');
    // const responseData = await response.json();
    // cardHeader.textContent = responseData.title;
    // cardTitle.textContent = responseData.description;
    // cardText.textContent = responseData.comments;
    // cardLocation.textContent = responseData.location;
    // cardSpecie.textContent = responseData.specie_id;
  } else {
    console.log('Error:', response.status);
  }
};

document.getElementById('post').addEventListener('submit', postSpot);

