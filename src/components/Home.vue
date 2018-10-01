<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-2 col-md-2 col-12 p-0 sidebar bg">
        <div class="full-height">
          <div class="sidebar-header pt-4 px-3">
            <div class="row">
              <div class="col-6 text-left">
                <span class="custom-font font-weight-bold">USER ATTRIBUTES</span>
              </div>
              <div class="col-6 text-right">
                <span>Match any <i class="fas fa-chevron-down"></i></span>
              </div>
            </div>
          </div>

          <div class="section-nav p-3">
            <ul class="custom-list list-unstyled">

              <li class="mb-2" v-for="menu in menus">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" v-model='menu.hide' v-bind:id="menu.id">
                  <label class="custom-control-label" v-bind:for="menu.id"><i v-bind:class="menu.class"></i> {{ menu.name }}</label>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-10 col-md-10 col-12 p-0">
        <div class="custom-container">
          <div class="row mx-0 mt-3">
            <div class="col-12">
              <h3>{{ users.length }} total users</h3>
            </div>
          </div>
          <div class="row mx-0 mt-3">
            <div class="col-12">
              <table class="custom-table table">
                <thead>
                <tr>
                  <th v-show='!menu.hide' v-for="menu in menus">
                    <span class="custom-font font-weight-bold" >{{ menu.name | uppercase }}</span>
                  </th>
                  <th></th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(user) in users">


                  <td v-show='!menu.hide' v-for="(menu) in menus">
                    <span v-if="menu.name === 'Avatar'">
                        <img class="img-thumbnail" v-bind:src='getImage(user.picture.thumbnail)'>
                    </span>
                    <span v-if="menu.name === 'Gender'">
                         {{ user.gender }}
                    </span>
                    <span v-if="menu.name === 'Title'">
                         {{ user.name.title }}
                    </span>
                    <span v-if="menu.name === 'Firstname'">
                         {{ user.name.first | capitalize }}
                    </span>
                    <span v-if="menu.name === 'Lastname'">
                         {{ user.name.last  | capitalize }}
                    </span>
                    <span v-if="menu.name === 'Email'">
                         {{ user.email }}
                    </span>
                    <span v-if="menu.name === 'Phone'">
                         {{ user.phone }}
                    </span>
                    <span v-if="menu.name === 'Cell'">
                         {{ user.cell }}
                    </span>
                    <span v-if="menu.name === 'Option'">
                      <button class="btn btn-outline-primary">View Profile</button>
                    </span>
                  </td>
                </tr>


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    data () {
      return {
        menus: [{
            id:'customCheck1',
            class: 'fas fa-user',
            name: 'Avatar',
            hide: false
          },
          {
            id:'customCheck2',
            class:'fas fa-building',
            name:'Gender',
            hide: false
          },
          {
            id:'customCheck3',
            class:'fas fa-book',
            name:'Title',
            hide: false
          },
          {
            id:'customCheck4',
            class:'fas fa-tag',
            name:'Firstname',
            hide: false
          },
          {
            id:'customCheck5',
            class:'fas fa-tag',
            name:'Lastname',
            hide: false
          },
          {
            id:'customCheck6',
            class:'fas fa-envelope',
            name:'Email',
            hide: false
          },
          {
            id:'customCheck7',
            class:'fas fa-mobile-alt',
            name:'Phone',
            hide: false
          },
          {
            id:'customCheck8',
            class:'fas fa-mobile-alt',
            name:'Cell',
            hide: false
          },
          {
            id:'customCheck9',
            class:'fas fa-ellipsis-h',
            name:'Option',
            hide: false
          }
        ]
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      uppercase: function(value) {
        if (!value) return '';
        value = value.toString();
        return value.toUpperCase();
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
