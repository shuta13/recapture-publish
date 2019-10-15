import React from 'react';
import ReactDOM from 'react-dom';
import Hoge from '../../pages/Home';

describe('なんか最初からあるやつ書き方キモいので修正', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hoge />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
