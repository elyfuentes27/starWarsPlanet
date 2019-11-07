import React from 'react';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

export default function MobilePlanetList({ selectedMovie }) {
	return (
		<div>
			<WingBlank size='lg'>
				<WhiteSpace size='lg' />
				{selectedMovie &&
					selectedMovie.map(i => (
						<Card style={{ marginBottom: 10 }}>
							<Card.Header title='Planet' extra={<span>{i.name}</span>} />
							<Card.Body>
								<p>
									<b>Rotation Period:</b>
									{i.rotation_period}
								</p>
								<p>
									<b>Orbital Period:</b>
									{i.orbital_period}
								</p>
								<p>
									<b>Climate:</b>
									{i.climate}
								</p>
							</Card.Body>
						</Card>
					))}
				<WhiteSpace size='lg' />
			</WingBlank>
		</div>
	);
}
