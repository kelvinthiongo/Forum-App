<template>
  <div>
    <reply v-for="(reply, index) in content" :reply="reply" :key="reply.id" :index="index"></reply>
  </div>
</template>

<script>
import Reply from "./Reply";
export default {
  name: "Replies",
  data() {
    return {
      content: this.question.replies
    };
  },
  props: {
    question: {
      default: {}
    }
  },
  components: {
    Reply
  },
  methods: {
    listen() {
      EventBus.$on("NewReply", reply => {
        this.content.unshift(reply);
      });
      EventBus.$on("deleteReply", index => {
        axios
          .delete(
            `/api/question/${this.question.slug}/reply/${parseInt(
              this.content[index].id
            )}`
          )
          .then(res => {
            this.content.splice(index, 1);
            EventBus.$emit("DecReplyCount");
          });
      });

      Echo.channel("newReplyChannel").listen("NewReplyEvent", e => {
        if (User.id() != e.reply.user_id) {
          EventBus.$emit("IncReplyCount");
          this.content.unshift(e.reply);
        }
      });
      Echo.channel("deleteReplyChannel").listen("DeleteReplyEvent", e => {
        EventBus.$emit("DecReplyCount");
        for (let index = 0; index < this.content.length; index++) {
          if (this.content[index].id == e.id) {
            this.content.splice(index, 1);
          }
        }
      });
    }
  },
  created() {
    this.listen();
  }
};
</script>

<style lang="scss" scoped>
</style>
