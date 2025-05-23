'use client';

import React, { useRef } from 'react';

interface YouTubeEmbededProps {
    videoUrl: string;
    description?: string;
}

const YouTubeEmbeded: React.FC<YouTubeEmbededProps> = ({ videoUrl, description }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const videoId = new URLSearchParams(new URL(videoUrl).search).get('v');
    if (!videoId) {
        return <p>Invalid YouTube URL</p>;
    }

    const videoURL = `https://www.youtube.com/embed/${videoId}?controls=1&rel=0`;

    return (
        <div className="relative w-full max-w-screen-lg mx-auto px-4 md:px-0">
            {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                    ref={iframeRef}
                    src={videoURL}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default YouTubeEmbeded;
