import React from 'react';
import ReactDOM from 'react-dom';
import App from '../pages/App';

describe('なんか最初からあるやつ書き方キモいので修正', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
