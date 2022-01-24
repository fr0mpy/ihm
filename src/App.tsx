import Header from './Components/Header';
import Body from './Components/Body';
import { mobileDevice } from './helpers/layout';
import React from 'react';

const App = () => {
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	return (
		<>
			{/* <Header isLoading={isLoading} /> */}
			<Body setIsLoading={setIsLoading} isLoading={isLoading} />
		</>
	);
};

export default App;
