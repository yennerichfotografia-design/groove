import { useRef, useEffect } from 'react';

export function HeroBanner() {
  const videoDesktopRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoDesktopRef.current;
    if (video) video.play().catch(() => {});
  }, []);

  const handleEndedDesktop = () => {
    setTimeout(() => {
      if (videoDesktopRef.current) {
        videoDesktopRef.current.currentTime = 0;
        videoDesktopRef.current.play();
      }
    }, 3000);
  };

  return (
    <div className="bg-black">
      {/* Mobile */}
      <div className="lg:hidden relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full block"
        >
          <source src="/hero-banner-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* Desktop - sticky scroll */}
      <div className="hidden lg:block relative" style={{ height: '200vh' }}>
        <div className="sticky top-0 w-full h-screen">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
          <video
            ref={videoDesktopRef}
            autoPlay
            muted
            playsInline
            preload="metadata"
            onEnded={handleEndedDesktop}
            className="w-full h-full object-cover"
          >
            <source src="/hero-banner-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
