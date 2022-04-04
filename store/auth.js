import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const state = () => ({
  isLoggedIn: false,
  userUid: '',
  email: '',
  error: {}
})

export const mutations = {
  setLoginState(state, loggedIn) {
    state.isLoggedIn = loggedIn
    console.log(state.isLoggedIn)
  },
  setUserUid(state, userUid) {
    state.userUid = userUid
    console.log(state.userUid)
  },
  setEmail(state, email) {
    state.email = email
    console.log(state.email)
  },
  setError(state, error) {
    state.error = error
  },
}

export const actions = {
  async login({ commit }, payload) {
    const auth = getAuth(this.$firebase)
    await signInWithEmailAndPassword(auth, payload.email, payload.password)
    .then((userCredential) => {
      commit('setLoginState', true)
      commit('setUserUid', userCredential.user.uid)
      commit('setEmail', userCredential.user.email)
      this.$router.push('/')
    })
    .catch((error) => {
      let errorMsg = {
        email: '',
        password: ''
      }
      switch(error.code) {
        case 'auth/user-not-found':
          errorMsg.email = 'このメールアドレスは登録されていません。'
          break
        case 'auth/invalid-email':
          errorMsg.email = 'メールアドレスの形式が無効です。'
          break
        case 'auth/invalid-password':
          errorMsg.password = 'パスワードは6文字以上の文字列を指定する必要があります。'
          break
        case 'auth/weak-password':
          errorMsg.password = 'パスワードは6文字以上の文字列を指定する必要があります。'
          break
        case 'auth/wrong-password':
          errorMsg.password = 'パスワードが違います。'
          break
      }
      commit('setError', errorMsg)
    })
  },
  async logout({ commit }) {
    const auth = getAuth(this.$firebase)
    await signOut(auth)
    .then(() => {
      commit('setLoginState', false)
      commit('setUserUid', '')
      commit('setEmail', '')
      this.$router.push('/')
    })
    .catch(e => {
    })
  },
  addUserInfo({ commit }, payload) {
    commit('setLoginState', true)
    commit('setUserUid', payload.uid)
    commit('setEmail', payload.email)
  }
}

export const getters = {
  getLoggedIn: state => !!state.isLoggedIn,
  getUserUid: state => state.userUid,
  getEmail: state => state.email
}