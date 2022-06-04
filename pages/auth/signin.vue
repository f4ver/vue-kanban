<template>
  <div>
    <div class="login-form">
      <p>Sign in page</p>
      <input type = "text"  v-model = "auth.email" name="login">
      <br>
      <input type = "password"   v-model = "auth.password" name="password">
      <br><br>
      <button v-on:click = "login()" class="sign-btn">Sign</button>
      <button v-on:click = "forgotPassword()" class="forgot-btn">Forgot password</button>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        //we are signed in
        $nuxt.$router.push('/drag')
      })
    },
    forgotPassword() {
      let that = this
      this.$fire.auth.sendPasswordResetEmail(this.auth.email)
      .then(function (){
        that.snackbarText = 'reset link sent to ' + that.auth.email
        that.snackbar = true
      })
      .catch(function (error) {
        that.snackbarText = error.message
        that.snackbar = true
      })
    }
  }
}




</script>

<style>
.login-form {
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 500px;
  opacity: 1;
  text-align: center;
}

</style>