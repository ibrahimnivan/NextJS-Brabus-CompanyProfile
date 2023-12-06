import Image from "next/image";

const CarCard = ({ id, name, img, description, powerTorque, engine, price }) => {
  return (
    <div className="w-80 cursor-pointer mb-10">
      <Image className="brightness-95" width={400} height={400} src={`/producsPage/${img}`} alt={name} />
      <h2 className="xl:text-xl text-base font-semibold mt-5">{name}</h2>
      <p className="text-sm xl:text-base text-gray-600 pb-2">{description}</p>
      <p className="text-sm xl:text-base text-gray-600 pb-2">{price}</p>
      <p className="text-sm xl:text-base text-gray-600">
        <Image className="inline-block h-4 mr-3" width={17} height={20} src="/producsPage/icon/engine.png" alt="engile-logo" />
        {engine}
      </p>
      <p className="text-sm xl:text-base text-gray-600">
        <Image className="inline-block h-4 mr-2" width={17} height={20} src="/producsPage/icon/power.png" alt="power and torque" /> {powerTorque}
      </p>
    </div>
  );
};

export default CarCard;
