import ACTIONS from '../actions';

const Three = require('three');

const InitialState = {
  config: {
    fov: 75,
    aspect: window.innerWidth / window.innerHeight,
    near: 1,
    far: 800,
    position: new Three.Vector3(400, 0, 400),
    lookat: new Three.Vector3(0, 0, 0),
  },
};

const mapRotationVectorFromAction = (state, action) => {
  // TODO: Add factory for Three Objects
  const speed = action.speed || 1;
  switch (action.rotation) {
    case ACTIONS.MOVE.UP:
      return new Three.Vector3(0, 0, 1 * speed).add(state.config.lookat);
    case ACTIONS.MOVE.DOWN:
      return new Three.Vector3(0, -1  * speed, 0).add(state.config.lookat);
    case ACTIONS.MOVE.LEFT:
      return new Three.Vector3(-1  * speed, 0, 0).add(state.config.lookat);
    case ACTIONS.MOVE.RIGHT:
      return new Three.Vector3(1 * speed, 0, 0).add(state.config.lookat);
    case ACTIONS.MOVE.RESET:
    default:
      return new Three.Vector3(0, 0, 0);
  }
};

const CameraReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CAMERA.ROTATE:
      return {
        config: {
          ...state.config,
          lookat: mapRotationVectorFromAction(state, action),
        },
      };
    default:
      return state;
  }
};

export default CameraReducer;
