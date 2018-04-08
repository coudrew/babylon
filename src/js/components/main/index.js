/* global BABYLON */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class MainComponent extends Component {
  constructor(props){
    super(props);

    this.createScene = this.createScene.bind(this);
  }

  componentDidMount() {
    const { canvas } = this;
    console.log(canvas)
    this.engine = new BABYLON.Engine(canvas, true);
    let scene = this.createScene(this.engine, canvas);
    this.engine.runRenderLoop(() => scene.render())
  }

  createScene(engine, canvas) {
    let scene = new BABYLON.Scene(engine);
    let camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    let light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), scene);
    let light2 = new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 1, -1), scene);
    let sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 0.5 }, scene);

    return scene;
  }

  render() {
    return (
      <div style={
        {
          position: 'relative',
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          backgroundColor: '#303030'
        } }>
        <canvas
          style={ { position: 'relative', width: '80vw', height: '80vh', top: '10vh', left: '10vw' } }
          ref={ c => this.canvas = c }
        />
      </div>
    );
  }
}

export default MainComponent;
