//define React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from "./components/video_list"
//import from seach_bar.js
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCDjKrK16HrRk6fjOL5nXi0tpX_WZ4_ZvQ';



// create a new component. This component should produce some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos: videos });
            // ES6 syntax - this.setState({ videos });
            // since key and value variable are the same word
        })
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}




// take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));