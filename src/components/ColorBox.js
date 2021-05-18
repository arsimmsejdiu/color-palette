import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";

const styles = {
  copyText: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
  }
}

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
    const { name, background, moreUrl, showLink, classes } = this.props;
    const { copied } = this.state;
    
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className="ColorBox">
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={classes.copyText}>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>
                {name}
              </span>
            </div>
            <button className={`copy-button ${classes.copyText}`}>Copy</button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={`see-more ${classes.copyText}`}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
