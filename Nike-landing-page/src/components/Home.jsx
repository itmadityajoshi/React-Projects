import React from "react";

const Home = () => {
  return (
    <>
      <main className="hero container mx-auto flex ">
        <div className="hero-content mt-5 mx-10 ">
          <h1 className="font-bold  text-8xl ">
            YOUR FEET
          </h1> 
          <h1 className="font-bold  text-8xl ">DESERVE</h1>
          <h1 className="font-bold  text-8xl ">THE BEST </h1>

          <p className="mt-5 w-96">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOUR WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOUR WITH OUR SHOES.
          </p>


        <div className="flex gap-16 mt-5 mb-3">

          <button className="bg-red-500 text-white text-xl font-[500] px-4 py-1.5"> Shop Now </button>
          <button className=" text-gray-800 text-xl font-[500] px-4 py-1.5 border border-gray-900  "> Category </button>
        </div>

        
        <h1 >Also Available on </h1>

        <div className="flex gap-6 mt-4 ">
            
          <img src="/public/photos/flipkart.png" alt="" />
          <img src="/public/photos/amazon.png" alt="" />

        </div>
        
          
        </div>
        <div className="hero-img mt-5 mx-10"> 
            <img src="/photos/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  );
};

export default Home;
