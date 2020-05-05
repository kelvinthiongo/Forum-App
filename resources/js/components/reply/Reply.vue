<template>
  <div class="mt-3">
    <v-card>
      <v-card-title>
        <span
          class="grey--text"
          style="font-size: 14px"
        >{{ reply.user }} | posted {{ reply.created_at }}</span>
        <v-spacer></v-spacer>
        <like :content="reply"></like>
      </v-card-title>
      <v-divider></v-divider>

      <edit-reply v-if="editing" :reply="reply"></edit-reply>
      <v-card-text v-else v-html="body" style="color: black; font-14px"></v-card-text>
      <v-divider></v-divider>

      <v-card-actions v-if="own">
        <div v-if="!editing">
          <v-btn icon small @click="edit">
            <v-icon color="orange">edit</v-icon>
          </v-btn>
          <v-btn icon small @click="destroy">
            <v-icon color="red">delete</v-icon>
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import EditReply from "./EditReply";
import Like from "../likes/like"
export default {
  name: "Reply",
  data() {
    return {
      editing: false,
      beforeEditReplyBody: this.reply.body
    };
  },
  components: {
    EditReply, Like
  },
  props: {
    reply: {
      default: {}
    },
    index: null
  },
  methods: {
    edit() {
      this.editing = true;
      this.beforeEditReplyBody = this.reply.body;
    },
    destroy() {
      EventBus.$emit("deleteReply", this.index);
    },
    listen() {
      EventBus.$on("cancelEditing", (body) => {
        this.editing = false;
        if(body !== this.reply.body){
            this.reply.body = this.beforeEditReplyBody;
        }

      });
    }
  },
  computed: {
    own() {
      return User.own(this.reply.user_id);
    },
    body() {
      return md.parse(this.reply.body);
    },
  },
  created() {
    this.listen();
  }
};
</script>

<style lang="scss" scoped>
</style>
