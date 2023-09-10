type Recordable<T = any> = Record<string, T>

export function genMessage(langs: Record<string, any>, prefix = 'lang') {
  const obj: Recordable = {}
  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key].default
    let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '')
    const lastIndex = fileName.lastIndexOf('.')
    fileName = fileName.substring(0, lastIndex)
    const keyList = fileName.split('/')
    const moduleName = keyList.shift()
    const objKey = keyList.join('.')
    if (moduleName) {
      if (objKey) {
        obj[moduleName] = obj[moduleName] || {}
        obj[moduleName][objKey] = langFileModule
      } else {
        obj[moduleName] = langFileModule || {}
      }
    }
  })
  return obj
}
