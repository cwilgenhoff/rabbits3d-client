const ACTIONS = {
  RESET: 'RESET',
  IDLE: 'IDLE',
  MOVE: {
    UP: 'UP',
    LEFT: 'LEFT',
    DOWN: 'DOWN',
    RIGHT: 'RIGHT',
  },
  CAMERA: {
    ROTATE: 'ROTATE',
  },
  CHARACTER: {
    WALK: 'WALK',
  },
  BROWSER: {
    REGISTER_EVENT_SUCCESS: 'REGISTER_EVENT_SUCCESS',
    UNREGISTER_EVENT_SUCCESS: 'UNREGISTER_EVENT_SUCCESS',
    UPDATE_VIEWPORT_SIZE: 'UPDATE_VIEWPORT_SIZE',
  },
};

export default ACTIONS;
