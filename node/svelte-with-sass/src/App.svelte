<script>
  import { Router, Link, Route } from "svelte-routing";
  import Login from "./pages/Login.svelte";
  import About from "./pages/About.svelte";
  import Dashboard from "./pages/Dashboard.svelte";

  export let url = "";
</script>

<style lang="scss" global>
  @import "./styles/global.scss";
</style>

<Router {url}>
  <nav>
    <Link to="/">Login</Link>
    <Link to="about">About</Link>
    <Link to="dashboard">Dashboard</Link>
  </nav>
  <div>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/about" component={About} />
    <Route path="/">
      <Login teste="testando" />
    </Route>
  </div>
</Router>
