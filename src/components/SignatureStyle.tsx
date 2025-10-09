const SignatureStyle = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="font-raleway text-foreground/80 mb-8 md:mb-16 text-center mx-auto max-w-4xl text-lg md:text-xl lg:text-2xl leading-relaxed">
          Luis's signature style blends masterful sleight of hand, magic, mentalism, 
          improv comedy, and dynamic audience interaction into a captivating theatrical 
          experience. His performances are unpredictable, funny, and packed with 
          hard-hitting moments.
        </p>
        
        {/* Desktop: Overlapping images */}
        <div className="hidden md:block relative max-w-5xl mx-auto" style={{ height: '600px' }}>
          <div
            className="absolute transition-transform duration-300 hover:scale-105"
            style={{ top: '30%', left: '10%', width: '30%', height: '35%', zIndex: 3 }}
          >
            <img
              src="/signature.jpg"
              alt="Luis performing in a vibrant venue"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
          <div
            className="absolute transition-transform duration-300 hover:scale-105"
            style={{ top: '20%', left: '30%', right: '0', width: '55%', height: '65%', zIndex: 2 }}
          >
            <img
              src="/signature-2.jpg"
              alt="Luis captivating the audience"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
          <div
            className="absolute transition-transform duration-300 hover:scale-105"
            style={{ top: '5%', right: '5%', width: '35%', height: '40%', zIndex: 4 }}
          >
            <img
              src="/signature-3.jpg"
              alt="Luis performing magic tricks"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative mx-auto" style={{ maxWidth: '400px', minHeight: '380px' }}>
          {/* First image - top left */}
          <div className="absolute" style={{ top: '5%', right: '0%', width: '45%', zIndex: 3 }}>
            <img
              src="/src/assets/signature.jpg"
              alt="Luis performing in a vibrant venue"
              className="w-full h-auto object-cover rounded-2xl shadow-xl aspect-[4/3]"
              loading="lazy"
            />
          </div>

          {/* Second image - center, larger */}
          <div className="absolute" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)', width: '80%', zIndex: 2 }}>
            <img
              src="/src/assets/signature-2.jpg"
              alt="Luis captivating the audience"
              className="w-full h-auto object-cover rounded-2xl shadow-xl aspect-[4/3]"
              loading="lazy"
            />
          </div>

          {/* Third image - bottom right */}
          <div className="absolute" style={{ top: '70%', left: '5%', width: '45%', zIndex: 4 }}>
            <img
              src="/src/assets/signature-3.jpg"
              alt="Luis performing magic tricks"
              className="w-full h-auto object-cover rounded-2xl shadow-xl aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureStyle;