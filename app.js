console.log("Let's get this party started!");

const apiKey = 'QSApdJ88ki2PhnsFr0cSrU8crRlmb0m0';
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gifContainer = document.getElementById('gif-container');
const removeButton = document.getElementById('remove-gifs');


async function getGif(searchTerm) {
  const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchTerm,
      api_key: apiKey,
      limit: 1
    }
  });

  const gifUrl = response.data.data[0]?.images?.fixed_height?.url;
  return gifUrl;
}


function appendGif(gifUrl) {
  if (gifUrl) {
    const img = document.createElement('img');
    img.src = gifUrl;
    gifContainer.appendChild(img);
  } else {
    alert('No GIF found!');
  }
}

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const searchTerm = input.value;
  const gifUrl = await getGif(searchTerm);
  appendGif(gifUrl);
  input.value = '';
});

removeButton.addEventListener('click', function() {
  gifContainer.innerHTML = '';
});
