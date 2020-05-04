<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field v-model="form.email" label="E-mail" type="email" required></v-text-field>
      <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>

      <v-text-field v-model="form.password" label="Password" type="password" required></v-text-field>
      <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>

      <v-btn color="success" type="submit">Login</v-btn>
      <router-link to="/signup">
        <v-btn color="primary">Sign Up</v-btn>
      </router-link>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      errors: {}
    };
  },
  methods: {
    login() {
      const result = User.login(this.form);
      if (result != "success") {
        this.errors = {email: ['Invalid credentials']};
      }
    }
  },
  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: "forum" });
    }
  }
};
</script>
