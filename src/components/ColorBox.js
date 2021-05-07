import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from 'chroma-js';
import "./ColorBox.css";

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(
        () =>
          this.setState({
            copied: false,
          }),
        1500
      );
    });
  };

  render() {
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDark = chroma(background).luminance() <= 0.05
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className="ColorBox">
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className="see-more">More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
