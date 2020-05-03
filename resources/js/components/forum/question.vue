<template>
  <v-card>
    <v-card-title>
      <div>
        <h3 class="headline mb-0">
            <router-link :to="question.path">
                {{ question.title }}
            </router-link>
        </h3>
        <span class="grey--text">
            {{ question.user }} |
            <span style="font-size: 12px">posted {{ question.created_at }}</span>
        </span>
      </div>
    </v-card-title>
    <v-card-text>{{ question.body }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Question",
  props: {
      question: {
          type: Object,
          default: {}
      },
  },
};
</script>
