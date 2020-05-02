<template>
  <v-card color="grey lighten-4" text height="50px" tile>
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <router-link to="/forum">
          <v-btn text>Forum</v-btn>
        </router-link>
        <router-link to="/ask-question">
          <v-btn text>Ask Question</v-btn>
        </router-link>
        <router-link to="/category">
          <v-btn text>Category</v-btn>
        </router-link>
        <router-link to="/login">
          <v-btn text>Login</v-btn>
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
  name: "Toolbar"
};
</script>

<style lang="scss" scoped>
</style>
