<template>
  <div class="min-h-screen flex items-center justify-center">
    <!-- Main Auth Form -->
    <div class="card">
      <div class="card2">
        <form class="form bg-gray-900" @submit.prevent="handleSubmit">
          <p id="heading">{{ isLogin ? 'Login' : 'Sign Up' }}</p>
          
          <!-- Username Field -->
          <div class="field bg-gray-900 ring-2 ring-red-500"
          :class="{ 'outline-2 outline-red-500': errors.username }">

            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
            </svg>

            <input
              v-model="form.username"
              type="text"
              class="input-field"
              placeholder="Username"
              autocomplete="off"
              :class="{ 'border-red-500': errors.username }"
            />
          </div>

          <span v-if="errors.username" class="text-red-500 text-sm slide transition ease-in-out duration-300 ">{{ errors.username }}</span>


          <!-- Email Field (Sign Up Only) -->
          <div v-if="!isLogin" class="field bg-gray-900">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-6.297 3.778a1 1 0 0 1-1.406 0L1 5.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.383z"></path>
            </svg>
            <input
              v-model="form.email"
              type="email"
              class="input-field"
              placeholder="Email"
              autocomplete="off"
              :class="{ 'border-red-500': errors.email }"
            />

            
          </div>
          <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>


          <!-- Country Field (Sign Up Only) -->
          <div v-if="!isLogin" class="field bg-gray-900">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm1-7H7v2H5v2h2v2h2v-2h2V9H9V7z"></path>
            </svg>
            <select
              v-model="form.country"
              class="input-field"
              :class="{ 'border-red-500': errors.country }"
            >
              <option value="" disabled>Select Country</option>
              <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
            </select>
          </div>
          <span v-if="errors.country" class="text-red-500 text-sm">{{ errors.country }}</span>

          <!-- Password Field -->
          <div class="field bg-gray-900">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
            </svg>
            <input
              v-model="form.password"
              type="password"
              class="input-field"
              placeholder="Password"
              :class="{ 'border-red-500': errors.password }"
            />
          </div>
          <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>

          <!-- Form Buttons -->

          <div class="btn">
            <button type="submit" class="button1 bg-green-500">
              {{ isLogin ? 'Login' : 'Sign Up' }}
            </button>
            <button type="button" class="button2 bg-gray-800" @click="toggleAuthMode">
              {{ isLogin ? 'Switch to Sign Up' : 'Switch to Login' }}
            </button>
          </div>
          <button type="button" class="button3 bg-gray-800" @click="signInWithGoogle">
            <svg class="inline-block mr-2" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" fill="#FFC107"/>
              <path d="M6.6 28.6c-.7-2.1-1.1-4.4-1.1-6.6 0-2.3.4-4.5 1.2-6.6l-5.3-4C.4 14.2 0 18 0 22s.4 7.8 1.4 11.4l5.2-4.8z" fill="#FF3D00"/>
              <path d="M24 44c5.9 0 11.2-2.1 15.4-5.6l-6.4-6.4c-2.2 1.8-5 2.9-8.1 2.9-6.1 0-11.2-4.1-12.9-9.7l-5.2 4.8C11.1 39.2 17.3 44 24 44z" fill="#4CAF50"/>
              <path d="M43.5 20H24v8.5h11.8c-.7 2.3-2 4.3-3.9 5.7l6.4 6.4C42.6 36.3 45 29.7 45 24c0-1.3-.2-2.7-.5-4z" fill="#1976D2"/>
            </svg>
            Sign in with Google
          </button>
          <button v-if="isLogin" type="button" class="button3 bg-gray-800" @click="showForgotPassword = true">
            Forgot Password
          </button>
          <span v-if="errors.form" class="text-red-500 text-sm text-center">{{ errors.form }}</span>
        </form>
      </div>
    </div>

    <!-- Forgot Password Modal -->
    <div v-if="showForgotPassword" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="card bg-gray-900 p-6 rounded-lg">
        <h2 class="text-white text-lg mb-4">Reset Password</h2>
        <form @submit.prevent="handleForgotPassword">
          <div class="field bg-gray-900">
            <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" class="input-icon">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-6.297 3.778a1 1 0 0 1-1.406 0L1 5.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.383z"></path>
            </svg>
            <input
              v-model="forgotForm.email"
              type="email"
              class="input-field"
              placeholder="Email"
              autocomplete="off"
              :class="{ 'border-red-500': forgotErrors.email }"
            />
            <span v-if="forgotErrors.email" class="text-red-500 text-sm">{{ forgotErrors.email }}</span>
          </div>
          <div class="btn mt-4">
            <button type="submit" class="button1 bg-green-500">Send Reset Email</button>
            <button type="button" class="button2 bg-gray-800" @click="showForgotPassword = false">Cancel</button>
          </div>
          <span v-if="forgotErrors.form" class="text-red-500 text-sm text-center">{{ forgotErrors.form }}</span>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive state for main form
