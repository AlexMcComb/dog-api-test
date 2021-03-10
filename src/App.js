import React, { useState } from "react";
import Buttons from "./Buttons";
import ImageContainer from "./ImageContainer";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <h4>Dog count: {images.length}</h4>
      <Buttons setImages={setImages} images={images} />
      {images &&
        images.map((image, index) => (
          <ImageContainer
            image={image}
            index={index}
            images={images}
            setImages={setImages}
            key={`${image.url}${index}`}
          />
        ))}
    </div>
  );
};

export default App;
