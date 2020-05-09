import { SET_REQUEST_ID, SET_MESSAGE } from "./mutation-types";

export default {
  [SET_REQUEST_ID](context, param) {
    context.requestId = param;
  },

  [SET_MESSAGE](context, param) {
    context.message = param;
  },
};
