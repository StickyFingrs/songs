import React from 'react';
import {connect} from 'react-redux'; // Communicates with Provider

class SongList extends React.Component {
	renderList() {
		return this.props.songs.map( (song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button className="ui button primary">Select</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			);
		})
	}

	render() {
		return (
			<div className="ui divided list">{this.renderList()}</div>
		)
	};
}

// Take state from redux store, run through some calculation
// that turns it into props inside the component
// Doesn't have to be called this, but it's the conventional way
const mapStateToProps = (state) => {
	// console.log(state.songs);
	return {songs: state.songs};
}

// connect 
export default connect(mapStateToProps)(SongList);