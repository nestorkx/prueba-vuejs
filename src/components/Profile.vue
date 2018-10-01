<template>

  <div class="container">
      <div class="row">
          <div class="col-xl-4 col-4"></div>
          <div class="col-xl-4 col-4">
            <div class="card animated fadeIn fast">
              <img class="card-img-top" :src="getImage(info.picture.large)">
              <div class="card-body">
                <h5 class="card-title">
                  {{ info.name.title | capitalize }}. {{ info.name.first | capitalize }} {{ info.name.last | capitalize }}
                </h5>
                <p class="card-text">{{ info.email | error}}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Age: {{ info.dob.age | error}} </li>
                <li class="list-group-item">Cellphone: {{ info.cell | error}} </li>
                <li class="list-group-item">Phone: {{ info.phone | error}} </li>
                <li class="list-group-item">Gender: {{ info.gender | capitalize}}</li>
                <li class="list-group-item">City: {{ info.location.city | capitalize}}</li>
                <li class="list-group-item">State: {{ info.location.state | capitalize}}</li>
              </ul>
            </div>
          </div>
        <div class="col-xl-4 col-4"></div>
      </div>
      <div class="row mt-4">
        <div class="col-4"></div>
        <div class="col-4">
          <router-link :to="{ name: 'Home' }" class="btn btn-outline-primary btn-block">Back</router-link>
        </div>
        <div class="col-4"></div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'Profile',
  filters: {
    capitalize: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    error: function (value) {
      if (!value) return '';
      value = value.toString();
      return value;
    }
  },
  data () {
    return {
      info: this.$route.params.id
    }
  },
  methods: {
    getImage(src){
      return src
    }
  }

}
</script>
