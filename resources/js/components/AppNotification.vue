<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon :color="color">add_alert</v-icon>
          <span style="font-size: 12px; vertical-align: super">{{ unreadCount }}</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(notification, index) in unread" :key="notification.id">
          <router-link :to="notification.path">
            <v-list-item-title
              @click="readnotification(notification, index)"
            >{{ notification.question }}</v-list-item-title>
          </router-link>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="notification in read" :key="notification.id">
          <v-list-item-title>{{ notification.question }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unreadCount: 0,
      read: {},
      unread: {},
      sound: "http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3"
    };
  },
  methods: {
    getNotifications() {
      axios
        .post(`/api/notifications`)
        .then(res => {
          this.read = res.data.read;
          this.unread = res.data.unread;
          this.unreadCount = res.data.unread.length;
        })
        .catch(error => Exception.handleError(error));
    },
    readnotification(notification, index) {
      axios
        .post("/api/markAsRead", { id: notification.id })
        .then(res => {
          this.unread.splice(index, 1);
          this.read.push(notification);
          this.unreadCount--;
        })
        .catch(error => Exception.handleError(error));
    },
    playSound() {
      let alert = new Audio(this.sound);
      alert.play();
    }
  },
  computed: {
    color() {
      return this.unreadCount == 0 ? "red lighten-4" : "red";
    }
  },
  created() {
    if (User.loggedIn()) {
      this.getNotifications();
      Echo.private("App.User." + User.id()).notification(notification => {
        this.playSound();
        this.unread.unshift(notification);
        this.unreadCount++;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
