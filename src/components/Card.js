
import React, { useRef} from "react";


import { useDrag, useDrop } from "react-dnd";
const Card = ({ src, title, id, index, moveImage,tag, }) => {
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
  const hoverMiddleY = hoverBoundingRect.height * 0.5; 


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
  const opacity = isDragging ? 0.5 : 1;
  drag(drop(ref));

  return (
    <div
      className={`bg-white shadow-md hover:shadow-xl transition-shadow duration-300 relative rounded-md ${
        isDragging ? "shadow-lg" : ""
      } transition-all duration-300 ease-in-out`}
      style={{ opacity }}
      ref={ref}
    >
      <img
        src={src}
        alt={title}
        className="object-cover h-64 w-full rounded-t-md"
      />

      <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded z-10">
        {tag}
      </span>

      <div className="select-none p-4">
        <h2 className="font-bold text-xl font-serif">{title}</h2>
      </div>
    </div>
  );
};


export default Card;