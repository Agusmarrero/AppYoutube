import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { Route, BrowserRouter, Routes ,Link } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "bootstrap/dist/css/bootstrap.css";
import '../App.css';
import Footer from './Footer';
import { useState } from 'react'



class Home extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

  
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };

    handleVideoSelect = (video) => {
      
        this.setState({ selectedVideo: video })
        console.log(JSON.stringify(video));
    }
    
    render() {
        return (
            <div>
                <div className='container' style={{ height: 600 }} >
                    <SearchBar handleFormSubmit={this.handleSubmit} />
                    <div className='ui grid '>
                        <div className="ui row">
                            <div className="video-detail">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="video-list" style={{ backgroundColor: '#ebeaed' }}>
                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer ></Footer>
            </div>

        )
    }
}

export default Home;