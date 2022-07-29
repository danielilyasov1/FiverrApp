<template>
  <!-- <section v-if="!user" > -->
  <section  >
    <h1 v-if="user">user: {{user.username}}</h1>
    <form class="sign-up-form" @submit.prevent="login" v-if="!isSignup" >
      <div >
        <h2 class="join">Sign In to Fiverr</h2>
        
      </div>
      <div>
       
        <input
           class="input"
          type="text"
          placeholder="Enter you username"
          v-model="newUser.username"
          autocomplete="off"
        />
      </div>

      <div >
        <label for="password" >Password</label>
        <input
          class="input"
          type="password"
          v-model="newUser.password"
          placeholder="Enter your password"
        />
      </div>

      <div >
        <button class="form-btn" type="submit">Login</button>
      </div>

      <button @click="isSignup = !isSignup" >
        Don't have an account? Sign up now!
      </button>
    </form>

    <form class="sign-up-form" @submit.prevent="signup" v-if="isSignup" >
      <div >
        <h2 class="join">Join Binderr</h2>
       
      </div>
      <div >
        
        <input class="input"
       
          type="text"
          
          placeholder="Enter your fullname"
          v-model="newUser.fullname"
          autocomplete="off"
        />
      </div>
      <div >
       
        <input
          class="input"
          type="text"
         
          placeholder="Enter you username"
          v-model="newUser.username"
          autocomplete="off"
        />
      </div>
      <div >
       
        <input
           class="input"
          type="password"
         
          v-model="newUser.password"
          placeholder="Enter your password"
        />
      </div>

      <div >
        <button  type="submit"  class="form-btn">Sign up</button>
      </div>
      <div class="agree">By joining I agree to receive emails from Binderr.</div>
      <hr>
      <div class="sign-in">
        <p class="isMember">Already a member?</p>
        <button @click="isSignup = !isSignup" class="sign-in-btn">Sign in</button>
      </div>

      <!-- <button @click="isSignup = !isSignup" >
        Already have an account? Login now!
      </button> -->
    </form>
  </section>



  





 
</template>

<script>
  // import { utilService } from '../services/util-service.js'
export default {
  name: 'login',
   data() {
    return  {
      isSignup: false,
      newUser: { 
        fullname: '', username: '', password: '', memberSince:  this.memberSince},
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    // async memberSince(){
    //   return await utilService.getFormattedDate() 
    // }
  },
  methods: {
     async login() {
      console.log('login',this.newUser )
      await this.$store.dispatch({ type: 'login', cred: this.newUser })
      this.$router.push('/')
    },
    async signup() {
      console.log('login',this.newUser )
      await this.$store.dispatch({ type: 'signup', cred: this.newUser })
      this.$router.push('/')
    },
    async logout() {
      await this.$store.dispatch({ type: 'logout' })
    },
  },
}

</script>
