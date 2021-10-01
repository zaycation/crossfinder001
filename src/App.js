import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/HomePage';

import './App.css';

function App() {
	return (
		<>
			<Router className='App'>
				<br />
				<Switch>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
