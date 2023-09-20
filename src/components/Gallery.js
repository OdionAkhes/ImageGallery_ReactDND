/** @format */

import React, { useState } from "react";
import { galleryList } from "../data";

import Card from "./Card"; 


const Gallery = () => {
    const [images, setImages] = useState(galleryList);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredImages = images.filter(image => {
       return (image.tag.toLowerCase().includes(searchTerm.toLowerCase())
       )
    })
 const moveImage = React.useCallback((dragIndex, hoverIndex) => {
   setImages((prevCards) => {
     const clonedCards = [...prevCards];
     const removedItem = clonedCards.splice(dragIndex, 1)[0];
     clonedCards.splice(hoverIndex, 0, removedItem);
     return clonedCards;
   });
 }, []);

 return (
   <div className="my-6 mx-4">
     <div className="relative">
       <input
         type="text"
         className="w-full p-3 pl-10 rounded-lg border border-gray-300 shadow-sm transition duration-200 hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring ml-auto"
         placeholder="Search by tag..."
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
       />
       <svg
         className="absolute top-3.5 left-3 h-6 w-6 text-gray-500"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"
         />
       </svg>
     </div>
     <main className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer p-6">
       {filteredImages.map((image, index) => (
         <Card
           src={image.img}
           key={index}
           {...image}
           index={index}
           moveImage={moveImage}
         />
       ))}
     </main>
   </div>
 );

}

export default Gallery