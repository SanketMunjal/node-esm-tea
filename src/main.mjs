'use strict'
import teapot, {handle, spout, tea} from './kettle'
import tea2 from './kettle2'
import _ from 'lodash'
//import _, {toUpper} from 'lodash'

console.log(teapot, tea, handle, spout)
console.log(tea2)
console.log(_.toUpper('hello, world'))
// console.log(toUpper('hello, world'))

async function main() {
  console.log('!!!')
  const _ = await import('lodash')
  console.log(_.default.toUpper('dynamic import!'))
}

main()

