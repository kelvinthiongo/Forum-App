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
          .then(res => this.content.splice(index, 1));
      });

      Echo.private("App.User." + User.id()).notification(notification => {
        this.content.unshift(notification.reply);
      });
      Echo.channel('deleteReplyChannel')
      .listen('DeleteReplyEvent', e => {
          for(let index = 0; index < this.content.length; index++){
              if(this.content[index].id == e.id){
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
