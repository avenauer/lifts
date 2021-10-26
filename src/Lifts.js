import React from "react";
import "aframe";
import { Scene } from "aframe-react";
import "aframe-event-set-component";
import MaterialChange from "./components/MaterialChange";

/*HDRI Images Platforms*/
import RAL9006Platform from "./assets/HDRI/HDRI-RAL9006.jpg";
import DarkOakPlatform from "./assets/HDRI/HDRI-DarkOak.jpg";
import BirchOakPlatform from "./assets/HDRI/HDRI-BirchOak.jpg";
import BlackFoilPatternPlatform from "./assets/HDRI/HDRI-BlackFoilPattern.jpg";

import SpruceOakPlatform from "./assets/HDRI/HDRI-SpruceOak.jpg";
import OakPlatform from "./assets/HDRI/HDRI-Oak.jpg";
import AcaciaOakPlatform from "./assets/HDRI/HDRI-AcaciaOak.jpg";
import WhiteFoilPatternPlatform from "./assets/HDRI/HDRI-WhiteFoilPattern.jpg";

import BlackSkinPlatform from "./assets/HDRI/HDRI-BlackSkin.jpg";
import WhiteOakPlatform from "./assets/HDRI/HDRI-WhiteOak.jpg";
import RedOakPlatform from "./assets/HDRI/HDRI-RedOak.jpg";
import WhiteSkinPlatform from "./assets/HDRI/HDRI-WhiteSkin.jpg";

