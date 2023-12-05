import Image from "next/image";

export const metadata = {
  title: 'about us - page',
  description: 'Intoduction Brabus Company History, Teams and Culture',
}

function AboutUs() {
  return (
    <div>
      <div className="">
        <div className="max-w-3xl mx-auto mb-24">
          <h1 className="mt-20 text-center xl:text-4xl text-2xl font-semibold">WE CREATE MODERN, INDIVIDUAL LUXURY.</h1>
          <p className="xl:text-lg text-sm text-center mt-7 px-5 leading-7">
            With innovative technology, highest-quality materials, unwavering attention to detail and tasteful, dynamic aesthetics, we develop products with the signature BRABUS 1-Second-Wow factor that underline our customers
            personalities. <br />
            Based in the heart of North Rhine-Westphalia in Germany, the city of Bottrop has been our home since 1977. From here we cater to our international customers in over 100 countries.
          </p>
        </div>

        <section id="history">
          <h2 className="mb-5 text-center xl:text-4xl text-2xl font-medium">THE HISTORY OF BRABUS</h2>
          <p className="max-w-4xl mx-auto xl:text-lg text-sm px-5">
            <br />
            <strong className="mr-2">Genesis (1977-1984)</strong>
            Founded in 1977 by Bodo Buschmann, BRABUS emerged as a tuning company in Bottrop, Germany. The name "BRABUS" is derived from the first three characters of Bodo Buschmann's name and the city of Bottrop. The company started its
            journey by specializing in the maintenance and enhancement of high-performance Mercedes-Benz vehicles. The commitment to precision and performance quickly gained attention, laying the foundation for what would become a global
            automotive phenomenon.
            <br />
            <br />
            <strong className="mr-2">The Birth of BRABUS (1984-1990)</strong>
            In 1984, BRABUS celebrated a significant milestone with the introduction of the BRABUS 190, based on the Mercedes 190 E 3.2. This marked the beginning of BRABUS' transformation into a premier tuning company, elevating the
            performance of Mercedes-Benz cars to unprecedented levels. The BRABUS 190 showcased the company's dedication to pushing the boundaries of automotive engineering.
            <br />
            <br />
            <div className="history-background">
              <img className="w-[80%] mx-auto py-5  " width={100} height={50} src="/aboutus/history.jpg" alt="brabus old photo" />
            </div>
            <br />
            <strong className="mr-2">Power and Innovation (1990s)</strong>
            As the 1990s unfolded, BRABUS solidified its reputation for combining luxury with extreme power. The BRABUS E V12, based on the Mercedes-Benz E-Class, made waves as the world's fastest sedan in 1996, reaching a top speed of 330
            km/h. This era saw the introduction of the BRABUS V12 engines, showcasing the company's prowess in creating high-performance powertrains.
            <br />
            <br />
            <strong className="mr-2">Beyond Boundaries (2000s)</strong>
            Entering the new millennium, BRABUS expanded its portfolio beyond Mercedes-Benz, offering tuning solutions for other luxury brands such as Maybach and Smart. The BRABUS ROCKET, based on the Mercedes-Benz CLS, gained
            international acclaim for setting a new top speed record for sedans at 365.7 km/h in 2006. The company's commitment to innovation and speed reached new heights.
            <br />
            <br />
            <strong className="mr-2">Global Recognition (2010s)</strong>
            BRABUS continued to make waves in the automotive world throughout the 2010s. The BRABUS 800 E V12 Cabriolet, based on the Mercedes-Benz E-Class, showcased not only blistering performance but also luxurious craftsmanship. The
            company's global presence expanded, with BRABUS becoming synonymous with exclusive, high-performance vehicles.
            <br />
            <br />
            <strong className="mr-2">Today and Tomorrow</strong>
            In the present day, BRABUS stands as a pinnacle of automotive tuning, with a product range that spans from powerful sedans to opulent SUVs and beyond. The BRABUS ROCKET 900 "ONE OF TEN," unveiled in 2019, epitomizes the
            company's commitment to pushing the limits of performance and exclusivity.
            <br />
            <br />
            As BRABUS continues to evolve, the legacy of Bodo Buschmann lives on, driving the company to explore new frontiers in automotive tuning. With an unwavering dedication to power, precision, and luxury, BRABUS remains at the
            forefront of the high-performance tuning industry, setting the standard for enthusiasts and connoisseurs worldwide.
          </p>
        </section>
        <section id="meetTeam">
          <h2 className="mb-5 text-center xl:text-4xl text-2xl font-medium mt-20">Meet the Driving Force: The Brabus Team</h2>
          <div className="flex flex-wrap gap-10 max-w-4xl justify-center mx-auto ">
            <div className="w-64 pb-5">
              <div className="bg-gradient-to-r from-indigo-700 to-gray-900 w-64 h-64 relative mt-10">
                <Image className="absolute bottom-0" width={258} height={327} src="/aboutus/teams/ceo.png" alt="ceo picture" />
              </div>
              <h3 className="text-center font-medium text-gray-700 text-2xl mt-5 mb-1">Cameron Deatsch</h3>
              <h4 className="text-center text-sm mb-3">CHIEF EXECUTION OFFICER</h4>
              <p className="text-justify">
                With a lifelong passion for high-performance vehicles, Cameron Deatsch has been a driving force in the automotive industry for over 15 years. Their visionary leadership has shaped Brabus into a symbol of automotive
                excellence.
              </p>
            </div>
            <div className="w-64">
              <div className="bg-gradient-to-r from-slate-800 to-red-950 w-64 h-64 relative mt-10">
                <Image className="absolute bottom-0" width={258} height={327} src="/aboutus/teams/marketing.png" alt="marketing chief picture" />
              </div>
              <h3 className="text-center font-medium text-gray-700 text-2xl mt-5 mb-1">Zeynep Ozdemir</h3>
              <h4 className="text-center text-sm mb-3">CHIEF MARKETING OFFICER</h4>
              <p className="text-justify">
                A maestro in crafting compelling narratives, Zeynep Ozdemir brings over 7 years of experience in the automotive marketing landscape. Their strategic vision has elevated Brabus's brand presence, creating a powerful resonance
                in the hearts of enthusiasts globally.
              </p>
            </div>
            <div className="w-64">
              <div className="bg-gradient-to-r from-rose-950 to-lime-900 w-64 h-64 relative mt-10">
                <Image className="absolute bottom-0" width={258} height={327} src="/aboutus/teams/production.png" alt="production manager picture" />
              </div>
              <h3 className="text-center font-medium text-gray-700 text-2xl mt-5 mb-1">Cameron Deatsch</h3>
              <h4 className="text-center text-sm mb-3">PRODUCTION MANAGER</h4>
              <p className="text-justify">
                At the helm of the production division, [Production Director's Name] oversees the intricate process of bringing supercars to life. With [X] years of experience in high-end automotive manufacturing, they ensure that precision
                and quality define every step of the production journey.
              </p>
            </div>
            <div className="w-64">
              <div className="bg-gradient-to-r from-purple-950 to-rose-950 w-64 h-64 relative mt-10">
                <Image className="absolute bottom-0" width={258} height={327} src="/aboutus/teams/engineer.png" alt="engineer picture" />
              </div>
              <h3 className="text-center font-medium text-gray-700 text-2xl mt-5 mb-1">Mike Cannon-Brookes</h3>
              <h4 className="text-center text-sm mb-3">LEAD ENGINEER</h4>
              <p className="text-justify">
                With a background in supercar engineering, Mike Cannon-Brookes leads our powertrain team, ensuring that every supercar boasts not only breathtaking design but also state-of-the-art engineering. Their 10 years of experience
                contribute to the innovation and performance that define Brabus Company.
              </p>
            </div>
            <div className="w-64">
              <div className="bg-gradient-to-r from-fuchsia-950 to-black w-64 h-64 relative mt-10">
                <Image className="absolute bottom-0" width={258} height={327} src="/aboutus/teams/designer.png" alt="designer photo" />
              </div>
              <h3 className="text-center font-medium text-gray-700 text-2xl mt-5 mb-1">Scott Farquhar</h3>
              <h4 className="text-center text-sm mb-3">LEAD DESIGNER</h4>
              <p className="text-justify">
                As the creative genius behind the aesthetic appeal of our supercars, Scott Farquhar brings over 5 years of experience in automotive design. Their portfolio includes iconic designs that have set new standards in the world of
                luxury and performance.
              </p>
            </div>
          </div>
        </section>
        <section id="culture" className="mt-20 xl:mb-24 mb-16">
          <h2 className="mb-5 text-center xl:text-4xl text-2xl font-medium mt-20">BRABUS CULTURE</h2>
          <div className="max-w-4xl mx-auto mb-7 px-5">
            <h3 className="py-2 xl:text-xl text-base font-semibold mb-2">Empathy and Collaboration</h3>
            <p className="xl:text-lg text-sm">
              <span className="font-medium">Kindness:</span> In the world of high-performance vehicles, our culture begins with kindness. We empathize with each team member, valuing their perspectives regardless of hierarchy. Whether working with colleagues or
              supporting our students on their journey, we prioritize compassion and understanding. <br />
              <br />
              <span className="font-medium">Collaborative Compassion:</span> Hierarchies hold no sway in our commitment to empathy. From team members to managers, we foster a culture where everyone's voice is heard and valued. Our empathy extends beyond the workshop,
              resonating with the dreams and anxieties of our students as they embark on their supercar experience.
            </p>
          </div>
          <div className="culture-background max-w-4xl mx-auto">
            <img className="w-[80%] mx-auto py-5" src="/aboutus/culture.jpg" width={100} height={50} alt="culture brabus" />
          </div>
          <div className="max-w-4xl mx-auto mb-7 px-5">
            <h3 className="py-2 xl:text-xl text-base font-semibold mb-2">Transparency and Authenticity</h3>
            <p className="xl:text-lg text-sm">
              <span className="font-medium">Candor and Openness:</span> Just as the sleek lines of our supercars are transparent in design, so too is our communication. We promote candor horizontally among teams, downward from management, and upward from team
              members. Breaking free from traditional workplace norms, we challenge the status quo and prioritize authenticity in our interactions.
              <br />
              <br />
              <span className="font-medium">Feedback-Driven Culture:</span> Constructive feedback is the engine that propels us forward. Seeking feedback is not a weakness; it's a strength. We encourage open dialogue to fuel innovation and growth, ensuring every member
              has a voice in shaping our collective success.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-7 px-5">
            <h3 className="py-2 xl:text-xl text-base font-semibold mb-2">Uncompromising Standards</h3>
            <p className="xl:text-lg text-sm">
              <span className="font-medium">Commitment to Excellence:</span> In the words of Walt Disney, "Around here, we try to be proud of every little piece of work we do." This sentiment echoes through every aspect of Brabus. Upholding the highest
              standards is not a choice but a way of life. It is a commitment to continuous improvement and a promise to deliver the utmost quality in every supercar we create. <br />
              <br />
              <span className="font-medium">Shared Responsibility:</span> We don't just expect excellence from ourselves; we expect it from our colleagues, direct reports, and peers. By setting the bar high, we create a culture where exceptional performance becomes the
              norm.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
