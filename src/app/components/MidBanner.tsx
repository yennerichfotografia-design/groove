import midBannerImage from 'figma:asset/9c3653361db9587debdf0888ce64b70946f50410.png';

export function MidBanner() {
  return (
    <section className="relative w-full" style={{ height: '200vh' }}>
      {/* Sticky image container - stays fixed while user scrolls */}
      <div className="sticky top-0 left-0 w-full h-screen z-0">
        <div className="w-full h-full">
          <img 
            src={midBannerImage} 
            alt="Creative expression"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
