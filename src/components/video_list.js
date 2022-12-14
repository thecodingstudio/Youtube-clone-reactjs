import React from "react";
import VideoListItem from "./video_list_items";

const VideoList = (props) => {

    const VideoItems = props.videos.map(
        (video) => {
            console.log(video);
            return (
                <VideoListItem 
                    onVideoSelect = { props.onVideoSelect }
                    key = { video.etag }
                    video = { video } 
                />
            );
        }
    );

    return (
        <ul className="col-md-4 list-group">
            {VideoItems }
        </ul>
    );
}

export default VideoList;