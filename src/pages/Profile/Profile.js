import React, { Component } from "react";
import { Button, Input, Checkbox, Loader, RadioGroup, Radio } from "rsuite";
import { userAuth } from "../../actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SkinView from "../../components/SkinView/SkinView";
import "./Profile.scss";

export class Profile extends Component {
  state = {
    user: null,
    animationType: "state"
  };
  async componentDidMount() {
    if (!this.props.user) {
      const user = await localStorage.getItem("user");
      if (user) {
        this.setState({ user: JSON.parse(user) });
      } else {
      }
    } else {
      this.setState({ user: this.props.user });
    }
  }
  onChangeAnimationType = value => {
    this.setState({ animationType: value });
  };

  render() {
    const { user, animationType } = this.state;

    return (
      <div className="profile-page">
        <div className="row">
          <div className="col-4">
            <div className="profile-skin">
              <div className="skin-wrapper">
                {user ? (
                  <SkinView
                    animationType={animationType}
                    rotate
                    width={200}
                    height={400}
                    defaultUrl={`http://94.103.84.215:1337/core/skins/${user.username}.png`}
                  />
                ) : (
                  <Loader backdrop content="Загрузка" vertical />
                )}
              </div>
              <RadioGroup
                onChange={value => this.onChangeAnimationType(value)}
                name="radioList"
                inline
                appearance="picker"
                defaultValue="state"
              >
                <Radio value="walk">Ходьба</Radio>
                <Radio value="run">Бег</Radio>
                <Radio value="state">Стойка</Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    token: state.auth.token
  };
}

export default withRouter(connect(mapStateToProps, { userAuth })(Profile));
