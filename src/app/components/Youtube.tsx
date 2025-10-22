"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";

type YouTubeFacadeProps = {
  videoId: string;
  /** Visible title for a11y; also used as iframe title */
  title: string;
  /** e.g., "16 / 9", "4 / 3" */
  aspectRatio?: string;
  /** "default" | "mqdefault" | "hqdefault" | "sddefault" | "maxresdefault" */
  thumbnailQuality?:
    | "default"
    | "mqdefault"
    | "hqdefault"
    | "sddefault"
    | "maxresdefault";
  /** Start time in seconds */
  start?: number;
  /** Extra params appended to embed url, e.g. "mute=1&rel=0" (no leading '?' or '&') */
  params?: string;
  /** Use the privacy-enhanced domain */
  noCookie?: boolean;
  className?: string;
  /** Add your own play overlay (children) if you want to customize the button UI */
  children?: React.ReactNode;
  /** Show loading state when activating */
  showLoading?: boolean;
  /** Custom styles for the container */
  style?: React.CSSProperties;
};

export default function YouTubeFacade({
  videoId,
  title,
  aspectRatio = "16 / 9",
  thumbnailQuality = "hqdefault",
  start,
  params,
  noCookie = true,
  className = "",
  children,
  showLoading = true,
  style,
}: YouTubeFacadeProps) {
  const [activated, setActivated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [preconnected, setPreconnected] = useState(false);

  const host = noCookie
    ? "https://www.youtube-nocookie.com"
    : "https://www.youtube.com";

  const thumbUrl = useMemo(
    () => `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`,
    [videoId, thumbnailQuality],
  );

  const embedSrc = useMemo(() => {
    const url = new URL(`${host}/embed/${videoId}`);
    url.searchParams.set("autoplay", "1");
    url.searchParams.set("playsinline", "1");
    if (start) url.searchParams.set("start", String(start));

    // Sensible defaults for better UX
    url.searchParams.set("rel", "0");
    url.searchParams.set("modestbranding", "1");
    url.searchParams.set("enablejsapi", "0");

    if (params) {
      // Parse and append extra params without overriding existing ones
      params.split("&").forEach((kv) => {
        const [k, v = ""] = kv.split("=");
        if (k && !url.searchParams.has(k)) {
          url.searchParams.set(k, decodeURIComponent(v));
        }
      });
    }
    return url.toString();
  }, [host, videoId, start, params]);

  // Preconnect to YouTube domains for better performance
  const preconnect = useCallback(() => {
    if (preconnected) return;
    setPreconnected(true);

    const links = [
      "https://www.youtube.com",
      "https://www.youtube-nocookie.com",
      "https://www.google.com",
      "https://googleads.g.doubleclick.net",
      "https://static.doubleclick.net",
      "https://i.ytimg.com",
      "https://img.youtube.com",
    ];

    links.forEach((href) => {
      const linkElement = document.createElement("link");
      linkElement.rel = "preconnect";
      linkElement.href = href;
      linkElement.crossOrigin = "anonymous";
      document.head.appendChild(linkElement);
    });
  }, [preconnected]);

  const activate = useCallback(() => {
    if (activated) return;

    preconnect();
    if (showLoading) setIsLoading(true);

    // Small delay to show loading state
    setTimeout(
      () => {
        setActivated(true);
        setIsLoading(false);
      },
      showLoading ? 300 : 0,
    );
  }, [activated, preconnect, showLoading]);

  const handleThumbnailError = useCallback(() => {
    setThumbnailError(true);
  }, []);

  // Preload thumbnail image
  useEffect(() => {
    const img = new Image();
    img.src = thumbUrl;
    img.onerror = handleThumbnailError;
  }, [thumbUrl, handleThumbnailError]);

  if (activated) {
    return (
      <>
        <iframe
          title={title}
          src={embedSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
        />
      </>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-black ${className}`}
      style={{
        aspectRatio: aspectRatio !== "none" ? aspectRatio : undefined,
        ...style,
      }}
    >
      <button
        type="button"
        aria-label={`Play video: ${title}`}
        onClick={activate}
        onPointerOver={preconnect}
        onFocus={preconnect}
        className={`relative block h-full w-full cursor-pointer bg-cover bg-center transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105 focus:outline-none ${thumbnailError ? "bg-gray-800" : ""} `}
        style={{
          backgroundImage: thumbnailError ? "none" : `url(${thumbUrl})`,
        }}
      >
        {/* Gradient overlay for better text readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
        />

        {/* Fallback for thumbnail error */}
        {thumbnailError && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-sm text-gray-400">
            Video Thumbnail
            <br />
            <small>Click to play</small>
          </div>
        )}

        {/* Loading state */}
        {isLoading ? (
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 flex h-14 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-lg bg-black/90 shadow-lg"
          >
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          </div>
        ) : (
          /* Authentic YouTube play button */
          (children ?? (
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-200 ease-in-out hover:scale-110"
            >
              <span className="yt-icon-shape block">
                <div className="block h-14 w-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 67 60"
                    fill="currentColor"
                    focusable="false"
                    aria-hidden="true"
                    className="h-full w-full text-red-600 drop-shadow-lg transition-colors duration-200 hover:text-red-700"
                  >
                    <path d="M63 14.87a7.885 7.885 0 00-5.56-5.56C52.54 8 32.88 8 32.88 8S13.23 8 8.32 9.31c-2.7.72-4.83 2.85-5.56 5.56C1.45 19.77 1.45 30 1.45 30s0 10.23 1.31 15.13c.72 2.7 2.85 4.83 5.56 5.56C13.23 52 32.88 52 32.88 52s19.66 0 24.56-1.31c2.7-.72 4.83-2.85 5.56-5.56C64.31 40.23 64.31 30 64.31 30s0-10.23-1.31-15.13z"></path>
                    <path
                      fill="#FFF"
                      className="logo-arrow"
                      d="M26.6 39.43L42.93 30 26.6 20.57z"
                    ></path>
                  </svg>
                </div>
              </span>
            </div>
          ))
        )}
      </button>
    </div>
  );
}
