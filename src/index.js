//define React
import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list"
import VideoDetail from './components/video_detail';
//import from seach_bar.js
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCDjKrK16HrRk6fjOL5nXi0tpX_WZ4_ZvQ';



// create a new component. This component should produce some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null 
        };

        this.videoSearch('surfboards')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
            // ES6 syntax - this.setState({ videos });
            // since key and value variable are the same word
        })
    }



    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}




// take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));