<template>
  <div class="signup row">
    <div class="col-md-10">
      <div class="row">
        <BackButton/>
        <h1 class="text-left">{{ $t('edit_acct.title') }}</h1>
      </div>
      <div class="col-md-8">
        <form @submit.prevent="submit" class="mt-5">
          <div class="form-group row">
            <label for="inputUsername" class="col-sm-4 col-form-label">{{ $t('auth.username') }}</label>
            <div class="col-sm-8">
              <input v-model="credentials.username" type="text" class="form-control" id="inputUsername" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-4 col-form-label">{{ $t('auth.password') }}</label>
            <div class="col-sm-8">
              <input v-model="credentials.password" type="password" class="form-control" id="inputPassword" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputConPassword" class="col-sm-4 col-form-label">{{ $t('auth.c_password') }}</label>
            <div class="col-sm-8">
              <input v-model="confirmPassword" type="password" class="form-control" id="inputConPassword" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputLastName" class="col-sm-4 col-form-label">{{ $t('auth.l_name') }}</label>
            <div class="col-sm-8">
              <input v-model="credentials.lastName" type="text" class="form-control" id="inputLastName" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputFirstName" class="col-sm-4 col-form-label">{{ $t('auth.f_name') }}</label>
            <div class="col-sm-8">
              <input v-model="credentials.firstName" type="text" class="form-control" id="inputFirstName" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail" class="col-sm-4 col-form-label">{{ $t('auth.email') }}</label>
            <div class="col-sm-8">
              <input v-model="credentials.email" type="email" class="form-control" id="inputEmail" required>
            </div>
          </div>
          <button :disabled="credentials.password !== confirmPassword" type="submit" class="btn btn-primary float-right">{{ $t('edit_acct.btn_text') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'EditUserDetialsPage',
  components: {
    BackButton: () => import('@/components/BackButton')
  },
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
