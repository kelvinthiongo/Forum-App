<template>
  <div class="mt-4">
    <vue-simplemde v-model="body" />
    <v-btn color="success" @click="submit">
        Reply
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
        question_slug: {
            default: null
        },
    },
    components: {
        VueSimplemde,
    },
    methods: {
        submit() {
            axios.post(`/api/question/${this.question_slug}/reply`, {body: this.body})
            .then(res => {
                this.body = '';
                EventBus.$emit('NewReply', res.data.reply);
                EventBus.$emit("IncReplyCount");
                window.scrollTo(0,0);
            })
            .catch(error => Exception.handleError(error));
        }
    },
};
</script>

<style lang="scss" scoped>
</style>
