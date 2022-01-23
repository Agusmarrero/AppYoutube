import React from 'react';
import VideoItem from './VideoItem';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { DefaultContext } from 'react-icons/lib';
const VideoList = ({videos , handleVideoSelect}) => {
    console.log(videos)
    const renderedVideos =  videos.map((video) => {
        return (
        video.map((v1) => { 
            return <VideoItem key={v1.id.videoId} v1={v1} handleVideoSelect={handleVideoSelect} />} )
        )
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;