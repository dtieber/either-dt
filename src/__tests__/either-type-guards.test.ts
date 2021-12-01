import type { Either } from '../either'
import { asLeft, asRight } from '../either-initializers'
import { guardLeft, guardRight } from '../either-type-guards'

describe('type guards', () => {
  const proxyLeft = (error: string): Either<string, number> => asLeft<string, number>(error)
  const proxyRight = (result: number): Either<string, number> => asRight<string, number>(result)

  it('can be used to identify Left', () => {
    const unspecifiedEither: Either<string, number> = proxyLeft('Cannot calculate number')

    if(guardLeft(unspecifiedEither)) {
      const value = unspecifiedEither.getLeft()
      expect(value).toEqual('Cannot calculate number')
    } else {
      // you cannot invoke `unspecifiedEither.getLeft()` here
      fail('type guard check failed')
    }
  })

  it('can be used to identify Right', () => {
    const unspecifiedEither: Either<string, number> = proxyRight(3)

    if(guardRight(unspecifiedEither)) {
      const value = unspecifiedEither.getRight()
      expect(value).toEqual(3)
    } else {
      // you cannot invoke `unspecifiedEither.getRight()` here
      fail('type guard check failed')
    }
  })

})
