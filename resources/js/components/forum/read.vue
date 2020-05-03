<template>
  <div v-if="question">
    <edit-question v-if="editing" :question="question"></edit-question>
    <show-question :question="question" v-else></show-question>
  </div>
</template>

<script>
import ShowQuestion from "./ShowQuestion";
import EditQuestion from "./editQuestion";
export default {
  data() {
    return {
      question: null,
      editing: false
    };
  },
  created() {
    this.listen();
    this.getQuestion();
  },
  components: {
    ShowQuestion,
    EditQuestion
  },
  methods: {
    listen() {
      EventBus.$on("startEditing", () => {
        this.editing = true;
      });
      EventBus.$on('cancelEditing', () => {
          this.editing = false
      });
    },
    getQuestion() {
      axios
        .get(`/api/question/${this.$route.params.slug}`)
        .then(res => (this.question = res.data.data))
        .catch(error => console.log(error.response.data));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
