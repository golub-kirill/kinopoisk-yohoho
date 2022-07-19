import React, { useEffect } from 'react';

import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchPremieres } from './store/reducers/ActionCreators';

function App() {
	const dispatch = useAppDispatch();
	const {films, isLoading, error} = useAppSelector(state => state.filmReducer);

	useEffect(() => {
		dispatch(fetchPremieres());
	},[ ]);
	
	return <div className="App">
		{isLoading ? <div>Loading...</div> : null}
		{error ? <div>Error: {error}</div> : null}
		{JSON.stringify(films, null, 2)}
	</div>;
}

export default App;
