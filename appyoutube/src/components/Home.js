import React, { useState } from 'react';
import { useVideoContext } from "../context/context"
import VideoList from './VideoList';
import Footer from './Footer';
import VideoDetail from './VideoDetail';
import InitialVideo from './InitialVideo';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import './Home.css'
import { BsDisplay } from 'react-icons/bs';
const Home = () => {

    const [video, setVideo] = useState([])
    const [videoSearch, setVideoSearch] = useState([])
    const { videosList, videoItem, videosSearch, videoSelect, emptyVideo, backButton } = useVideoContext()

    // console.log(videosList)
    const handleSearch = async (termFromSearchBar) => {

        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        videosSearch(response.data.items)
    }

    console.log(videosList)


    const handleVideoSelect = (video) => {

        videoSelect(video)


    }




    return (
        <>
            <div className='header' >
                <SearchBar handleSearch={handleSearch} />
            </div>
            <div className='body'>
            <div className="row">
                {videoItem.length !== 0 ? <VideoDetail video={videoItem} /> : <InitialVideo />}
                {backButton ? '' : <div className='col-3 col-s-12 col-c-12 col-x-3'><VideoList handleVideoSelect={handleVideoSelect} videos={videosList} /></div>}
            </div>
            </div>
          
            <Footer />
        </ >
    )
}

export default Home;