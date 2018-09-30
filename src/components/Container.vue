<template>
  <div class="custom-container">
    <div class="row mx-0 mt-3">
      <div class="col-12">
        <h3>5 total users</h3>
      </div>
    </div>
    <div class="row mx-0 mt-3">
      <div class="col-12">
        <table class="custom-table table">
          <thead>
            <tr>
              <th><span class="custom-font font-weight-bold">AVATAR</span></th>
              <th><span class="custom-font font-weight-bold">GENDER</span></th>
              <th><span class="custom-font font-weight-bold">TITLE</span></th>
              <th><span class="custom-font font-weight-bold">FIRSTNAME</span></th>
              <th><span class="custom-font font-weight-bold">LASTNAME</span></th>
              <th><span class="custom-font font-weight-bold">EMAIL</span></th>
              <th><span class="custom-font font-weight-bold">PHONE</span></th>
              <th><span class="custom-font font-weight-bold">CELL</span></th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users">
               <td><img class="img-thumbnail" v-bind:src='getImage(user.picture.thumbnail)'> </td>
               <td>{{user.gender }}</td>
               <td>{{ user.name.title }}</td>
               <td>{{user.name.first | capitalize }}</td>
               <td>{{user.name.last | capitalize }}</td>
               <td>{{user.email }}</td>
               <td>{{user.phone }}</td>
               <td>{{ user.cell }}</td>
               <td><button class="btn btn-outline-primary">View Profile</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  mounted() {
    this.$store.dispatch('user/loadUsers')
  },
  computed: mapState({
    'users':  state => state.user.users
}),
  methods: {
    getImage(src){
      return src
    }
  }
}
</script>
