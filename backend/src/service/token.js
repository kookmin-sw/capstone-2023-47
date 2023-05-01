const token = (() => {
  let instance = null

  return () => {
    if (instance) return instance
    instance = tokenImpl()

    return instance
  }
})()

function tokenImpl() {
  let list = []

  const get = () => list

  const set = (newToken) => (list = [...list, newToken])

  const remove = (token) => (list = list.filter((t) => t !== token))

  return { get, set, remove }
}

export default token
