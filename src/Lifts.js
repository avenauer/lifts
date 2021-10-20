import React from "react";
import "aframe";
import { Scene } from "aframe-react";
import "aframe-event-set-component";
import MaterialChange from "./components/MaterialChange";

/*HDRI Images Platforms*/
import RAL9006Platform from "./assets/HDRI/HDRI-RAL9006.jpg";
import DarkOakPlatform from "./assets/HDRI/HDRI-DarkOak.jpg";
import BirchOakPlatform from "./assets/HDRI/Denoised beauty1.jpeg";
import BlackFoilPatternPlatform from "./assets/HDRI/HDRI-BlackFoilPattern.jpg";

import SpruceOakPlatform from "./assets/HDRI/HDRI-SpruceOak.jpg";
import OakPlatform from "./assets/HDRI/HDRI-Oak.jpg";
import AcaciaOakPlatform from "./assets/HDRI/HDRI-AcaciaOak.jpg";
import WhiteFoilPatternPlatform from "./assets/HDRI/HDRI-WhiteFoilPattern.jpg";

import BlackSkinPlatform from "./assets/HDRI/Denoised beauty1.jpeg";
import WhiteOakPlatform from "./assets/HDRI/Denoised beauty1.jpeg";
import RedOakPlatform from "./assets/HDRI/HDRI-RedOak.jpg";
import WhiteSkinPlatform from "./assets/HDRI/HDRI-WhiteSkin.jpg";

import LightOakPlatform from "./assets/HDRI/Denoised beauty1.jpeg";
import SheetPatternPlatform from "./assets/HDRI/HDRI-SheetPattern.jpg";
import CaroPatternPlatform from "./assets/HDRI/Denoised beauty1.jpeg";
import RALFoilPlatform from "./assets/HDRI/Denoised beauty1.jpeg";

const AutoDetectControllers = () => {
  return <a-entity auto-detect-controllers="false" />;
};

class WelcomeToVR extends React.Component {
  state = {
    /*currentPos: "30 30 -30",*/
    currentPos: "0 0 0",
  };
  changePos = (e) => () => {
    this.setState({
      currentPos: e,
    });
  };

  render(props) {
    return (
      <div>
        <MaterialChange
          pos1={this.changePos(" 0 0 0")}
          pos2={this.changePos(" 0 0 -20")}
          pos3={this.changePos(" 0 0 -40")}
          pos4={this.changePos(" 0 0 -60")}
          pos5={this.changePos(" 20 0 0 ")}
          pos6={this.changePos(" 20 0 -20")}
          pos7={this.changePos(" 20 0 -40")}
          pos8={this.changePos(" 20 0 -60")}
          pos9={this.changePos(" 40 0 0")}
          pos10={this.changePos("40 0 -20")}
          pos11={this.changePos("40 0 -40")}
          pos12={this.changePos("40 0 -60")}
          pos13={this.changePos("60 0 0")}
          pos14={this.changePos("60 0 -20")}
          pos15={this.changePos("60 0 -40")}
          pos16={this.changePos("60 0 -60")}
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
              <img
                id="blackfoilpattern"
                src={BlackFoilPatternPlatform}
                alt=""
              />

              <img id="spruceoak" src={SpruceOakPlatform} alt="" />
              <img id="oak" src={OakPlatform} alt="" />
              <img id="acaciaoak" src={AcaciaOakPlatform} alt="" />
              <img
                id="whitefoilpattern"
                src={WhiteFoilPatternPlatform}
                alt=""
              />

              <img id="blackskin" src={BlackSkinPlatform} alt="" />
              <img id="whiteoak" src={WhiteOakPlatform} alt="" />
              <img id="redoak" src={RedOakPlatform} alt="" />
              <img id="whiteskin" src={WhiteSkinPlatform} alt="" />

              <img id="lightoak" src={LightOakPlatform} alt="" />
              <img id="sheetpattern" src={SheetPatternPlatform} alt="" />
              <img id="caropattern" src={CaroPatternPlatform} alt="" />
              <img id="ralfoil" src={RALFoilPlatform} alt="" />
            </a-assets>
            <a-sky position="0 0 0" radius="10" src="#ral9006" />
            <a-sky position="0 0 -20" radius="10" src="#darkoak" />
            <a-sky position="0 0 -40" radius="10" src="#birchoak" />
            <a-sky position="0 0 -60" radius="10" src="#blackfoilpattern" />

            <a-sky position="20 0 0" radius="10" src="#spruceoak" />
            <a-sky position="20 0 -20" radius="10" src="#oak" />
            <a-sky position="20 0 -40" radius="10" src="#acaciaoak" />
            <a-sky position="20 0 -60" radius="10" src="#whitefoilpattern" />

            <a-sky position="40 0 0" radius="10" src="#blackskin" />
            <a-sky position="40 0 -20" radius="10" src="#whiteoak" />
            <a-sky position="40 0 -40" radius="10" src="#redoak" />
            <a-sky position="40 0 -60" radius="10" src="#whiteskin" />

            <a-sky position="60 0 0" radius="10" src="#lightoak" />
            <a-sky position="60 0 -20" radius="10" src="#sheetpattern" />
            <a-sky position="60 0 -40" radius="10" src="#caropattern" />
            <a-sky position="60 0 -60" radius="10" src="#ralfoil" />
            <a-entity position={this.state.currentPos} rotation="0 90 0">
              <a-camera fov="80" wasd-controls-enabled="false" reverse-mouse-drag="true">
                {/*<a-cursor />*/}
              </a-camera>
            </a-entity>
          </Scene>
        </div>
      </div>
    );
  }
}

export default WelcomeToVR;
