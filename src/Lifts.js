import React from "react";
import "aframe";
import { Scene } from "aframe-react";
import "aframe-event-set-component";
import MaterialChange from "./components/MaterialChange";
import test from '../src/assets/HDRI/1000.jpg';
import test1 from '../src/assets/HDRI/11111112.png';
import test2 from '../src/assets/HDRI/1000.jpg';
import test3 from '../src/assets/HDRI/1000.jpg';

const AutoDetectControllers = () => {
    return <a-entity auto-detect-controllers="false" />;
};

class WelcomeToVR extends React.Component {
    state = {
        currentPos: "30 15 20",
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
                    woodenred={this.changePos("0 0 20")}
                    yellowred={this.changePos("0 0 0")}
                />
                <div style={{ minWidth: "100vw", minHeight: "100vh" }}>
                    <Scene
                        renderer="antialias: true; physicallyCorrectLights: true;"
                        cursor={{ rayOrigin: "mouse" }}
                    >
                        <AutoDetectControllers />
                        <a-assets>
                            <img id="point1" src={test} alt="" />
                            <img id="point2" src={test1} alt="" />
                            <img id="point3" src={test2} alt="" />
                            <img id="point4" src={test3} alt="" />
                        </a-assets>
                        <a-sky radius="10" src="#point1">
                            <a-plane
                                width="2"
                                height="2"
                                position="-2.5 0.25 -1.5"
                                onClick={this.changePos("0 0 20")}
                            >
                                <a-text
                                    color="red"
                                    font="kelsonsans"
                                    value="Puy de Sancy, France"
                                    width="6"
                                    rotation="0 0 0"
                                />
                            </a-plane>
                            {/*<a-entity
              position="-2 0 2"
              geometry="primitive: box"
              material="color: red"
              onClick={this.changePos("0 0 20")}
            />*/}
                        </a-sky>
                        <a-sky position="0 0 20" radius="10" src="#point2">
                            {/*<a-entity
                position="-2 0 -2"
                geometry="primitive: box"
                material="color: blue"
                onClick={this.changePos("0 0 0")}
              />*/}
                        </a-sky>
                        <a-camera
                            rotation="0 0 0"
                            position={this.state.currentPos}
                            wasd-controls-enabled="true"
                            reverse-mouse-drag="true"
                        >
                            <a-cursor />
                        </a-camera>
                    </Scene>
                </div>
            </div>
        );
    }
}

export default WelcomeToVR;
