import { asLeft, asRight } from '../either-initializers'

describe('either', () => {

  it('applies fa if it is a Left', () => {
    const actual = asLeft<string, number>('Cannot calculate number')

    const folded = actual.fold<string>((val) => `Error: ${val}`, (val) => `Success: ${val}`)

    expect(folded).toEqual('Error: Cannot calculate number')
  })

  it('applies fb if it is a Right', () => {
    const actual = asRight<string, number>(3)

    const folded = actual.fold<number>(() => 0, (val) => val * 2)

    expect(folded).toEqual(6)
  })

  it('getLeft returns left value if it is a Left', () => {
    const actual = asLeft<string, number>('Cannot calculate number')

    const value = actual.getLeft()

    expect(value).toEqual('Cannot calculate number')
  })

  it('getRight returns right value if it is a Right', () => {
    const actual = asRight<string, number>(3)

    const value = actual.getRight()

    expect(value).toEqual(3)
  })

  it('isLeft returns true if it is a Left', () => {
    const actual = asLeft<string, number>('Cannot calculate number')

    expect(actual.isLeft()).toBe(true)
  })

  it('isLeft returns false if it is a Right', () => {
    const actual = asRight<string, number>(3)

    expect(actual.isLeft()).toBe(false)
  })

  it('isRight returns true if it is a Right', () => {
    const actual = asRight<string, number>(3)

    expect(actual.isRight()).toBe(true)
  })

  it('isRight returns false if it is a Left', () => {
    const actual = asLeft<string, number>('Cannot calculate number')

    expect(actual.isRight()).toBe(false)
  })

  it('map applies a function if it is a Right', () => {
    const actual = asRight<string, number>(3)

    const mapped = actual.map<boolean>((val) => !!val)

    expect(mapped).toEqual({
      left: undefined,
      right: true,
    })
  })

  it('map does not apply the function and returns same left if it is a Left', () => {
    const actual = asLeft<string, number>('Cannot calculate number')

    const mapped = actual.map<boolean>((val) => !!val)

    expect(mapped).toEqual({
      left: 'Cannot calculate number',
      right: undefined,
    })
  })

  it('orElse returns right if it is a Right', () => {
    const actual = asRight<string, number>(3)

    const value = actual.orElse(9)

    expect(value).toEqual(3)
  })

  it('orElse returns the given value if it is a Left', () => {
    const actual = asLeft<string, number>('Cannot calculate number')

    const value = actual.orElse(9)

    expect(value).toEqual(9)
  })

})
