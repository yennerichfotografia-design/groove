import heroBannerImage from 'figma:asset/4e0ac645121bdf207b06221a1da459894e461836.png';

export function HeroBanner() {
  return (
    <section className="relative w-full" style={{ height: '200vh' }}>
      {/* Sticky image container - stays fixed while user scrolls */}
      <div className="sticky top-0 left-0 w-full h-screen z-0">
        <div className="w-full h-full">
          <img 
            src={heroBannerImage} 
            alt="Creative vision"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}