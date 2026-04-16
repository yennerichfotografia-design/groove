import midBannerImage from 'figma:asset/9c3653361db9587debdf0888ce64b70946f50410.png';

export function MidBanner() {
  return (
    <section className="relative w-full" style={{ height: '200vh' }}>
      <div className="sticky top-0 left-0 w-full h-screen z-0">
        <div className="w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover"
            poster={midBannerImage}
          >
            <source src="/mid-banner-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
