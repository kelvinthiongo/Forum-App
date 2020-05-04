<template>
  <v-card tile>
    <v-toolbar color="cyan" dark dense mt-2>
      <v-toolbar-title>Categories</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item v-for="category in categories" :key="category.slug">
          <v-list-item-content>
            <v-list-item-title>{{ category.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "AppSideBar",
  data() {
    return {
      categories: null
    };
  },
  created() {
    axios.get("/api/category").then(res => (this.categories = res.data.data));
  }
};
</script>

<style lang="scss" scoped>
</style>
