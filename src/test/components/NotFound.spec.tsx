import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from '../../pages/NotFound';

describe('なんか最初からあるやつ書き方キモいので修正', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
