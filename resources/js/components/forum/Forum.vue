<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <question v-for="question in questions" :key="question.path" :question="question"></question>
        <v-pagination
          v-model="meta.current_page"
          class="my-4"
          :length="meta.last_page"
          @input="changePage"
        ></v-pagination>
      </v-flex>
      <v-flex xs4>
        <app-sidebar></app-sidebar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import question from "./question";
import AppSidebar from "./AppSideBar";
export default {
  data() {
    return {
      questions: {},
      meta: {}
    };
  },
  components: {
    question,
    AppSidebar
  },
  methods: {
    changePage(page) {
      let url = `/api/question?page=${page}`;
      this.fetchQuestions(url);
    },
    fetchQuestions(url) {
      axios
        .get(url)
        .then(res => {
          this.questions = res.data.data;
          this.meta = res.data.meta;
        })
        .catch(error => Exception.handleError(error));
    }
  },
  created() {
    let url = "/api/question";
    this.fetchQuestions(url);
  }
};
</script>
