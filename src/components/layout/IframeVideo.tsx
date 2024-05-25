import React from 'react';

type VideoEmbedProps = {
  videoLink: string;
};

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoLink }) => {
  // Função para extrair o ID do vídeo a partir do link do YouTube
  const extractVideoId = (url: string) => {
    const regex = /[?&]v=([^&#]*)/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  const videoId = extractVideoId(videoLink);

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
