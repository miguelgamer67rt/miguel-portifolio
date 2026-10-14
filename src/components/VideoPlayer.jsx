import { useState } from "react";

export default function VideoPlayer({ video }) {
  const [playing, setPlaying] = useState(false);
  const ready = Boolean(video.src || video.youtubeId);

  if (playing && ready) {
    return (
      <div className="player">
        {video.src ? (
          <video src={video.src} poster={video.poster || undefined} controls autoPlay playsInline />
        ) : (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      className="player player--idle"
      onClick={() => ready && setPlaying(true)}
      aria-disabled={!ready}
      aria-label={ready ? `Reproduzir: ${video.title}` : "Vídeo em breve"}
    >
      {video.poster && <img src={video.poster} alt="" />}
      <span className="player__play">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7L8 5Z" fill="currentColor" /></svg>
      </span>
      {!ready && <span className="player__note">Vídeo em breve</span>}
    </button>
  );
}
