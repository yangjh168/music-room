import { genMessage } from '../helper'

const modules = import.meta.glob('./zh/**/*.ts', { eager: true })
export default {
  ...genMessage(modules, 'zh'),
}
