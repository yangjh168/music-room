export const inBrowser = typeof window !== 'undefined'

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

// Promise => Promise, object => object,
export function isStrictObject(val: unknown): val is Record<string, unknown> {
  return val !== null && is(val, 'Object')
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}

// Promise => object, object => object
export const isObject = (val: unknown): val is Record<string, unknown> =>
  val !== null && typeof val === 'object'

export const isDef = <T>(val: T): val is NonNullable<T> => val !== undefined && val !== null

export const isNonEmpty = (val: unknown) => val !== undefined && val !== null && val !== ''

export const isEmpty = (val: unknown) => val === undefined || val === null || val === ''

export const isPromise = <T>(val: unknown): val is Promise<T> =>
  isObject(val) && isFunction(val.then) && isFunction(val.catch)

export const isFunction = (val: unknown) => typeof val === 'function'

export const isNumeric = (val: string | number): val is string =>
  typeof val === 'number' || /^[+-]?\d+(\.\d+)?$/.test(val)
