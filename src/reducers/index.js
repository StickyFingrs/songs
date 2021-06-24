import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{title: "All Star", duration: "3:50"},
		{title: "Spitfire", duration: "7:24"},
		{title: "Funk Goes On", duration: "5:46"},
		{title: "Sugar", duration: "2:41"}
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
}

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});