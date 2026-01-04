import heroBannerImage from 'figma:asset/4e0ac645121bdf207b06221a1da459894e461836.png';

export function AboutHeroBanner() {
  return (
    <section className="w-full h-[60vh] lg:h-[80vh] sticky top-0 z-0">
      <div className="w-full h-full">
        <img 
          src={heroBannerImage} 
          alt="About hero banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
