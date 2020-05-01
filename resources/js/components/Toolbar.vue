<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Forum</v-btn>
        <v-btn flat>Ask Question</v-btn>
        <v-btn flat>Category</v-btn>
        <v-btn flat>Login</v-btn>
      </v-toolbar-items>
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
