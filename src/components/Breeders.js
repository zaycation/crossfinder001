/* eslint-disable no-undef */
import React from 'react';
import { useQuery } from 'react-query';
import { Row, Col, Card, Button, Image, Badge } from 'react-bootstrap';
import PulseLoader from 'react-spinners/PulseLoader';

export default function Breeders({ setBreederId }) {
	const { isLoading, error, data } = useQuery('breeders', () =>
		fetch(
			`https://en.seedfinder.eu/api/json/ids.json?br=all&ac=${process.env.REACT_APP_SEEDF_API_KEY}`,
		).then(res => res.json()),
	);

	if (isLoading) {
		//console.log(process.env);
		return (
			<Row>
				<Col className='d-flex align-items-center justify-content-center'>
					<PulseLoader size={20} color='teal' />
				</Col>
			</Row>
		);
	} else if (error) {
		return 'Error!!';
	}
	return (
		<>
			<Button
				variant='dark'
				onClick={() => {
					console.log(data);
				}}>
				Dark
			</Button>{' '}
			<Row>
				{Object.entries(data).forEach(item => {
					console.log(`${item.name}`);
				})}

				{data.results?.Data.slice(0, 50).map(item => (
					<Col xs={12} sm={12} md={4} lg={4} xl={4}>
						<Card>
							<Card.Img variant='top' src='' />
							<Card.Body>
								<Card.Title>{item}</Card.Title>
								<Card.Text>card text</Card.Text>
								<Card.Link href='#'>Read More</Card.Link>
								<Card.Link href='#'>View Similar</Card.Link>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
}
