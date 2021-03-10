import "./App.css";
import fetchImages from "./API";

const Buttons = ({ setImages, images }) => {
  const getImages = async (count) => {
    const fetchedImages = await fetchImages(count);
    setImages([...images, ...fetchedImages]);
  };

  const removeImages = (number) => {
    const newImages = images.slice(0, number);
    setImages(newImages);
  };

  return (
    <div id="button-container">
      <button onClick={() => getImages(1)}>+1</button>
      <button onClick={() => getImages(5)}>+5</button>
      <button onClick={() => removeImages(-1)}>-1</button>
      <button onClick={() => removeImages(-5)}>-5</button>
    </div>
  );
};

export default Buttons;
