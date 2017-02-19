import React from 'react';

import DOM from './sample.jsx';


export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.view = DOM;
  }
  render() {
    return this.view();
  }
}