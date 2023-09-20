import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ChakraProvider } from "@chakra-ui/react";
const isTouchDevice = window && "ontouchstart" in window;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
      <ToastContainer />
    </DndProvider>
  </React.StrictMode>
);



