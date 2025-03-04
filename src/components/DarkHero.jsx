const DarkHero = () => {
    return (
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-900 text-white">
        <h1 
          className="text-4xl font-bold mb-4 max-w-3xl ts-large-text"
          style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}
        >
          We live in our inboxes.
          <br/> Let’s make email enjoyable.

        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl">
          Experience the best services with us. Join now and take advantage of our exclusive offers.
        </p>
        <div className="flex space-x-4">
  <a href="#" className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
    Get Started
  </a>
  <a href="#" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
    Book a demo
  </a>
</div>


      </section>
    );
  };
  
  export default DarkHero;
  