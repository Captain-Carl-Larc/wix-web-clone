

    function Hero() {
  const heroImage = (
    <img
      src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg"
      alt="Placeholder banner image"
    />
  );
  return (
    <section className="pt-20 md:pt-32 grid md:grid-rows-1 md:grid-cols-2 gap-2 md:gap-4 p-4 md:p-8 bg-gray-100 items-center h-screen ">
      <div
        id="text-container"
        className="flex flex-col justify-start md:mt-16 items-center md:items-start text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4  text-gray-900 text-shadow-gray-800 ">
          Welcome to <span className="text-blue-800">Dentoo </span>Care. Your
          Home for Exceptional Dental Care.
        </h1>
        <p className="text-lg mb-6 text-gray-900 font-light">
          We offer a full spectrum of dental services for your entire family,
          delivered with a gentle touch and a commitment to your long-term oral
          well-being. Start your journey to a brighter smile today.
        </p>
        <div className="buttons-container flex space-between justify-center items-center md:justify-start mb-8 md:mb-0">
          <button className="bg-blue-500 font-bold cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Explore Our Services
          </button>
        </div>
      </div>
      <div id="visual-container" className="flex justify-center items-center">
        <div className="hero-image-container rounded-xl shadow-lg overflow-hidden max-w-md ">
          {heroImage}
        </div>
      </div>
    </section>
  );
}


export default Hero;
