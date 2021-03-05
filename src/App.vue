<template>
  <Nav />
  <div class="content">
    <router-view />
  </div>
</template>

<script src="">
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.content {
  display: flex;
  border: solid 1px lightskyblue;
  align-items: stretch;
}
</style>
