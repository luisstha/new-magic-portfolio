import { useState, useEffect, useRef } from "react";
import audienceImage from "@/assets/audience-grayscalee.jpg";

const About = () => {
  const [scale, setScale] = useState(1);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 100;

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      if (!bgRef.current) return;
      
      const rect = bgRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInViewport) {
        const elementMidpoint = rect.top + rect.height / 2;
        const viewportMidpoint = window.innerHeight / 2;
        const distance = Math.abs(elementMidpoint - viewportMidpoint);
        const maxDistance = window.innerHeight / 2 + rect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const scrollProgress = 1 - normalizedDistance;
        const newScale = 1 + (scrollProgress * 0.15);
        setScale(newScale);
      } else {
        setScale(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden py-8 md:py-12 px-4 md:px-[15px] bg-slate-50">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div 
          className="relative grayscale overflow-hidden rounded-[40px] md:rounded-[100px]"
          style={{
            minHeight: '500px',
          }}
        >
          <div 
            ref={bgRef}
            className="absolute inset-0" 
            style={{
              backgroundImage: `url(${audienceImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `scale(${scale})`,
              transition: 'transform 0.1s ease-out',
              transformOrigin: 'center center'
            }}
          />
          <div className="absolute inset-0 bg-primary/60 mx-0 my-0 px-0 rounded-[40px] md:rounded-[100px]" />
        
          <div className="relative max-w-4xl mx-auto text-center py-8 px-4 md:py-[40px] md:px-[32px]">
            <h2 className="font-sansita font-bold text-white mb-6 md:mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              ABOUT LUIS
            </h2>
            <p className="font-raleway text-white mb-4 md:mb-6 text-base md:text-lg lg:text-xl leading-relaxed">
              Luis spent most of his adulthood locked in a room, practicing magic. 
              Now, he presents the skills he acquired in that room in a highly 
              entertaining and unique way, often playing the character of the person 
              he wishes to be in real life.
            </p>
            <p className="font-raleway text-white text-base md:text-lg lg:text-xl leading-relaxed">
              Recognized as <em>Nepal's finest sleight of hand artist</em>, Luis quickly became the <em>president of the Nepali Brotherhood of Magicians</em>, the country's only organization dedicated to magicians. His passion for the craft has fostered a strong sense of responsibility toward shaping the future of magic and live performances in Nepal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
