"use client"
import { useState } from "react";
import MultipleItems from "@/components/Carousel";
import Link from "next/link";

import Image from "next/image";


const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState({
    number: 1,
    caption: "LEGENDS NEVER DIE.",
    linkCaption: "BRABUS 900 R",
    link: "./products",
  });

  const handleButtonClick = (videoNumber, caption, linkCaption, link) => {
    setCurrentVideo({
      number: videoNumber,
      caption: caption,
      linkCaption: linkCaption,
      link: link,
    });
  };
  return (
    <div className=''>
      <div id='videotron' className='w-full relative'>
        <video
          loop
          autoPlay
          muted
          className='w-full h-[92vh] object-cover'
          key={currentVideo.number}
        >
          <source
            src={`/video/video-hero${currentVideo.number}.mp4`}
            type='video/mp4'
          />
        </video>
        <figcaption className='absolute top-[60%] left-1/2 transform -translate-x-1/2 flex '>
          <h2 className='text-white xl:text-3xl text-lg font-light'>
            {currentVideo.caption}
          </h2>
        </figcaption>
        <div
          id='link-profile'
          className='w-40 hover:bg-orange-600 absolute top-[69%] bg-black left-1/2 transform -translate-x-1/2 flex items-center justify-center'
        >
          <a
            className='px-4 py-2 text-white  inline-block'
            href={currentVideo.link}
          >
            {currentVideo.linkCaption}
          </a>
        </div>
        <div className='absolute top-[83%] left-1/2 transform -translate-x-1/2  flex justify-center mt-4 mx-auto'>
          <button aria-label="home page segment button"
            onClick={() =>
              handleButtonClick(
                1,
                "LEGENDS  NEVER  DIE.",
                "BRABUS 900 R",
                "./products"
              )
            }
            className='mx-2 px-4 py-2'
          >
            <span className='block h-[5px] w-8 bg-slate-300 hover:bg-orange-700'></span>
          </button>
          <button aria-label="home page segment button"
            onClick={() =>
              handleButtonClick(
                2,
                "#SignatureNight23",
                "FULL SHOW",
                "https://www.youtube.com/watch?v=Rz7GExEtlUo"
              )
            }
            className='mx-2 px-4 py-2 '
          >
            <span className='block h-[5px] w-8 bg-slate-300 hover:bg-orange-700'></span>
          </button>
          <button aria-label="home page segment button"
            onClick={() =>
              handleButtonClick(
                3,
                "THE WORLD OF BRABUS",
                "FULL VIDEO",
                "https://youtu.be/PzR-x-ADXrY?si=gjKvVfz9_UFtLCwt"
              )
            }
            className='mx-2 px-4 py-2 '
          >
            <span className='block h-[5px] w-8 bg-slate-300 hover:bg-orange-700'></span>
          </button>
        </div>
        <div className='border-b-2'>
          <div className='h-auto w-[80%] mx-auto flex justify-center flex-wrap items-center xl:gap-20'>
            <a
              className='xl:py-3 text-black py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-slate-200'
              href='#company-overview'
            >
              OVERVIEW
            </a>
            <a
              className='xl:py-3 text-black py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-slate-200'
              href='#signature'
            >
              SIGNATURE
            </a>
            <a
              className='xl:py-3 text-black py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-slate-200'
              href='#products'
            >
              SUPERCARS
            </a>
            <a
              className='xl:py-3 text-black py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-slate-200'
              href='#media-review'
            >
              MEDIA REVIEW
            </a>
          </div>
        </div>
      </div>

      <section id="company-overview" className="mx-auto">
        <h2 className="font-medium text-center mt-16 pt-5 mb-12 xl:text-3xl text-lg">UNLEASH THE BEAST <span className="mx-2 ">|</span> BRABUS OVERVIEW</h2>
        <div id="overview-grid" className="mx-auto">
          <div id="welcome" className="max-w-4xl mx-auto">
            <h2 className="xl:text-2xl text-lg mb-2 text-center ">Welcome to Brabus Tuning</h2>
            <p className="xl:text-lg text-base text-justify px-3">
              At Brabus, we don&apos;t just modify cars; we elevate them to unprecedented levels of performance, luxury, and style. With a legacy rooted in precision engineering and a passion for automotive innovation, Brabus Tuning stands as a
              beacon of excellence in the world of high-performance vehicles.
            </p>
          </div>
          <div id="history" className="max-w-4xl mx-auto mt-6 mb-10">
            <h2 className="xl:text-2xl text-lg mb-2 text-center">Our Brief History</h2>
            <p className="xl:text-lg text-base text-justify px-3">
              The company name was derived from the first three characters of the founders&apos; surnames (<strong>Bra</strong>ckmann, <strong>Bus</strong>chmann). The company began with Bodo Buschmann wanting to customise his cars. Discovering
              most existing customisers could not grasp his vision or meet his requirements, he started his own brand. Brabus GmbH was registered in 1977 in West Germany with Buschmann&apos;s friend Klaus Brackmann to satisfy German law
              requiring a company to be established with at least two people.{" "}
            </p>
          </div>
          <div id="signature" className="bg-black text-gray-200 py-12">
            <div id="principles" className="">
              <h2 className="xl:text-2xl text-xl mb-10 text-center font-semibold pt-8">THE BRABUS DIFFERENCE</h2>
              <div className="xl:text-lg text-xs grid xl:grid-cols-3 grid-cols-2 justify-items-center px-4 max-w-5xl mx-auto">
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <Image src="/brabus-difference/Engine.jpg"  width={200} height={200} alt="brabus-signature" />
                  <figcaption className="mt-5">UNPARALLELED ENGINE PERFORMANCE.</figcaption>
                </figure>
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <Image src="/brabus-difference/Materials.jpg" width={200} height={200} alt="brabus-signature" />
                  <figcaption className="mt-5">MOST EXQUISITE MATERIALS AVAILABLE.</figcaption>
                </figure>
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <Image src="/brabus-difference/Exterior.jpg" width={200} height={200} alt="brabus-signature" />
                  <figcaption className="mt-5">EXTRAORDINARY EXTERIOR.</figcaption>
                </figure>
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <Image src="/brabus-difference/wheels.jpg" width={200} height={200} alt="brabus-signature" />
                  <figcaption className="mt-5">WHEELS & CHASSIS. FORGED IN PERFECTION.</figcaption>
                </figure>
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <Image src="/brabus-difference/Interior.jpg" width={200} height={200} alt="brabus-signature" />
                  <figcaption className="mt-5">MASTERPIECE LUXURY INTERIOR.</figcaption>
                </figure>
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <Image src="/brabus-difference/exhaust.jpg" width={200} height={200} alt="brabus-signature" />
                  <figcaption className="mt-5">PURE ADRENALINE EXHAUST SOUND.</figcaption>
                </figure>
              </div>
            </div>
            <div id="services" className="mt-16 max-w-4xl px-4 mx-auto pb-10">
              <h2 className="text-2xl mb-1 text-center font-semibold">Our Services</h2>
              <table className="min-w-full a">
                <tbody className="xl:text-xl text-sm ">
                  <tr className="">
                    <td className="xl:px-6 px-3 py-2 align-text-top text-orange-800">Performance Tuning:</td>
                    <td className="xl:px-6 px-3 py-2 align-text-top">Unleash the full potential of your vehicle with our expertly crafted performance tuning packages.</td>
                  </tr>

                  <tr>
                    <td className="xl:px-6 px-3 py-2 align-text-top text-orange-800">Aesthetic Enhancements:</td>
                    <td className="xl:px-6 px-3 py-2 align-text-top">Elevate the visual appeal of your car with our custom body kits, wheels, and interior upgrades.</td>
                  </tr>

                  <tr>
                    <td className="xl:px-6 px-3 py-2 align-text-top text-orange-800">Exclusive Editions:</td>
                    <td className="xl:px-6 px-3 py-2 align-text-top">Experience automotive luxury like never before with our limited-edition models, each a masterpiece in its own right.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="media-review" className="bg-testimonials-background">
        <h2 className="text-center xl:pt-24 pt-10 font-semibold text-gray-700 text-2xl xl:text-4xl">MEDIA REVIEW</h2>
        <h3 className="text-center text-xs">(Testimonials)</h3>
        <div id="cards" className="flex flex-row flex-wrap xl:mt-36 mt-10 justify-center gap-5 px-5 pb-24">
          <div id="card" className="w-[350px]  text-center bg-[#e9ecef] bg-opacity-75">
            <Image className="w-32 mx-auto py-4" src="/media-review/CarandDriver.png" width={128} height={128} alt="car & driver logo" />
            <p className="px-6 pb-6 ">
              In their latest review, Car and Driver Magazine showers praise on the Brabus 900 NLP 6x6 for its exceptional blend of power and refinement. The tech-savvy features, including comprehensive driver-assistance suite, left the
              reviewers thoroughly impressed. Car and Driver concludes that the Brabus 900 NLP 6x6 isn&apos;t just a car; it&apos;s a driving revelation, setting a thrilling standard for the modern, tech-forward enthusiast.
            </p>
          </div>
          <div id="card" className="w-[350px]  text-center bg-[#e9ecef] bg-opacity-75">
            <Image className="w-32 mx-auto py-4" src="/media-review/topGear.svg" width={128} height={128} alt="top gear logo" />
            <p className="px-6 pb-6 ">
              TopGear Magazine&apos;s latest review of the 900 R is nothing short of a love letter to automotive excellence. The editors are raving about the jaw-dropping performance, describing the engine&apos;s roar as a symphony of power. The
              cutting-edge technology leaves them spellbound, TopGear&apos;s verdict? 900 R is not just a car; it&apos;s a masterpiece on wheels, setting a new standard for performance and sophistication in the automotive world
            </p>
          </div>
          <div id="card" className="w-[350px]  text-center bg-[#e9ecef] bg-opacity-75">
            <Image className="w-32 mx-auto py-4" src="/media-review/motorTrend.png" width={128} height={128} alt="motor trend logo" />
            <p className="px-6 pb-6 ">
              MotorTrend Magazine is giving the praises of the Brabus 750 Bodo Buschmann Edition, declaring it a triumph in automotive engineering. The review emphasizes the Brabus 750 Bodo Buschmann Edition&apos;s blistering performance, with
              the roaring engine and precise handling turning every drive into a visceral adventure. The striking design doesn&apos;t just turn heads; it demands a second look. MotorTrend Magazine concludes that the Bodo Buschmann Edition
              ignites thrilling benchmark for performance enthusiasts.
            </p>
          </div>
        </div>
      </section>
      <section id="products" className="xl:mb-20 mb-10">
        <MultipleItems />
        <div id="link-profile" className="w-40 top-[69%] bg-black flex items-center justify-center mx-auto xl:mt-16 mt-12 hover:bg-orange-600">
          <Link href="/products" className="px-3 py-2 text-white inline-block"  >
          See More
          </Link>
        </div>
      </section> 
    </div>
  );
};

export default HomePage;
