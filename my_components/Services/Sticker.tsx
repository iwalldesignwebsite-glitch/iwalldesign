// components/StickerPeel.tsx
"use client";

type StickerPeelProps = {
  imageSrc: string;
  alt?: string;
  size?: number; // px — szer/wys kwadratu
  radius?: number; // px — zaokrąglenie
  href?: string; // opcjonalnie: klik prowadzi do...
  className?: string;
};

export default function StickerPeel({
  imageSrc,
  alt = "Sticker",
  size = 280,
  radius = 16,
  href,
  className = "",
}: StickerPeelProps) {
  return (
    <a
      href={href || "#"}
      className={`sticker-peel ${className}`}
      style={
        {
          // konfig przez zmienne
          "--sticker-size": `${size}px`,
          "--sticker-radius": `${radius}px`,
        } as React.CSSProperties
      }
      aria-label={alt}
    >
      {/* obraz naklejki */}
      <img src={imageSrc} alt={alt} loading="lazy" decoding="async" />

      {/* połysk */}
      <span className="gloss" aria-hidden />

      {/* nic więcej nie trzeba – resztę robi CSS (::before / ::after + maski) */}
      <style jsx>{`
        .sticker-peel {
          --corner: 82px; /* wielkość „zawijanego” rogu */
          --progress: 0; /* 0..1 w animacji */
          --e: cubic-bezier(0.22, 1, 0.36, 1);

          position: relative;
          display: inline-block;
          width: var(--sticker-size);
          height: var(--sticker-size);
          border-radius: var(--sticker-radius);
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12),
            0 1px 0 rgba(0, 0, 0, 0.08) inset;
          transition: transform 0.4s var(--e), box-shadow 0.4s var(--e);
        }

        .sticker-peel:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.16),
            0 1px 0 rgba(0, 0, 0, 0.08) inset;
          --progress: 1;
        }

        .sticker-peel img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
          /* subtelny lakier bazowy */
          -webkit-mask-image: radial-gradient(
            closest-side,
            #000 98%,
            transparent 101%
          );
          mask-image: radial-gradient(closest-side, #000 98%, transparent 101%);
        }

        /* Połysk (przesuwna smuga) */
        .sticker-peel .gloss {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 35%,
            rgba(255, 255, 255, 0.25) 50%,
            rgba(255, 255, 255, 0) 65%
          );
          transform: translateX(-40%);
          transition: transform 0.8s var(--e), opacity 0.8s var(--e);
          opacity: 0.25;
          mix-blend-mode: screen;
        }

        .sticker-peel:hover .gloss {
          transform: translateX(5%);
          opacity: 0.35;
        }

        /* ======= magia rogu: dwa pseudo-elementy ======= */

        /* 1) „spód folii” (biało-szary trójkąt) */
        .sticker-peel::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: var(--corner);
          height: var(--corner);
          border-bottom-right-radius: calc(
            var(--sticker-radius) * (1 - var(--progress))
          );
          /* trójkąt rogowy przez clip-path */
          -webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%);
          clip-path: polygon(100% 0, 0 100%, 100% 100%);
          background: linear-gradient(
            135deg,
            #f8fafc 0%,
            #e2e8f0 60%,
            #cbd5e1 100%
          );
          box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.08);
          transform-origin: bottom right;
          /* „zawijanie” – rotacja w osi X + drobne uniesienie */
          transform: translateZ(0) rotateX(calc(-14deg * var(--progress)))
            translate(
              calc(-12px * var(--progress)),
              calc(-8px * var(--progress))
            );
          transition: transform 0.5s var(--e),
            border-bottom-right-radius 0.5s var(--e);
        }

        /* 2) cień od zawijanego rogu, miękki i rosnący */
        .sticker-peel::before {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: var(--corner);
          height: var(--corner);
          -webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%);
          clip-path: polygon(100% 0, 0 100%, 100% 100%);
          background: radial-gradient(
            120% 120% at 100% 100%,
            rgba(0, 0, 0, 0) 40%,
            rgba(0, 0, 0, 0.18) 68%,
            rgba(0, 0, 0, 0.28) 88%
          );
          filter: blur(calc(6px + 10px * var(--progress)));
          opacity: calc(0.35 * var(--progress));
          transform: translate(
            calc(2px * var(--progress)),
            calc(2px * var(--progress))
          );
          transition: opacity 0.5s var(--e), filter 0.5s var(--e),
            transform 0.5s var(--e);
          pointer-events: none;
        }
      `}</style>
    </a>
  );
}
