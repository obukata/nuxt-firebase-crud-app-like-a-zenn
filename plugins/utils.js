const timestampToDate = (timestamp) => {
  const date = `${timestamp.toDate().getFullYear()}年${timestamp.toDate().getMonth()+1}月${timestamp.toDate().getDate()}日`
  return date
}

const idToName = (id, user) => {
  let filtered
  user.filter(item => {
    if(item.id == id) {
      filtered = item.name
    }
  })
  return filtered
}

const nameToId = (name, user) => {
  let filtered
  user.filter(item => {
    if(item.name == name) {
      filtered = item.id
    }
  })
  return filtered
}


export default (context, inject) => {
  inject('timestampToDate', timestampToDate)
  inject('idToName', idToName)
  inject('nameToId', nameToId)
}