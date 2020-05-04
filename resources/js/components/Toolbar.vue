<template>
  <v-card color="grey lighten-4" text height="50px" tile>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
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
      ]
    };
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
