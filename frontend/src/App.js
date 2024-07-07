import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodaysTime from './pages/TodaysTimePage';
import Home from './pages/HomePage';
import YourTime from './pages/YourTimePage';
import HeaderNav from '../src/components/HeaderNav/HeaderNav';
// eslint-disable-next-line no-unused-vars
import HeaderNavHook from '../src/components/HeaderNav/HeaderNavHook';

function App() {
	return (
		<div className="App">
			<Router>
				<HeaderNav />
				{/* <HeaderNavHook /> */}
				<main className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/TodaysTime" element={<TodaysTime />} />
						<Route path="/YourTime" element={<YourTime />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
