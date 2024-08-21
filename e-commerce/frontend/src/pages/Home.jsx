import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IoCafeOutline } from "react-icons/io5";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="grid  grid-cols-2 items-center container mr-10 ">
        <div className="">
          <img
            src="/images/Main_Image.png"
            className="h-[628px] w-30px"
            alt="landing main image"
          />
        </div>

        <div className="grid m-16 text-black">
          <h1 className="text-5xl font-bold mb-12 ">
            Every day is unique,
            <br />
            just like our tea
          </h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            officia, asperiores necessitatibus consequuntur molestias ad quae
            repellat enim? <br></br>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Qui consectetur explicabo accusantium veritatis
            consequatur, totam nihil rerum autem deleniti, accusamus labore
            cupiditate porro at sint unde nulla possimus vel! Neque.
          </p>
          <button className="btn mt-8 max-w-[200px] rounded-none hover:text-white ">
            Browse Teas
          </button>
        </div>
      </div>
        
        <div className="flex  gap-10">
            <div className="flex items-center justify-center gap-1">
                <IoCafeOutline/>
                <span>450+ KIND OF LOOSEF TEA</span>
            </div>

            <div className="flex items-center justify-center gap-1">
                <IoCafeOutline/>
                <span>450+ KIND OF LOOSEF TEA</span>
            </div>


            <div>
            <button className="btn btn-outline">Default</button>
            </div>
        </div>

      <Footer />
    </>
  );
};

export default Home;
