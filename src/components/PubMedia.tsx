import { useEffect, useRef, useState } from 'react';
import { asset } from '../version';

interface PubMediaProps {
  image: string;
  video?: string;
  alt: string;
  href?: string;
}

// Thumbnail for a publication. Shows `image`; if `video` is given, the clip is
// only fetched once the card is near the viewport and pauses when off-screen.
export default function PubMedia({ image, video, alt, href }: PubMediaProps) {
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

  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper className="pub-media" {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {video ? (
        <video
          ref={videoRef}
          src={load ? asset(video) : undefined}
          poster={asset(image)}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-label={alt}
        />
      ) : (
        <img src={asset(image)} alt={alt} loading="lazy" decoding="async" />
      )}
    </Wrapper>
  );
}
