import heroBannerImage from 'figma:asset/4e0ac645121bdf207b06221a1da459894e461836.png';

export function AboutHeroBanner() {
  return (
    <section className="w-full relative landscape-safe" style={{ height: 'clamp(40vh, 50vw, 80vh)' }}>
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
