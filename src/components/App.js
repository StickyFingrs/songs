import React from 'react';
import actions from '../actions/index.js';
// import actions from '../actions'; works as well, as WebPack (one of the dependencies of this project) 
// automatically uses the index.js file if you don't specify a specific file.
import SongList from './SongList.js';

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
			</div>
		</div>
	);
}

export default App;