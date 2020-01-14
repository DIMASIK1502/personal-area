import React, { Component } from "react";
import * as skinview3d from "../../utils/skins3d/skinview3d";

export class SkinView extends Component {
  constructor() {
    super();
    this.refSkinContainer = React.createRef();
    this.skinViewer = null;
    this.skinControl = null;
  }
  componentDidMount() {
    const width = this.props.width != null ? this.props.width : 400;
    const height = this.props.height != null ? this.props.height : 400;
    if (this.refSkinContainer && this.refSkinContainer.current) {
      this.skinViewer = new skinview3d.SkinViewer({
        domElement: this.refSkinContainer.current,
        slim: !!this.props.slim,
        width: width,
        height: height,
        skinUrl: this.props.url
          ? this.props.url
          : this.props.defaultUrl
          ? this.props.defaultUrl
          : null
      });
      this.skinControl = skinview3d.createOrbitControls(this.skinViewer);
      this.skinControl.enableRotate = true;
      this.skinControl.enableZoom = false;
      this.skinControl.enablePan = true;
    }
  }

  render() {
    return <div className="skin-view" ref={this.refSkinContainer}></div>;
  }
}

export default SkinView;
