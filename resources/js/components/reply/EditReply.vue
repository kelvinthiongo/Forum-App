<template>
  <div class="mt-4">
    <vue-simplemde v-model="reply.body" />
    <v-btn icon small @click="update">
      <v-icon color="orange">save</v-icon>
    </v-btn>
    <v-btn icon small @click="cancel">
      <v-icon color="red">cancel</v-icon>
    </v-btn>
  </div>
</template>

<script>
import VueSimplemde from "vue-simplemde";
export default {
  props: ['reply'],
  components: {
    VueSimplemde
  },
  methods: {
    update() {
        axios.put(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body: this.reply.body})
        .then( () => {
            this.cancel(this.reply.body)
        });
    },
    cancel(body) {
      EventBus.$emit("cancelEditing", body);
    }
  },
  created () {
      this.body = this.reply.body;
  },
};
</script>

<style lang="scss" scoped>
</style>
