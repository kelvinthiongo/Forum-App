<template>
  <v-container>
    <v-form @submit.prevent="create">
        <span v-if="errors.title" class="red--text">{{ errors.title[0] }}</span>
      <v-text-field v-model="form.title" label="Title" type="text" required></v-text-field>
      <span v-if="errors.category_id" class="red--text">{{ errors.category_id[0] }}</span>
      <v-select
        :items="categories"
        v-model="form.category_id"
        item-text="name"
        item-value="id"
        label="Category"
        autocomplete
      ></v-select>
      <span v-if="errors.body" class="red--text">{{ errors.body[0] }}</span>
      <vue-simplemde v-model="form.body" />
      <v-btn color="success" type="submit" >Create</v-btn><!--:disabled="disabled"-->
    </v-form>
  </v-container>
</template>

<script>
import VueSimplemde from "vue-simplemde";
export default {
  name: "Create",
  data() {
    return {
      form: {
        title: null,
        category_id: null,
        body: null
      },
      categories: {},
      errors: {}
    };
  },
  created() {
    axios.get("/api/category").then(res => {
      this.categories = res.data.data;
    });
  },
  methods: {
    create() {
      axios
        .post("/api/question", this.form)
        .then(res => this.$router.push(res.data.path))
        .catch(error => {
          this.errors = error.response.data.errors;
          Exception.handleError(error);
        });
    }
  },
  components: {
    VueSimplemde
  },
  computed: {
      disabled() {
          return  !(this.form.title && this.form.body && this.form.category_id)
      }
  },
};
</script>
