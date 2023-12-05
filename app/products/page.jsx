import Image from "next/image";
import CarCard from "@/components/CarCard";
import carData from "../src/json/carData.json";

export const metadata = {
  title: 'products - page',
  description: 'showing brabus products',
}

const Products = () => {
  return (
    <div>
      <section>
        <h2 className="mt-20 text-center text-2xl xl:text-4xl  font-semibold">SUPERCARS</h2>
        <p className="text-center mt-7 leading-7 text-sm xl:text-base  max-w-3xl mx-auto px-5">
          From the ULTIMATE E to the ROCKET 900 – each BRABUS supercar is the result of a perfect interplay: consummate technology, sophisticated art of engineering and custom craftsmanship make every BRABUS supercar unique in its class.
        </p>
        <div className="mx-auto my-20 w-[90%] flex flex-row flex-wrap justify-center gap-10 ">
          {carData.map((item) => (
            <CarCard key={item.id} id={item.id} name={item.name} img={item.img} description={item.description} price={item.price} powerTorque={item.power_torque} engine={item.engine} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-center xl:text-3xl text-xl">OUR SATISFIED CUSTOMER</h2>
        <div className="flex justify-center w-full flex-wrap py-10">
          <div className="w-[580px] mx-4 my-4 flex xl:flex-row flex-col items-center p-7 bg-gray-200">
            <img className="w-72 mr-5" src="/producsPage/satisfied-costumer/cristianoronaldo.webp" width={100} height={100} alt="ronaldo" />
            <div className="w-64">
              <Image className="w-6" src="/producsPage/satisfied-costumer/upquote.png" width={10} height={10} alt="quote" />
              <h2 className="ml-5 text-lg font-semibold">Cristiano Ronaldo</h2>
              <p className="ml-5">
                Driving Brabus supercars is a thrill like no other. The perfect fusion of power and elegance makes every journey an exhilarating experience. It&apos;s not just a car; it&apos;s a statement of unmatched performance and style
              </p>
              <Image className="w-6 ml-auto" src="/producsPage/satisfied-costumer/downquote.png" width={10} height={10} alt="quote" />
            </div>
          </div>
          <div className="w-[580px] mx-4 my-4 flex xl:flex-row flex-col items-center p-7 bg-gray-200">
            <img className="w-72 mr-5" src="/producsPage/satisfied-costumer/blonde.jpg" width={10} height={10} alt="quote" />
            <div className="w-64">
              <Image className="w-6" src="/producsPage/satisfied-costumer/upquote.png" width={10} height={10} alt="blondie" />
              <h2 className="ml-5 text-lg font-semibold">Supercar blondie</h2>
              <p className="ml-5">Unleashing the ultimate automotive dreams, Brabus supercars redefine luxury and performance. From futuristic designs to mind-bending speeds, each model is a unique masterpiece.</p>
              <Image className="w-6 ml-auto" src="/producsPage/satisfied-costumer/downquote.png" width={10} height={10} alt="quote" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
