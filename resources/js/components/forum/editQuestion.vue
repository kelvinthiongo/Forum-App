<template>
  <v-container fluid>
    <v-card>
      <v-form @submit.prevent="update">
        <v-text-field v-model="form.title" label="Title" type="text" required></v-text-field>
        <vue-simplemde v-model="form.body" />
        <v-card-actions>
          <v-btn small type="submit" :disabled="disabled">
            <v-icon color="teal">save</v-icon>
          </v-btn>
          <v-btn icon small @click="cancel">
            <v-icon>cancel</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import VueSimplemde from "vue-simplemde";
export default {
  data() {
    return {
      name: "EditQuestion",
      form: {
        title: null,
        body: null
      }
    };
  },
  components: {
    VueSimplemde
  },
  props: {
    question: {
      default: {}
    }
  },
  created() {
    this.form = this.question;
  },
  methods: {
    cancel(body) {
      EventBus.$emit("cancelEditing", body);
    },
    update() {
      axios
        .put(`/api/question/${this.form.slug}`, this.form)
        .then(res => this.cancel(this.question.body))
        .catch(error => Exception.handleError(error));
    }
  },
  computed: {
    disabled() {
      return !(this.form.title && this.form.body);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
