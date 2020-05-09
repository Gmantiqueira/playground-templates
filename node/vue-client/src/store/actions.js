import axios from "axios";

export default {
  apiRequest(context) {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3333/example/${context.state.requestId || 0}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
