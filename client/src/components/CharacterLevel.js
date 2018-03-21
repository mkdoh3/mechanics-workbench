import React, { Component } from 'react';

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
    }
  }

  render() {
    return (
      <div>
        <p style={{display: 'inline', marginRight: '1rem'}}>skip the grind. enter a value to level up.</p>
        <input type='number' min={1} max={90} placeholder='ding!' onChange={this.handleLevelChange} style={{width: '5rem', textAlign: 'center'}} />
        {this.state.error && <p>{ this.state.error }</p>}
    </div>
    )
  }
}