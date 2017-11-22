import 'react-native';
import React from 'react';
import Row from '../js/components/Row';
import renderer from 'react-test-renderer';

// Mockdata
const data = {}

it('renders correctly', () => {
  const tree = renderer.create(
    <Row {...data}/>
  );
});


