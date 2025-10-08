import eventHostingImage from "@/assets/event-hosting.jpg";

const EventHosting = () => {
  return (
    <section className="py-20 px-8 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Event Hosting
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              With a strong background in hosting stand-up comedy shows, Luis brings 
              the perfect blend of timing, charisma, and crowd connection to every stage. 
              His experience in live entertainment allows him to create a seamless flow 
              between performances, keeping audiences fully engaged from start to finish.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-medium">
            <img 
              src={eventHostingImage} 
              alt="Luis hosting an event on stage with an engaged audience" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHosting;
