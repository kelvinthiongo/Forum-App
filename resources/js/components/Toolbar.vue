<template>
  <v-card color="grey lighten-4" text height="70px" tile>
    <v-toolbar  color="indigo" height="70px" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
          <router-link  to="/" class="white--text">
              24Seven Devs
          </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <app-notification v-if="loggedIn"></app-notification>
      <div class="hidden-sm-and-down">
        <router-link v-for="item in active_items" :key="item.title" :to="item.to">
          <v-btn text>{{ item.title }}</v-btn>
        </router-link>
      </div>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
import AppNotification from "./AppNotification"
export default {
  name: "Toolbar",
  data() {
    return {
      items: [
        { title: "Forum", to: "/forum", show: true },
        { title: "Ask Question", to: "/ask-question", show: User.loggedIn() },
        { title: "Category", to: "/category", show: User.admin() },
        { title: "Login", to: "/login", show: !User.loggedIn() },
        { title: "Logout", to: "/logout", show: User.loggedIn() }
      ],
      loggedIn: User.loggedIn(),
    };
  },
  components: {
      AppNotification,
  },
  computed: {
    active_items() {
      let active = [];
      this.items.map(item => {
        if (item.show) {
          active = [...active, item]
        }
      });
      return active;
    }
  },
  created () {
      EventBus.$on('logout', () => {
          User.logout();
      });
  },
};
</script>

<style lang="scss" scoped>
</style>
