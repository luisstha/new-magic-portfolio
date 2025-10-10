import stageShowImage from "@/assets/stage-show-1.jpg";
import closeupMagicImage from "@/assets/closeup-magic.jpg";
import eventHostingImage from "@/assets/event-hosting.jpg";
const Performances = () => {
  return <section className="py-12 md:py-20 px-4 md:px-8 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-raleway text-accent uppercase mb-4 tracking-wider mx-0 font-normal text-lg md:text-xl lg:text-2xl">
            PERFORMANCES
          </h2>
          <div className="relative inline-block">
            <h3 className="font-sansita font-bold text-foreground text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-2">
              Make your event unforgettable!
            </h3>
            <svg className="absolute left-0 w-full transition-all duration-300 hover:translate-y-1" style={{
            top: 'calc(100% + 2px)',
            height: '20px'
          }} viewBox="0 0 800 20" preserveAspectRatio="none">
              <path d="M 10 10 Q 200 15, 400 8 T 790 12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Stage Show - Image on right, text on left */}
        <div className="mb-12 md:mb-20 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-left order-2 md:order-1">
            <h4 className="font-sansita font-bold text-foreground mb-4 md:mb-6 text-center text-2xl md:text-3xl lg:text-4xl">Stage Show</h4>
            <p className="font-raleway text-foreground/80 text-center text-base md:text-lg lg:text-xl leading-relaxed">
              Luis’s stage show delivers an unforgettable blend of magic, mentalism, and comedy—wrapped in an atmosphere of wonder and entertainment. Every performance is highly interactive, with audience members becoming an integral part of the experience, whether from their seats or live on stage. Perfectly adaptable for groups of 15 to 500 guests, Luis tailors each show to suit the occasion, offering anything from a fast-paced 10-minute feature to a full hour of jaw-dropping entertainment that leaves audiences amazed.
            </p>
          </div>
          <div className="rounded-lg md:rounded-2xl overflow-hidden shadow-medium order-1 md:order-2">
            <img src={stageShowImage} alt="Luis performing on stage with an engaged audience" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Strolling & Close-Up Magic - Image on left, text on right */}
        <div className="mb-12 md:mb-20 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="rounded-lg md:rounded-2xl overflow-hidden shadow-medium order-1 md:order-1">
            <img src={closeupMagicImage} alt="Luis performing close-up magic with a small group" className="w-full h-auto object-cover" />
          </div>
          <div className="text-right order-2 md:order-2">
            <h4 className="font-sansita font-bold text-foreground mb-4 md:mb-6 text-center text-2xl md:text-3xl lg:text-4xl">
              Strolling & Close-Up Magic
            </h4>
            <p className="font-raleway text-foreground/80 text-center text-base md:text-lg lg:text-xl leading-relaxed">
              Luis's strolling magic is ideal for events that demand seamless entertainment, 
              such as restaurants, corporate gatherings, and cocktail hours. He effortlessly 
              captivates small groups with his impressive magic, creating a moment to remember. 
              In more intimate settings, Luis can also present a close-up magic show, ensuring 
              that every guest is fully engaged. As a master sleight-of-hand artist, Luis leaves 
              a lasting impression, whether performing up close or mingling with the crowd, giving 
              guests a moment to remember.
            </p>
          </div>
        </div>

        {/* Event Hosting - Text on left, image on right */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-left order-2 md:order-1">
            <h4 className="font-sansita font-bold text-foreground mb-4 md:mb-6 text-center text-2xl md:text-3xl lg:text-4xl">Event Hosting</h4>
            <p className="font-raleway text-foreground/80 text-center text-base md:text-lg lg:text-xl leading-relaxed">
              With a strong background in hosting stand-up comedy shows, Luis brings 
              the perfect blend of timing, charisma, and crowd connection to every stage. 
              His experience in live entertainment allows him to create a seamless flow 
              between performances, keeping audiences fully engaged from start to finish.
            </p>
          </div>
          <div className="rounded-lg md:rounded-2xl overflow-hidden shadow-medium order-1 md:order-2">
            <img src={eventHostingImage} alt="Luis hosting an event on stage with an engaged audience" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default Performances;