import React from 'react';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';
import 'antd-mobile';

export default function MobilePlanetList({ selectedMovie, loading }) {
  return (
    <div>
      <WingBlank size='lg'>
        <WhiteSpace size='lg' />
        {loading !== true ? (
          selectedMovie &&
          selectedMovie.map((i) => (
            <Card style={{ marginBottom: 10 }}>
              <Card.Header title='Planet' extra={<span>{i.name}</span>} />
              <Card.Body>
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
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className='loading'> Loading... </div>
        )}
        <WhiteSpace size='lg' />
      </WingBlank>
    </div>
  );
}