import LightOakPlatform from "./assets/HDRI/HDRI-LightOak.jpg";
import SheetPatternPlatform from "./assets/HDRI/HDRI-SheetPattern.jpg";
import CaroPatternPlatform from "./assets/HDRI/HDRI-CaroPattern.jpg";
import RALFoilPlatform from "./assets/HDRI/HDRI-RAL7038.jpg";
import { LiftsStyledWrapper } from "./components/_components";
import { Carousel } from "./components/Test";
import MaterialItem from "./components/MaterialItem";
import RAL9006Image from "./assets/Materials/RAL9006Material.png";
import DarkOakImage from "./assets/Materials/DarkOakMaterial.png";
import BirchOakImage from "./assets/Materials/BirchOakMaterial.png";
import BlackFoilPatternImage from "./assets/Materials/BlackFoilPatternMaterial.png";
import SpruceOakImage from "./assets/Materials/SpruceOakMaterial.png";
import OakImage from "./assets/Materials/OakMaterial.png";
import AcaciaOakImage from "./assets/Materials/AcaciaOakMaterial.png";
import WhiteFoilPatternImage from "./assets/Materials/WhiteFoilPatternMaterial.png";
import BlackSkinImage from "./assets/Materials/BlackSkinMaterial.png";
import WhiteOakImage from "./assets/Materials/WhiteOakMaterial.png";
import RedOakImage from "./assets/Materials/RedOakMaterial.png";
import WhiteSkinImage from "./assets/Materials/WhiteSkinMaterial.png";
import LightOakImage from "./assets/Materials/LightOakMaterial.png";
import SheetPatternImage from "./assets/Materials/SheetPatternMaterial.png";
import CaroPatternImage from "./assets/Materials/CaroPatternMaterial.png";
import RALFoilImage from "./assets/Materials/RALFoilMaterial.png";
import { names } from "./settings";

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
      <LiftsStyledWrapper>
        <Carousel
          dzieci={
            <div className="item-lower">
              <MaterialItem
                click={this.changePos(" 0 0 0")}
                name={names.dobel[1]}
                srcimage={RAL9006Image}
              />
              <MaterialItem
                click={this.changePos(" 0 0 -200")}
                name={names.dobel[2]}
                srcimage={DarkOakImage}
              />
              <MaterialItem
                click={this.changePos(" 0 0 -400")}
                name={names.dobel[3]}
                srcimage={BirchOakImage}
              />
              <MaterialItem
                click={this.changePos(" 0 0 -600")}
                name={names.dobel[4]}
                srcimage={BlackFoilPatternImage}
              />

              <MaterialItem
                click={this.changePos(" 200 0 0 ")}
                name={names.dobel[5]}
                srcimage={SpruceOakImage}
              />
              <MaterialItem
                click={this.changePos(" 200 0 -200")}
                name={names.dobel[6]}
                srcimage={OakImage}
              />
              <MaterialItem
                click={this.changePos(" 200 0 -400")}
                name={names.dobel[7]}
                srcimage={AcaciaOakImage}
              />
              <MaterialItem
                click={this.changePos(" 200 0 -600")}
                name={names.dobel[8]}
                srcimage={WhiteFoilPatternImage}
              />

              <MaterialItem
                click={this.changePos(" 400 0 0")}
                name={names.dobel[9]}
                srcimage={BlackSkinImage}
              />
              <MaterialItem
                click={this.changePos(" 400 0 -200")}
                name={names.dobel[10]}
                srcimage={WhiteOakImage}
              />
              <MaterialItem
                click={this.changePos(" 400 0 -400")}
                name={names.dobel[11]}
                srcimage={RedOakImage}
              />
              <MaterialItem
                click={this.changePos(" 400 0 -600")}
                name={names.dobel[12]}
                srcimage={WhiteSkinImage}
              />

              <MaterialItem
                click={this.changePos("600 0 0")}
                name={names.dobel[13]}
                srcimage={LightOakImage}
              />
              <MaterialItem
                click={this.changePos("600 0 -200")}
                name={names.dobel[14]}
                srcimage={SheetPatternImage}
              />
              <MaterialItem
                click={this.changePos("600 0 -400")}
                name={names.dobel[15]}
                srcimage={CaroPatternImage}
              />
              <MaterialItem
                click={this.changePos("600 0 -600")}
                name={names.dobel[16]}
                srcimage={RALFoilImage}
              />
            </div>
          }
        />
        <MaterialChange
          pos1={this.changePos(" 0 0 0")}
          pos2={this.changePos(" 0 0 -200")}
          pos3={this.changePos(" 0 0 -400")}
          pos4={this.changePos(" 0 0 -600")}
          pos5={this.changePos(" 200 0 0 ")}
          pos6={this.changePos(" 200 0 -200")}
          pos7={this.changePos(" 200 0 -400")}
          pos8={this.changePos(" 200 0 -600")}
          pos9={this.changePos(" 400 0 0")}
          pos10={this.changePos("400 0 -200")}
          pos11={this.changePos("400 0 -400")}
          pos12={this.changePos("400 0 -600")}
          pos13={this.changePos("600 0 0")}
          pos14={this.changePos("600 0 -200")}
          pos15={this.changePos("600 0 -400")}
          pos16={this.changePos("600 0 -600")}
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
              <img id="whitefoilpattern" src={WhiteSkinPlatform} alt="" />

              <img id="blackskin" src={BlackSkinPlatform} alt="" />
              <img id="whiteoak" src={WhiteOakPlatform} alt="" />
              <img id="redoak" src={RedOakPlatform} alt="" />
              <img
                id="materialwhiteskin"
                src={WhiteFoilPatternPlatform}
                alt=""
              />

              <img id="lightoak" src={LightOakPlatform} alt="" />
              <img id="sheetpattern" src={SheetPatternPlatform} alt="" />
              <img id="caropattern" src={CaroPatternPlatform} alt="" />
              <img id="ralfoil" src={RALFoilPlatform} alt="" />
            </a-assets>
            <a-sky position="0 0 0" radius="100" src="#ral9006" />
            <a-sky position="0 0 -200" radius="100" src="#darkoak" />
            <a-sky position="0 0 -400" radius="100" src="#birchoak" />
            <a-sky position="0 0 -600" radius="100" src="#blackfoilpattern" />

            <a-sky position="200 0 0" radius="100" src="#spruceoak" />
            <a-sky position="200 0 -200" radius="100" src="#oak" />
            <a-sky position="200 0 -400" radius="100" src="#acaciaoak" />
            <a-sky position="200 0 -600" radius="100" src="#whitefoilpattern" />

            <a-sky position="400 0 0" radius="100" src="#blackskin" />
            <a-sky position="400 0 -200" radius="100" src="#whiteoak" />
            <a-sky position="400 0 -400" radius="100" src="#redoak" />
            <a-sky position="400 0 -600" radius="100" src="#materialwhiteskin" />

            <a-sky position="600 0 0" radius="100" src="#lightoak" />
            <a-sky position="600 0 -200" radius="100" src="#sheetpattern" />
            <a-sky position="600 0 -400" radius="100" src="#caropattern" />
            <a-sky position="600 0 -600" radius="100" src="#ralfoil" />
            <a-entity position={this.state.currentPos} rotation="0 90 0">
              <a-camera
                fov="80"
                wasd-controls-enabled="false"
                reverse-mouse-drag="true"
              >
                {/*<a-cursor />*/}
              </a-camera>
            </a-entity>
          </Scene>
        </div>
      </LiftsStyledWrapper>
    );
  }
}

export default WelcomeToVR;
