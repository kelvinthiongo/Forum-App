<template>
  <div class="mt-4">
    <vue-simplemde v-model="body" />
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
    data() {
        return {
            body: null
        }
    },
  props: {
    reply: {
      default: {}
    }
  },
  components: {
    VueSimplemde
  },
  methods: {
    update() {
        axios.put(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body: this.body})
        .then( () => {
            EventBus.$emit("updateReply", this.body);
            this.cancel()
        });
    },
    cancel() {
      EventBus.$emit("cancelEditing");
    }
  },
  created () {
      this.body = this.reply.body;
  },
};
</script>

<style lang="scss" scoped>
</style>
