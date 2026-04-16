import { useRef, useEffect } from 'react';

export function MidBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full bg-black" style={{ height: '200vh' }}>
      <div className="sticky top-0 left-0 w-full h-dvh z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/mid-banner-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
