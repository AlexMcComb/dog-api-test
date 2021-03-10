import "./App.css";

const ImageContainer = ({ image, index, images, setImages }) => {
  const imageStyle = image.loaded ? {} : { display: "none" };
  const updateImageLoaded = (index) => {
    const allImages = [...images];
    images[index].loaded = true;
    setImages(allImages);
  };

  return (
    <>
      {!image.loaded && <h4 id="loading">loading...</h4>}
      <img
        src={image.url}
        style={imageStyle}
        className="image"
        onLoad={() => updateImageLoaded(index)}
        alt="a dog"
      />
    </>
  );
};

export default ImageContainer;
