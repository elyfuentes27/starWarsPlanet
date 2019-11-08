import React from 'react';
import { Card, Row, Col } from 'antd';

const PlanetList = ({ selectedMovie, loading }) => {
	return (
		<div style={{ background: '#ECECEC', padding: '30px' }}>
			<Row gutter={16}>
				{selectedMovie &&
					selectedMovie.map((i, index) =>
						loading !== true ? (
							<Col className='gutter-row' span={8} style={{ marginBottom: '30px' }}>
								<Card title={`Planet - ${i.name}`} bordered={false} style={{ width: 300 }} key={index}>
									<p>
										<b>Rotation Period: </b>
										{i.rotation_period}
									</p>
									<p>
										<b>Orbital Period: </b>
										{i.orbital_period}
									</p>
									<p>
										<b>Climate: </b>
										{i.climate}
									</p>
									<p>
										<b>Terrain: </b>
										{i.terrain}
									</p>
								</Card>
							</Col>
						) : (
							<div> Loading ...</div>
						)
					)}
			</Row>
		</div>
	);
};

export default PlanetList;