const isLogin = ref(true)
const form = ref({
  username: '',
  email: '',
  country: '',
  password: ''
})
const errors = ref({})
const countries = ref(['United States', 'Canada', 'United Kingdom', 'Australia', 'India', 'Other']) // Sample country list

// Reactive state for forgot password form
const showForgotPassword = ref(false)
const forgotForm = ref({ email: '' })
const forgotErrors = ref({})

// Form validation for login/signup
const validateForm = () => {
  errors.value = {}
  
  // Username validation
  if (!form.value.username) {
    errors.value.username = 'Username is required'
  } else if (!/^[a-zA-Z0-9_]{3,16}$/.test(form.value.username)) {
    errors.value.username = 'Username must be 3-16 characters, alphanumeric or underscore'
  }

  // Email validation (signup only)
  if (!isLogin.value) {
    if (!form.value.email) {
      errors.value.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
      errors.value.email = 'Invalid email format'
    }
  }

  // Country validation (signup only)
  if (!isLogin.value && !form.value.country) {
    errors.value.country = 'Country is required'
  }

  // Password validation
  if (!form.value.password) {
    errors.value.password = 'Password is required'
  } else if (form.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
  } else if (!/[A-Z]/.test(form.value.password) || !/[0-9]/.test(form.value.password)) {
    errors.value.password = 'Password must include at least one uppercase letter and one number'
  }

  return Object.keys(errors.value).length === 0
}

// Forgot password form validation
const validateForgotForm = () => {
  forgotErrors.value = {}
  if (!forgotForm.value.email) {
    forgotErrors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotForm.value.email)) {
    forgotErrors.value.email = 'Invalid email format'
  }
  return Object.keys(forgotErrors.value).length === 0
}

// Handle login/signup submission
const handleSubmit = async () => {
  if (!validateForm()) return

  try {
    if (isLogin.value) {
      // await loginUser(form.value.username, form.value.password)
    } else {
      // await registerUser(form.value.username, form.value.email, form.value.country, form.value.password)
    }
    router.push('/dashboard')
  } catch (error) {
    errors.value.form = error.message || 'An error occurred. Please try again.'
  }
}

// Handle Google Sign-In
const signInWithGoogle = async () => {
  try {
    // await signInWithPopup(auth, provider)
    router.push('/dashboard')
  } catch (error) {
    errors.value.form = error.message || 'Google Sign-In failed. Please try again.'
  }
}

// Handle forgot password submission
const handleForgotPassword = async () => {
  if (!validateForgotForm()) return

  try {
    // await resetPassword(forgotForm.value.email)
    alert('Password reset email sent! Please check your inbox.')
    showForgotPassword.value = false
    forgotForm.value.email = ''
  } catch (error) {
    forgotErrors.value.form = error.message || 'Failed to send reset email. Please try again.'
  }
}

// Toggle between login and signup
const toggleAuthMode = () => {
  isLogin.value = !isLogin.value
  errors.value = {}
  form.value = { username: '', email: '', country: '', password: '' }
}



watchEffect(()=>{
  if(form.value.username.length){
    errors.value = {}
  }
})
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 0.4em;
  border-radius: 25px;
  transition: 0.4s ease-in-out;
}

.card {
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 22px;
  transition: all 0.3s;
}

.card2 {
  border-radius: 0;
  transition: all 0.2s;
}

.card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

.card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
}

#heading {
  text-align: center;
  margin: 2em;
  color: rgb(255, 255, 255);
  font-size: 1.2em;
}

.field {
  display: flex;
  align-items: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  /* outline: 3px solid #00ff75; */

}



.input-icon {
  height: 1.3em;
  width: 1.3em;
  fill: white;
}

.input-field {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #d3d3d3;
  padding: 0.5em;

}

.input-field:focus {
  outline: px solid #00ff75;
}

.btn {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 2.5em;
  gap: 0.5em;
}

.button1 {
  padding: 0.5em 1.1em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  color: white;
}

.button1:hover {
  background-color: black;
  color: white;
}

.button2 {
  padding: 0.5em 2.3em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  color: white;
}

.button2:hover {
  background-color: black;
  color: white;
}

.button3 {
  margin-bottom: 1em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  color: white;
}

.button3:hover {
  background-color: red;
  color: white;
}

@keyframes slide-down {
   0%{
     transform: translateY(0px);
   }
   100%{
    transform: translateY(20px);
   }
}


.slide{
  animation: slide-down ;
}
</style>