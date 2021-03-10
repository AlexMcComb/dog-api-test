const fetchImages = async (query) => {
  const queryURL = `https://dog.ceo/api/breeds/image/random/${query}`;
  const response = await fetch(queryURL);
  let json = await response.json();

  if (response.ok) {
    return json.message.map((image, index) => {
      return { url: image, loaded: false };
    });
  }
  const error = new Error(json.message);
  error.response = json;
  throw error;
};

export default fetchImages;
