import React, { Component } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import Popup from './Popup';
import Giphys from './Giphys';
import {connect} from 'react-redux'
import * as appActions from './actions/appActions';
// import {bindActionCreators} from 'redux';

class App extends Component {
    closePopup() {
        this.props.updateSelected(null);
    }

    selectImage(url) {
        if(url){
            this.props.updateSelected(url);
            /*this.props.appActions.updateSelected(url)*/ // alternatief
        }
    }

    searchGiphy(input) {
        let thisApp = this;
        const giphyResults = fetch("http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=9&q="+input.replace(" ","%20"));
        giphyResults.then(function (result) {
            return result.json();
        })
            .then(function (jsonobj) {
                return getGiphyImages_downsized(jsonobj);
            })
            .then(function (arrayOfGifs) {
                thisApp.props.updateGiphys(arrayOfGifs)
            })

    }

    render() {
        const url = this.props.app.selected;
        let popup = null;
        if(!!url){
            popup = <Popup url={url} closeFunction={() => this.closePopup()} />
        }else{
            popup = null
        }

        return (
            <div className="App">
                <h1>Giphy search</h1>
                <SearchInput search={(input) => this.searchGiphy(input)}/>
                <div>
                    {this.props.app.giphys.map((url)=> {
                        return (
                            <Giphys key={url} url={url} selectFunction={(url) => this.selectImage(url)}/>
                        )
                    })}
                </div>
                <div>
                    {popup}
                </div>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    return {
        app: state.app
        /*giphys: state.app.giphys*/ // alternatief
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateGiphys: (gifs) => dispatch(appActions.saveImages(gifs)),
        updateSelected: (url) => dispatch(appActions.updatePopup(url))

        /*appActions: bindActionCreators(appActions,dispatch)*/ //dit is een alternatief
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


function getGiphyImages_downsized({ data }) {
    return data.map(({ images }) => images.downsized.url);
}
