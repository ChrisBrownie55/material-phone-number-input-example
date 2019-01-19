import React from 'react';
import ReactDOM from 'react-dom';
import PhoneInput from './PhoneInput';

class App extends React.Component {
  state = {
    value: ''
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <div style={{ fontFamily: 'system-ui' }}>
        <PhoneInput onChange={this.handleChange} />
        <p>Your phone number: {this.state.value}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
