const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 max-w-3xl ts-large-text" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>
        Inbox collaboration for teams <br/> that run on email
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-3xl">
        Experience the best services with us. Join now and take advantage of our exclusive offers.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Get Started
        </a>
        <a href="#" className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-100">
          Book a demo
        </a>
      </div>
    </section>
  );
};

export default Hero;
