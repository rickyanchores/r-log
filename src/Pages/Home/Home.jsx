import React from "react";
import Blog from "../../Components/Blog/Blog";

const Home = () => {


  const blogs = [
    {
      title: "First Blog",
      image: "https://images.unsplash.com/photo-1605067063351-f81bc6041251?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
    {
      title: "Second Blog",
      image: "https://images.unsplash.com/photo-1605067063351-f81bc6041251?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
    {
      title: "Third Blog",
      image: "https://images.unsplash.com/photo-1605067063351-f81bc6041251?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    }
  ]

  return (
    <div className="Home">
      <h3>Home</h3>
      <div className="container">
        <Blog title={blogs[0].title} image={blogs[0].image}/>
        <Blog title={blogs[1].title} image={blogs[1].image}/>
        <Blog title={blogs[2].title} image={blogs[2].image}/>
      </div>
    </div>
  );
};

export default Home;
