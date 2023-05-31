/**
 * session 관리를 위한 싱글턴 인스턴스
 * 클로져 사용해 여러 곳에서 사용해도 동일한 인스턴스를 사용한다
 */
const session = (() => {
  let instance = null

  return () => {
    if (instance) return instance
    instance = sessionImpl()

    return instance
  }
})()

function sessionImpl() {
  // TODO: 개발 완료 시 빈 배열 선언으로 변경
  // DONE
  let list = []

  const get = () => list

  const set = (newSession) => (list = [...list, newSession])

  const remove = (session) => (list = list.filter((t) => t !== session))

  return { get, set, remove }
}

export default session
