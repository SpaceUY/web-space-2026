"use client";

import { useRef, useEffect } from "react";

interface Props {
  text: string;
  author: string;
  role: string;
  photo?: string;
  linkedin?: string;
}

export default function QuoteReveal({ text, author, role, photo, linkedin }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="py-20 md:py-28"
      style={{ background: "var(--sd-purple-deep)" }}
    >
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <figure className="text-center">

          {/* Quote mark */}
          <svg
            width="48"
            height="36"
            viewBox="0 0 48 36"
            className="mx-auto mb-8 opacity-30"
            fill="#a78bfa"
            aria-hidden="true"
          >
            <path d="M14 0C6.27 0 0 6.27 0 14v22h22V14H8c0-3.31 2.69-6 6-6V0zm26 0c-7.73 0-14 6.27-14 14v22h22V14H34c0-3.31 2.69-6 6-6V0z" />
          </svg>

          {/* Quote text */}
          <blockquote
            className="text-2xl md:text-3xl lg:text-4xl font-body font-light leading-snug quote-reveal-block"
            style={{ wordBreak: "normal", overflowWrap: "break-word" }}
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="quote-word"
                style={{
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {word}{" "}
              </span>
            ))}
          </blockquote>

          {/* Author */}
          <figcaption className="mt-10 flex flex-col items-center gap-4">
            {photo && (
              <img
                src={photo}
                alt={author}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover grayscale border-2 border-white/20"
              />
            )}
            <div>
              <p className="text-white font-medium">{author}</p>
              <p className="text-sm" style={{ color: "var(--sd-text-muted)" }}>
                {role}, SpaceDev
              </p>
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs hover:text-white transition-colors uppercase tracking-widest"
                  style={{ color: "var(--sd-text-muted)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  Connect with me
                </a>
              )}
            </div>
          </figcaption>

        </figure>
      </div>
    </div>
  );
}
