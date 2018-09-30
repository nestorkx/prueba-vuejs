<template>
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
            <input type="checkbox" class="custom-control-input" v-bind:id="menu.id">
            <label class="custom-control-label" v-bind:for="menu.id"><i v-bind:class="menu.class"></i> {{ menu.name }}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Sidebar',
    data () {
      return {
         menus: [{
             id:'customCheck1',
             class: 'fas fa-user',
             name: 'Avatar'
           },
           {
             id:'customCheck2',
             class:'fas fa-building',
             name:'Gender'
           },
           {
             id:'customCheck3',
             class:'fas fa-book',
             name:'Title'
           },
           {
             id:'customCheck4',
             class:'fas fa-tag',
             name:'Firstname'
           },
           {
             id:'customCheck4',
             class:'fas fa-tag',
             name:'Lastname'
           },
           {
             id:'customCheck5',
             class:'fas fa-envelope',
             name:'Email'
           },
           {
             id:'customCheck6',
             class:'fas fa-mobile-alt',
             name:'Phone'
           },
           {
             id:'customCheck7',
             class:'fas fa-mobile-alt',
             name:'Cell'
           }
         ]
      }
    }
  }
</script>
