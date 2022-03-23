import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth()
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in
  const user = userCredential.user
  // ...
})
.catch((error) => {
  const errorCode = error.code
  const errorMessage = error.message
  // ...
})



export const state = () => ({
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user
}

export const mutation = {
  setUser(state, { user }) {
    state.user = user
    state.isLoggedIn = true
  }
}

export const actions = {
  async login({ commit }, { id }) {
    const user = await this.$axios.$get('/users/${id}.json')
    if(!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  },
  async register({ commit }, { id }) {
    const payload = {}
    payload[id] = { id }
    await this.$axios.$patch('/users.json', payload)
    const user = await this.$axios.$get('/users/${id}.json')
    if(!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  }
}
