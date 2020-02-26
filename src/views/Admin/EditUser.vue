<template>
  <div class="signup row">
    <div class="col-md-6">
      <div class="row">
        <button class="p-1 mr-4 rounded" @click.prevent="$router.go(-1)">Prev page</button>
        <h1 class="text-left">Edit user account</h1>
      </div>
      <form @submit.prevent="submit" class="mt-5">
        <div class="form-group row">
          <label for="inputUsername" class="col-sm-4 col-form-label">Username</label>
          <div class="col-sm-8">
            <input v-model="credentials.username" type="text" class="form-control" id="inputUsername" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
          <div class="col-sm-8">
            <input v-model="credentials.password" type="password" class="form-control" id="inputPassword" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputConPassword" class="col-sm-4 col-form-label">Confirm Password</label>
          <div class="col-sm-8">
            <input v-model="confirmPassword" type="password" class="form-control" id="inputConPassword" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputLastName" class="col-sm-4 col-form-label">Last Name</label>
          <div class="col-sm-8">
            <input v-model="credentials.lastName" type="text" class="form-control" id="inputLastName" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputFirstName" class="col-sm-4 col-form-label">First Name</label>
          <div class="col-sm-8">
            <input v-model="credentials.firstName" type="text" class="form-control" id="inputFirstName" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail" class="col-sm-4 col-form-label">Email</label>
          <div class="col-sm-8">
            <input v-model="credentials.email" type="email" class="form-control" id="inputEmail" required>
          </div>
        </div>
        <button :disabled="credentials.password !== confirmPassword" type="submit" class="btn btn-primary float-right">Save</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'EditUserDetialsPage',
  async mounted () {
    const check = this.users.some((user) => user.id === this.$route.params.id)
    if (!check) {
      await this.getUsers()
    }
    const user = this.users.filter((user) => user.id === this.$route.params.id)
    if (user.length > 0) {
      this.credentials = user[0]
    }
  },
  data () {
    return {
      credentials: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        role: ''
      },
      confirmPassword: ''
    }
  },
  methods: {
    ...mapActions(['getUsers', 'updateAccount']),
    async submit () {
      await this.updateAccount(this.credentials)
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState(['users'])
  }
}
</script>
