import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import { isMobile } from "../utils/domUtils";
import {
  getExternalVideoThumb,
  getYoutubeSrc,
  isExternalVideo,
  isPhoto,
} from "../utils/stringUtils";

type Props = {
  url: string | IGatsbyImageData;
  alt?: string;
};

const MediaPreview = ({ url, alt = "" }: Props) => {
  if (!url) return null;

  const isGatsbyImage = typeof url === "object";
  if (isGatsbyImage) {
    return (
      <GatsbyImage
        objectFit="contain"
        image={url as IGatsbyImageData}
        alt={alt}
      />
    );
  }

  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the element is in the viewport, start playing the video
        if (videoRef?.current) {
          if (isExternalVideo(url)) {
            const ref = videoRef.current as any;
            if (entries[0].isIntersecting && !isMobile) {
              ref?.contentWindow?.postMessage(
                '{"event":"command","func":"mute","args":""}',
                "*"
              );

              ref?.contentWindow?.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*"
              );
            } else {
              ref?.contentWindow?.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
            }
          } else {
            const ref = videoRef.current as HTMLVideoElement;
            if (entries[0].isIntersecting && !isMobile) {
              ref.play();
            } else {
              ref.pause();
            }
          }
        }
      },
      { threshold: 0.5 }
    );

    // Observe the element
    videoRef?.current && observer.observe(videoRef.current);

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto">
      {isPhoto(url) ? (
        <img id="media-player-photo" src={url} />
      ) : (
        <div>
          {isExternalVideo(url) ? (
            <div>
              <iframe
                width="100%"
                height="100%"
                src={getYoutubeSrc(url)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="min-h-[300px]"
                ref={videoRef}
                seamless
                sandbox="allow-scripts allow-same-origin allow-presentation"
              ></iframe>
            </div>
          ) : (
            <video
              id="media-player-video"
              muted
              className="min-h-[300px]"
              controls
              autoPlay
              ref={videoRef}
            >
              <source src={url} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default MediaPreview;
