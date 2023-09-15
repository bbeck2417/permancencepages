import React, { Component } from "react";
import '../src/App.css';
import playButton from '../src/play.png';
import waves from '../src/doDoodoo.mp3'

class BackgroudMusic extends Component {
// Create state
state = {

	// Get audio file in a variable
	audio: new Audio(waves),

	// Set initial state of song
	isPlaying: false,
};

// Main function to handle both play and pause operations
playPause = () => {

	// Get state of song
	let isPlaying = this.state.isPlaying;

	if (isPlaying) {
	// Pause the song if it is playing
	this.state.audio.pause();
	} else {

	// Play the song if it is paused
	this.state.audio.play();
	}

	// Change the state of song
	this.setState({ isPlaying: !isPlaying });
};

render() {
	return (
	<div>
		{/* Show state of song on website */}
	
          {this.state.isPlaying ? 
            "" : 
            ""}
        

		{/* Button to call our main function */}
		<button onClick={this.playPause} className="myButton" >
		press <img src={playButton} alt=""/>
		</button>
	</div>
	);
}
}

export default BackgroudMusic;
