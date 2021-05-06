import React, { Component } from "react";
import "./Palette.css";

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

class Palette extends Component {
  state = {
    level: 500,
    format: 'hex'
  };

  changeLevel = (level) => {
    this.setState({ level });
  };

  changeFormat = (val) => {
    this.setState({ format: val })
  };

  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} key={color.id}/>
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Navbar
          handleChange={this.changeFormat}
          level={level}
          changeLevel={this.changeLevel}
        />
        <div className="palette-colors">{colorBoxes}</div>
        {/* Footer */}
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
