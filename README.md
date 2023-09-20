# Image Gallery - React + Firebase Authentication + Drag and Drop

![Image Gallery Screenshot](./src/Screenshot%202023-09-20%20at%208.34.41%20PM.png)
A responsive image gallery built with React, showcasing drag-and-drop functionality.

## Features:

- Simple email and password authentication with firebase.
- Loading state with spinner.
- Grid layout for image display.
- Search functionality to filter images based on tags.
- Drag-and-drop functionality for rearranging images.
- Responsive design for mobile, tablet, and desktop views.

## Live Demo:

Visit the live site [Image Gallery Demo](https://image-gallery-react-dnd.vercel.app/)

## Local Setup:
## Getting Started

### Prerequisites

- You must have Node.js and npm installed. You can download them [here](https://nodejs.org/).
- Set up a Firebase project and enable Email & Password authentication. For dummy purposes, a user with credentials `user@example.com` and `1Password` should be set up.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/OdionAkhes/ImageGallery_ReactDND.git
    ```

2. Change into the directory:
    ```bash
    cd image-gallery
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your Firebase config:
    ```plaintext
    REACT_APP_FIREBASE_API_KEY=Your_Api_Key
    REACT_APP_FIREBASE_AUTH_DOMAIN=Your_Auth_Domain
    REACT_APP_FIREBASE_PROJECT_ID=Your_Project_Id
    REACT_APP_FIREBASE_STORAGE_BUCKET=Your_Storage_Bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=Your_Messaging_Sender_Id
    REACT_APP_FIREBASE_APP_ID=Your_App_Id
    REACT_APP_FIREBASE_MEASUREMENT_ID=Your_Measurement_Id
    ```

5. Run the development server:
    ```bash
    npm start
    ```

6. Visit `http://localhost:3000` in your browser.


## Usage

1. **Login** using the dummy user: 
    - Email: `user@example.com`
    - Password: `1Password`
2. Once logged in, you'll be presented with the image gallery.
3. **Drag & Drop** any image to reorder them as you please.
4. Use the **Search Bar** to filter images based on tags.
5. To **Sign Out**, click on the "Sign Out" button.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the 
