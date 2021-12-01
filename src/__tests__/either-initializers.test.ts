import { asLeft, asRight } from '../either-initializers'

describe('either-initializers', () => {

  it('asRight wraps value into a Right', () => {
    const actual = asRight<string, number>(3)

    expect(actual).toEqual({
      left: undefined,
      right: 3,
    })
  })

  it('asLeft wraps value into a Left', () => {
    const actual = asLeft<string, number>('Cannot calculate number')

    expect(actual).toEqual({
      left: 'Cannot calculate number',
      right: undefined,
    })
  })

})
