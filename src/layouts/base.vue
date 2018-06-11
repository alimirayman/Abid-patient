<template>
  <div>
  <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="true"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          @click="changeRoute(item.route)"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="true"
    >
      <v-btn icon @click="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-avatar
            color="grey lighten-4"
          >
            <img src="http://icons.iconarchive.com/icons/visualpharm/must-have/128/User-icon.png" alt="avatar">
          </v-avatar>
          <span>
            Mir Ayman Ali 
          </span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'person',
          title: 'Profile',
          route: 'Profile'
        },
        {
          icon: 'history',
          title: 'Patient\'s History',
          route: 'History'
        },
        {
          icon: 'insert_drive_file',
          title: 'Reports',
          route: 'Reports'
        },
        {
          icon: 'schedule',
          title: 'Appointment',
          route: 'Appoinment'
        },
        {
          icon: 'exit_to_app',
          title: 'Logout',
          route: '404'
        }
      ],
      miniVariant: false,
      title: 'Patient Hub'
    }
  },
  methods: {
    changeRoute (routeName) {
      this.$router.push({name: routeName})
    }
  },
  name: 'App'
}
</script>
