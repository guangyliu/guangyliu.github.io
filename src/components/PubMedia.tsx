import { useEffect, useRef, useState } from 'react';

interface PubMediaProps {
  image: string;
  video?: string;
  alt: string;
}

// Thumbnail for a publication. Shows `image`; if `video` is given, the clip is
// only fetched once the card is near the viewport and pauses when off-screen.
export default function PubMedia({ image, video, alt }: PubMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!video || !el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [video]);

  return (
    <div className="pub-media">
      {video ? (
        <video
          ref={videoRef}
          src={load ? video : undefined}
          poster={image}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-label={alt}
        />
      ) : (
        <img src={image} alt={alt} loading="lazy" decoding="async" />
      )}
    </div>
  );
}
