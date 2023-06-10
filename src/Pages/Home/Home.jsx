import React from "react";
import Blog from "../../Components/Blog/Blog";

const Home = () => {


  const blogs = [
    {
      name: "First Blog",
      image: "https://images.unsplash.com/photo-1605067063351-f81bc6041251?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
    {
      name: "First Blog",
      image: "https://images.unsplash.com/photo-1605067063351-f81bc6041251?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
    {
      name: "First Blog",
      image: "https://images.unsplash.com/photo-1605067063351-f81bc6041251?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    }
  ]

  return (
    <div className="Home">
      <h3>Home</h3>
      <p>This is homepage</p>
      <div className="container">
        <Blog image={blogs[0].image}/>
        <Blog image={blogs[0].image}/>
        <Blog image={blogs[0].image}/>
      </div>
    </div>
  );
};

export default Home;
