<template>
  <div class="hello">
    <h1>{{ state.message }}</h1>
    <input type="number" class="custom-input" @keyup="(event) => handleRequest(event.target.value)" />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  methods: {
    ...mapActions(["apiRequest"]),
    ...mapMutations({
      setMessage: "SET_MESSAGE",
      setRequestId: "SET_REQUEST_ID"
    }),

    handleRequest(id) {
      this.setRequestId(id);
      this.apiRequest().then(({ data }) => {
        console.log("data", data);

        this.setMessage(data.message);
      });
      console.log("getter", this.getState);
      console.log("state", this.state);
    }
  },
  computed: {
    ...mapGetters({ getState: "getterExample" }),
    ...mapState({ state: state => state })
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.custom-input {
  border: 1px solid blue;
  border-radius: 8px;
  font-size: 16px;
  height: 32px;
  width: 320px;
  padding: 0 4px;
}
</style>
