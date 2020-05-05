<template>
  <div>
    <v-btn icon @click="likeIt">
      <v-icon :color="color">favorite</v-icon>
    </v-btn>
    <span style="font-size: 14px; vertical-align: super">{{ count }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liked: this.content.liked,
      count: this.content.like_count
    };
  },
  props: {
    content: {
      default: {}
    }
  },
  methods: {
    likeIt() {
      if (User.loggedIn) {
        this.liked ? this.decr() : this.incr();
      }
    },
    incr() {
      axios.post(`/api/like/${this.content.id}`).then(res => {
        this.count++;
        this.liked = true;
      });
    },
    decr() {
      axios.delete(`/api/like/${this.content.id}`).then(res => {
        this.count--;
        this.liked = false;
      });
    }
  },
  computed: {
    color() {
      return this.liked ? "red" : "red lighten-4";
    }
  },
  created() {
    Echo.channel("likeChannel").listen("LikeEvent", e => {
      if(this.content.id == e.id){
          e.type == 1? this.count++ : this.count--;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
