import React from 'react';
import MovingCamera from '../containers/MovingCamera';

const ReactTHREE = require('react-three');

const Renderer = ReactTHREE.Renderer;
const Scene = ReactTHREE.Scene;

const GameScene = ({ width, height, children }) => {
  return (
    <Renderer width={width} height={height}>
      <Scene width={width} height={height} camera="maincamera">
        <MovingCamera />
        {children}
      </Scene>
    </Renderer>
  );
};

GameScene.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default GameScene;
