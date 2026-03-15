import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
    url: string;
    onProgress?: (percentage: number) => void;
    onComplete?: () => void;
}

export default function VideoPlayer({ url, onProgress, onComplete }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            const percentage = (video.currentTime / video.duration) * 100;
            setProgress(percentage);
            onProgress?.(percentage);

            // Mark as complete at 90%
            if (percentage >= 90 && onComplete) {
                onComplete();
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, [onProgress, onComplete]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                videoRef.current.requestFullscreen();
            }
        }
    };

    // Detect if URL is Vimeo or YouTube
    const isVimeo = url.includes('vimeo.com');
    const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');

    if (isVimeo || isYouTube) {
        // Use iframe for Vimeo/YouTube
        const embedUrl = isVimeo
            ? url.replace('vimeo.com/', 'player.vimeo.com/video/')
            : url.replace('watch?v=', 'embed/');

        return (
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                    src={embedUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    // Native video player for MP4/direct URLs
    return (
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group">
            <video
                ref={videoRef}
                src={url}
                className="w-full h-full"
                onClick={togglePlay}
            />

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div
                    className="h-full bg-brand-gold transition-all"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={togglePlay}
                    className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                    {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
                </button>

                <button
                    onClick={toggleMute}
                    className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                    {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
                </button>

                <div className="flex-1" />

                <button
                    onClick={toggleFullscreen}
                    className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                    <Maximize size={20} className="text-white" />
                </button>
            </div>
        </div>
    );
}
