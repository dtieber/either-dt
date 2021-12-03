import type { Either } from '../src/either'
import { asLeft, asRight } from '../src/either-initializers'
import { guardLeft, guardRight } from '../src/either-type-guards'

/* eslint-disable no-console */

function divide(dividend: number, divisor: number): Either<Error, number> {
  if(divisor === 0) {
    return asLeft(new Error('Cannot divide by zero'))
  }

  return asRight(dividend / divisor)
}

const resultRight = divide(12, 3)
const resultLeft = divide(12, 0)

console.log('Examples: type guards')
if(guardRight(resultRight)) {
  console.log(`  result is: ${resultRight.getRight()}`)
} else {
  // unfortunately we'd need to use the type guard here again
  // because just because it is not a `Right` does not mean it's a `Left`
}

console.log('Examples: fold')
resultRight.fold((e) => console.log(`  error: ${e.message}`), (x) => console.log(`  result: ${x}`))
resultLeft.fold((e) => console.log(`  error: ${e.message}`), (x) => console.log(`  result: ${x}`))

console.log('Examples: map')
const mapResult1 = resultRight.map((x) => x * 2)
const mapResult2 = resultLeft.map(x => x * 2)
if(guardRight(mapResult1)) {
  console.log(`  result: ${mapResult1.getRight()}`)
}
if(guardLeft(mapResult2)) {
  console.warn(`  error: ${mapResult2.getLeft().message}`)
}

console.log('Examples: orElse')
const orElseResult1 = resultRight.orElse(42)
const orElseResult2 = resultLeft.orElse(42)
console.log(`  result1: ${orElseResult1}`)
console.log(`  result2: ${orElseResult2}`)
