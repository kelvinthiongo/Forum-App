<template>
  <v-card>
    <v-container>
      <div>
        <div class="headline">{{ question.title }}</div>

        <span class="grey--text" style="font-size: 12px">
          {{ question.user }} |
          posted {{ question.created_at }}
        </span>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="teal" dark>{{ replyCount }} replies</v-btn>
      <v-card-text v-html="body"></v-card-text>
      <v-divider></v-divider>
      <v-card-actions v-if="own">
        <v-btn icon small>
          <v-icon color="orange" @click="edit">edit</v-icon>
        </v-btn>
        <v-btn icon small>
          <v-icon color="red" @click="destroy">delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ShowQuestion",
  data() {
    return {
      own: User.own(this.question.user_id),
      replyCount: this.question.reply_count,
    };
  },
  props: {
    question: {
      //   type: Object,
      default: {}
    }
  },
  computed: {
    body() {
      return md.parse(this.question.body);
    }
  },
  methods: {
      destroy() {
          axios.delete(`/api/question/${this.question.slug}`)
          .then(res => this.$router.push('/forum'))
          .catch(error => Exception.handleError(error));
      },
      edit() {
          EventBus.$emit('startEditing');
      }
  },
  created () {
      EventBus.$on("IncReplyCount", () => {
        this.replyCount++ ;
      });
      EventBus.$on("DecReplyCount", () => {
        this.replyCount-- ;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>
