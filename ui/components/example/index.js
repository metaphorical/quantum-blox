import React from 'react';



export default class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleId: 'base',
      domId: 'base'
    };
    this.view = require(`./${this.state.domId}.example.jsx`).default;
    
    this.changeStyle = this.changeStyle.bind(this);
    this.changeDom = this.changeDom.bind(this);
  }
  // componentWillMount() {
  //   this.view = require(`./${this.state.domId}.example.jsx`);
  // }
  componentDidUpdate() {
    console.log(this.state);
    this.view = require(`./${this.state.domId}.example.jsx`).default;
  }
  changeStyle() {
    if(this.state.styleId === 'base') {
      this.setState({
        styleId: 'purple'
      });
    } else {
      this.setState({
        styleId: 'base'
      });
    }
  }
  changeDom() {
    if(this.state.domId === 'base') {
      this.setState({
        domId: 'variant'
      });
    } else {
      this.setState({
        domId: 'base'
      });
    }
  }
  render() {
    return this.view();
  }
}