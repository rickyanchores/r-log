import React from "react";
import Card from "../../Components/Card/Card";


const Gallery = () => {

  const images = [
    {
      name: "first",
      url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      name: "second",
      url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
    {
      name: "third",
      url: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
  ]

  return (
    <div className="Gallery">
      <h3>Gallery</h3>
      <p>This is gallery</p>
      <div className="container">
      <Card image={images[0].url}/>
      <Card image={images[1].url}/>
      <Card image={images[2].url}/>
      </div>
      
    </div>
  );
};

export default Gallery;
