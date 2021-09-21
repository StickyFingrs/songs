import { combineReducers } from "redux";

const songsReducer = () => { // using a static list in this example
	return [
		{title: "All Star", duration: "3:50"},
		{title: "Spitfire", duration: "7:24"},
		{title: "Funk Goes On", duration: "5:46"},
		{title: "Sugar", duration: "2:41"}
	];
};

const selectedSongReducer = (selectedSong = null /*default value for selectedSong*/, action) => {
	if (action.type === "SONG_SELECTED" /*redundant since there's only one but in case I want to add more*/) {
		return action.payload;
	}

	return selectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});