import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="grid  grid-cols-2 items-center container mr-10 ">
        <div className="">
          <img
            src="/images/Main_Image.png"
            className="h-[628px] w-30px"
            alt="landing main image"
          />
        </div>

        <div className="grid m-16">
          <h1 className="text-5xl font-bold mb-12">
            Every day is unique,
            <br />
            just like our tea
          </h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            officia, asperiores necessitatibus consequuntur molestias ad quae
            repellat enim?  <br></br>Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Qui consectetur explicabo accusantium
            veritatis consequatur, totam nihil rerum autem deleniti, accusamus
            labore cupiditate porro at sint unde nulla possimus vel! Neque.
          </p>
          <button className="btn mt-8">Browse Teas</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
