import React from "react";
import "aframe";
import { Scene } from "aframe-react";
import "aframe-event-set-component";
import MaterialChange from "./components/MaterialChange";

/*HDRI Images Platforms*/
import RAL9006Platform from "./assets/HDRI/1000.jpg";
import DarkOakPlatform from "./assets/HDRI/1000.jpg";
import BirchOakPlatform from "./assets/HDRI/1000.jpg";
import BlackFoilPatternPlatform from "./assets/HDRI/1000.jpg";

import SpruceOakPlatform from "./assets/HDRI/1000.jpg";
import OakPlatform from "./assets/HDRI/1000.jpg";
import AcaciaOakPlatform from "./assets/HDRI/1000.jpg";
import WhiteFoilPatternPlatform from "./assets/HDRI/1000.jpg";

import BlackFoilPlatform from "./assets/HDRI/1000.jpg";
import WhiteFoilPlatform from "./assets/HDRI/1000.jpg";
import RedOakPlatform from "./assets/HDRI/1000.jpg";
//todo: Add another whiteFoil

import LightOakPlatform from "./assets/HDRI/1000.jpg";
import CaroPatternPlatform from "./assets/HDRI/1000.jpg";
import SheetPatternPlatform from "./assets/HDRI/1000.jpg";
import RALPlatform from "./assets/HDRI/1000.jpg";

const AutoDetectControllers = () => {
  return <a-entity auto-detect-controllers="false" />;
};

class WelcomeToVR extends React.Component {
  state = {
    currentPos: "30 30 30",
  };
  changePos = (e) => () => {
    this.setState({
      currentPos: e,
    });
  };

  render(props) {
    console.log(this.state.currentPos);
    return (
      <div>
        <MaterialChange
          pos1={this.changePos("0 0 20")}
          pos2={this.changePos("0 0 0")}
        />
        <div style={{ minWidth: "100vw", minHeight: "100vh" }}>
          <Scene
            renderer="antialias: true; physicallyCorrectLights: true;"
            cursor={{ rayOrigin: "mouse" }}
          >
            <AutoDetectControllers />
            <a-assets>
              <img id="ral9006" src={RAL9006Platform} alt="" />
              <img id="darkoak" src={DarkOakPlatform} alt="" />
              <img id="birchoak" src={BirchOakPlatform} alt="" />
              <img id="blackfoilpattern" src={BlackFoilPatternPlatform} alt="" />

              <img id="spruceoak" src={SpruceOakPlatform} alt="" />
              <img id="oak" src={OakPlatform} alt="" />
              <img id="acaciaoak" src={AcaciaOakPlatform} alt="" />
              <img id="whitefoilpattern" src={WhiteFoilPatternPlatform} alt="" />

              <img id="blackfoil" src={BlackFoilPlatform} alt="" />
              <img id="whitefoil" src={WhiteFoilPlatform} alt="" />
              <img id="redoak" src={RedOakPlatform} alt="" />

              <img id="lightoak" src={LightOakPlatform} alt="" />
              <img id="caropattern" src={CaroPatternPlatform} alt="" />
              <img id="sheetpattern" src={SheetPatternPlatform} alt="" />
              <img id="ral" src={RALPlatform} alt="" />
            </a-assets>
            <a-sky radius="10" src="#point1" />
            <a-sky position="0 0 20" radius="10" src="#point2" />
            <a-entity position={this.state.currentPos} rotation="0 90 0">
              <a-camera wasd-controls-enabled="true" reverse-mouse-drag="true">
                <a-cursor />
              </a-camera>
            </a-entity>
          </Scene>
        </div>
      </div>
    );
  }
}

export default WelcomeToVR;
