import 'react-native';
import React from 'react';
//import Index from '../index.android.js';

import CategoryPicker from '../js/components/CategoryPicker';
import renderer from 'react-test-renderer';

// Mockdata
const props = {appData: {selectedCategory: 'everything'}}

it('renders correctly', () => {
  const tree = renderer.create(
    <CategoryPicker {...props} />
  );
});




