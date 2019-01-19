import React from 'react';
import TextField from '@material-ui/core/TextField';

class PhoneInput extends React.Component {
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

    if (this.props.onChange) {
      this.props.onChange(newValue);
    }

    this.setState({ value: newValue }, () => {
      selectionStart += Math.max(newValueArr.length - oldValueArr.length, 0);
      el.selectionStart = el.selectionEnd = selectionStart;
    });
  };

  render() {
    const { onChange, ...props } = this.props;
    return (
      <TextField
        label="Phone"
        type="tel"
        name="phone"
        value={this.state.value}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}

export default PhoneInput;
