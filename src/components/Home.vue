<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-2 col-md-2 col-12 p-0 sidebar bg">
        <Sidebar></Sidebar>
      </div>
      <div class="col-xl-10 col-md-10 col-12 p-0">
        <Container></Container>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Container from "./Container";

export default {
  name: 'Home',
  components: {Container, Sidebar},
  data () {
    return {

    }
  }
}
</script>
