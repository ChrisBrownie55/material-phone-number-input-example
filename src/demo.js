import React from 'react';
import TextField from '@material-ui/core/TextField';

class FilledTextFields extends React.Component {
  state = {
    value: ''
  };

  handleChange = event => {
    const el = event.target;
    let selectionStart = el.selectionStart;

    const newInput = event.target.value.replace(/\D/g, '');

    const oldValueArr = this.state.value.split('-');
    const newValueArr = [
      newInput.slice(0, 3),
      newInput.slice(3, 6),
      newInput.slice(6, 10)
    ].filter(x => x);

    const newValue = newValueArr.join('-');

    this.setState({ value: newValue }, () => {
      selectionStart += Math.max(newValueArr.length - oldValueArr.length, 0);
      el.selectionStart = el.selectionEnd = selectionStart;
    });
  };

  render() {
    return (
      <TextField
        id="filled-name"
        label="Phone"
        value={this.state.value}
        onChange={this.handleChange}
        margin="normal"
        variant="filled"
        type="tel"
      />
    );
  }
}

export default FilledTextFields;
