import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Breeders from '../components/Breeders';

const HomePage = () => {
	const [breederId, setbreederId] = useState();
	return (
		<>
			<Container>
				<h2 className='text-center'>homepage</h2>

				<Breeders setbreederId={setbreederId} />
			</Container>
		</>
	);
};

export default HomePage;
