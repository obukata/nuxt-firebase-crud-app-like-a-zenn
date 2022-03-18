const STORAGE_KEY = 'posts'

const setStorage = () => {
  if(localStorage.getItem(STORAGE_KEY)) {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY))
    }catch(e) { }
  }
}

const addPost = (baseArray, addArray) => {
  baseArray.push({
    id: baseArray.length,
    emoji: addArray.emoji,
    title: addArray.title,
    text: addArray.text,
    user: addArray.user
  })
  savePosts(baseArray)
}

const removePost = (x, array) => {
  array.splice(x, 1)
  savePosts(array)
}

const savePosts = (array) => {
  const parsed = JSON.stringify(array)
  localStorage.setItem(STORAGE_KEY, parsed)
}

const updatePostInfo = (baseArray, updateArray) => {
  const updateInfo = {
    id: updateArray.id,
    emoji: updateArray.emoji,
    title: updateArray.title,
    text: updateArray.text,
    user: updateArray.user
  }
  const postIndex = baseArray.findIndex(element => element.id === updateArray.id)
  console.log(postIndex)
  baseArray.splice(postIndex, 1, updateInfo)
  console.log(baseArray)
  savePosts(baseArray)
}

export default({ app }, inject) => {
  inject('setStorage', setStorage)
  inject('addPost', addPost)
  inject('removePost', removePost)
  inject('savePosts', savePosts)
  inject('updatePostInfo', updatePostInfo)
}
