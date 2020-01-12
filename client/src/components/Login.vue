<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
          <v-text-field type ="email" name="email" v-model="email" label="Email"></v-text-field>
          <br />
          <v-text-field type ="password" name="password" v-model="password" label="Password"></v-text-field>
          <br />
          <v-btn class="cyan" @click="login" dark>Login</v-btn>
          <div class="error" v-html="error"></div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
