import React, { Component } from "react";
import * as skinview3d from "../../utils/skins3d/skinview3d";
import { Loader } from "rsuite";
import "./SkinView.scss";

export class SkinView extends Component {
  constructor() {
    super();
    this.refSkinContainer = React.createRef();
    this.skinViewer = null;
    this.skinControl = null;
    this.rotate = false;
    this.walk = false;
    this.run = false;
    this.state = {
      loaded: false
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.leftArm != this.props.leftArm && this.props.leftArm) {
      this.skinViewer.playerObject.skin.leftArm.visible = this.props.leftArm;
    }
    if (
      prevProps.rotate != this.props.rotate &&
      !this.props.rotate &&
      this.rotate
    ) {
      this.rotate.resetAndRemove();
    }
    if (prevProps.animationType != this.props.animationType) {
      switch (this.props.animationType) {
        case "state": {
          if (this.run) {
            this.run.remove();
            this.run = null;
          }
          if (this.walk) {
            this.walk.remove();
            this.walk = null;
          }
          this.skinViewer.animations.reset();
          break;
        }
        case "run": {
          if (this.walk) {
            this.walk.remove();
            this.walk = null;
          }
          this.run = this.skinViewer.animations.add(
            skinview3d.RunningAnimation
          );
          break;
        }
        case "walk": {
          if (this.run) {
            this.run.remove();
            this.run = null;
          }
          this.walk = this.skinViewer.animations.add(
            skinview3d.WalkingAnimation
          );
          break;
        }
        default: {
          if (this.run) {
            this.run.remove();
            this.run = null;
          }
          if (this.walk) {
            this.walk.remove();
            this.walk = null;
          }
          this.skinViewer.animations.reset();
        }
      }
    }
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
      if (this.props.leftArm != undefined) {
        this.skinViewer.playerObject.skin.leftArm.visible = this.props.leftArm;
      }
      if (this.props.rightArm != undefined) {
        this.skinViewer.playerObject.skin.rightArm.visible = this.props.rightArm;
      }
      if (this.props.leftLeg != undefined) {
        this.skinViewer.playerObject.skin.leftLeg.visible = this.props.leftLeg;
      }
      if (this.props.rightLeg != undefined) {
        this.skinViewer.playerObject.skin.rightLeg.visible = this.props.rightLeg;
      }
      if (this.props.body != undefined) {
        this.skinViewer.playerObject.skin.body.visible = this.props.body;
      }
      if (this.props.head != undefined) {
        this.skinViewer.playerObject.skin.head.visible = this.props.head;
      }
      if (this.props.animationType) {
        switch (this.props.animationType) {
          case "state": {
            if (this.run) {
              this.run.reset();

              this.run.remove();
              this.run = null;
            }
            if (this.walk) {
              this.walk.reset();
              this.walk.remove();
              this.walk = null;
            }
            this.skinViewer.animations.reset();
            break;
          }
          case "run": {
            if (this.walk) {
              this.walk.reset();
              this.walk.remove();
              this.walk = null;
            }
            this.run = this.skinViewer.animations.add(
              skinview3d.RunningAnimation
            );
            break;
          }
          case "walk": {
            if (this.run) {
              this.run.reset();
              this.run.remove();
              this.run = null;
            }
            this.walk = this.skinViewer.animations.add(
              skinview3d.WalkingAnimation
            );
            break;
          }
          default: {
            if (this.run) {
              this.run.remove();
              this.run = null;
            }
            if (this.walk) {
              this.walk.remove();
              this.walk = null;
            }
            this.skinViewer.animations.reset();
          }
        }
      }
      // this.skinViewer.playerObject.skin.head.position.y = -4.5;
      //this.skinViewer.playerObject.skin.scale.set(3, 3, 3);
      // let rotate = this.skinViewer.animations.add(skinview3d.RotatingAnimation);

      // this.skinViewer.playerObject.skin.rightArm.visible = false;
      //console.log(this.skinViewer.playerObject);
      // Hide the whole outer layer
      if (this.props.rotate != undefined && this.props.rotate) {
        this.rotate = this.skinViewer.animations.add(
          skinview3d.RotatingAnimation
        );
      }
      this.props.onLoaded && this.props.onLoaded();
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
