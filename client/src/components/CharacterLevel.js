import React, { Component } from 'react';
import styled from 'styled-components';
import { FormControl } from 'react-bootstrap';

const Div = styled.div`
  padding: 1rem;
`;

export default class CharacterLevel extends Component {
  state = {
    error: undefined,
  }

  handleLevelChange = (event) => {
    event.preventDefault();
    const level = event.target.value;
    if(level > 0 && level < 91) {
      if(this.state.error) {
        this.setState(() => ({ error: undefined }))
      }
      this.props.handleLevelUp(level)
    } else {
      this.setState(() => ({ error: 'Levels range from 1 to 90' }))
    };
  }

  render() {
    return (
      <Div>
        <p>No grinding required!</p>
        <FormControl 
          type="number" 
          min={1} 
          max={90} 
          placeholder="enter new level.." 
          onChange={this.handleLevelChange} />
        {this.state.error && <small>{ this.state.error }</small>}
      </Div>
    );
  };
}