import React, { useRef, useState, useEffect } from "react";
import "./Video.css";

function Video({
  url,
  channel,
  description,
  likes,
  messages,
  shares,
  isAd,
  adLink,
  poster,
}) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showMutedMessage, setShowMutedMessage] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Автовоспроизведение, пауза по вхождению в экран
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsActive(isVisible);
      },
      { threshold: 0.8 }
    );

    const el = videoRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Воспроизведение и остановка при активности
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch((e) => console.warn("play error", e));
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const handleClick = (e) => {
    if (
      e.target.closest(".video__sidebar") ||
      e.target.closest(".video__footer")
    )
      return;

    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (nextMuted) {
      setShowMutedMessage(true);
      setTimeout(() => setShowMutedMessage(false), 1500);
    }
  };

  return (
    <div className="video" onClick={handleClick}>
      {isLoading && <div className="video__loading">Загрузка...</div>}

      <video
        ref={videoRef}
        className="video__player"
        src={url}
        poster={poster}
        playsInline
        loop
        muted
        preload="auto"
        onCanPlay={() => setIsLoading(false)}
        onWaiting={() => setIsLoading(true)}
      />

      <div className="video__sidebar">
        <div className="video__button">
          <span className="material-symbols-outlined" style={{ fontSize: "36px" }}>thumb_up</span>
          <span>{likes}</span>
        </div>
        <div className="video__button">
          <span className="material-symbols-outlined" style={{ fontSize: "36px" }}>thumb_down</span>
        </div>
        <div className="video__button">
          <span className="material-symbols-outlined" style={{ fontSize: "36px" }}>comment</span>
        </div>
        <div className="video__button">
          <span className="material-symbols-outlined" style={{ fontSize: "36px" }}>share</span>
        </div>
      </div>

      <div className="video__footer">
        {!isAd ? (
          <>
            <div className="video__channel">
              <strong>@{channel}</strong>
              <button>Abonnieren</button>
            </div>
            <div className="video__description">{description}</div>
          </>
        ) : (
          <>
            <div className="video__description">{description}</div>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="video__register-button centered"
            >
              Jetzt registrieren
            </a>
          </>
        )}
      </div>

      {showMutedMessage && <div className="video__loading">🔇 Ton ist aus</div>}
    </div>
  );
}

export default Video;
