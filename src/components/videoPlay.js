import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

function videoPlay(props) {
    return (
        <>
            <HoverVideoPlayer
                videoSrc={props.video}
                pausedOverlay={
                    <img
                    src={props.image}
                    alt=""
                    
                    style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    />
                }
                loadingOverlay={
                    <div className="loading-spinner-overlay" />
                }
            />
        </>
    )
}

export default videoPlay;
