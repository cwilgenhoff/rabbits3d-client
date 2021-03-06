const ACTIONS = {
  RESET: 'RESET',
  IDLE: 'IDLE',
  MOVE: {
    FOWARD: 'FOWARD',
    LEFT: 'LEFT',
    BACK: 'BACK',
    RIGHT: 'RIGHT',
  },
  CAMERA: {
    ROTATE_CAMERA: 'ROTATE_CAMERA',
    MOVE_CAMERA: 'MOVE_CAMERA',
  },
  CHARACTER: {
    WALK: 'WALK',
  },
  BROWSER: {
    REGISTER_EVENT_SUCCESS: 'REGISTER_EVENT_SUCCESS',
    UNREGISTER_EVENT_SUCCESS: 'UNREGISTER_EVENT_SUCCESS',
    UPDATE_VIEWPORT_SIZE: 'UPDATE_VIEWPORT_SIZE',
  },
  REFERENCES: {
    SET_CAMERA_REFERENCE: 'SET_CAMERA_REFERENCE',
    SET_SCENE_REFERENCE: 'SET_SCENE_REFERENCE',
    SET_MOUSE_INPUT_REFERENCE: 'SET_MOUSE_INPUT_REFERENCE',
    SET_CONTAINER_REFERENCE: 'SET_CONTAINER_REFERENCE',
  },
  MAP: {
    CLICK_MAP_EVENT: 'CLICK_MAP_EVENT',
  },
};

export default ACTIONS;
