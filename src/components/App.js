import React from 'react';
import selectSong from '../actions/index.js';
import SongList from './SongList.js';

const App = () => {
	return (
		<div className="App">
			<SongList></SongList>
		</div>
	);
}

export default App;