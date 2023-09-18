/** @format */

import React,{useRef, useState} from "react";
import {galleryList} from "./data.js";

import { useDrag, useDrop } from "react-dnd";

const Card = ({ src, title, id, index,moveImage }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveImage(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });
    const [{ isDragging }, drag] = useDrag({
      type: "image",
      item: () => {
        return { id, index };
      },
      collect: (monitor) => {
        return {
          isDragging: monitor.isDragging(),
        };
      },
    });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div className="card" style={{ opacity }} ref={ref}>
      <img src={src} alt={title} />
    </div>
  );
};
const App = () => {
  const [images, setImages] = useState(galleryList);
const moveImage = React.useCallback((dragIndex, hoverIndex) => {
  setImages((prevCards) => {
    const clonedCards = [...prevCards];
    const removedItem = clonedCards.splice(dragIndex, 1)[0];
    clonedCards.splice(hoverIndex, 0, removedItem);
    return clonedCards;
  });
}, []);

  return (
    <main>
      {images.map((image, index) => (
        <Card
          src={image.img}
          key={index}
          title={image.title}
          id={image.id}
          index={index}
          moveImage={moveImage}
        />
      ))}
    </main>
  );
};
export default App;
