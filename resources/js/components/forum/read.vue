<template>
  <div v-if="question">
    <edit-question v-if="editing" :question="question"></edit-question>
    <show-question :question="question" v-else></show-question>
    <v-container>
      <replies :question="question"></replies>
      <new-reply :question_slug="question.slug"></new-reply>
    </v-container>
  </div>
</template>

<script>
import ShowQuestion from "./ShowQuestion";
import EditQuestion from "./editQuestion";
import Replies from "../reply/Replies";
import NewReply from "../reply/NewReply";
export default {
  data() {
    return {
      question: null,
      editing: false,
      beforeEditBody: null
    };
  },
  created() {
    this.listen();
    this.getQuestion();
  },
  components: {
    ShowQuestion,
    EditQuestion,
    Replies,
    NewReply
  },
  methods: {
    listen() {
      EventBus.$on("startEditing", () => {
        this.editing = true;
        this.beforeEditBody = this.question.body;
      });
      EventBus.$on("cancelEditing", body => {
        if (this.question.body !== body) {
          this.question.body = this.beforeEditBody;
        }
        this.editing = false;
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
