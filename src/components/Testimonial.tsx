const Testimonial = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-4">
          <blockquote className="font-sansita font-bold text-foreground text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-2">
            "My mind is completely blown."
          </blockquote>
          <svg 
            className="absolute left-0 w-full transition-all duration-300 hover:translate-y-1"
            style={{ top: 'calc(100% + 2px)', height: '20px' }}
            viewBox="0 0 800 20"
            preserveAspectRatio="none"
          >
            <path 
              d="M 10 10 Q 200 15, 400 8 T 790 12" 
              stroke="currentColor" 
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="font-raleway text-red-600 mt-6 md:mt-8 text-base md:text-lg lg:text-xl leading-relaxed">
          Everybody who watches Luis perform,
        </p>
        
        {/* YouTube Video Section */}
        <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
          <div className="aspect-video rounded-lg md:rounded-2xl overflow-hidden shadow-large">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/EC61aoVQ6fk?rel=0" 
              title="Luis Shrestha Performance"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
