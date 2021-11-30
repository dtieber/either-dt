import { Either } from '../either'

describe('either', () => {

  it('can hold a correct value in right', () => {
    const actual = Either.fromRight<string, number>(3)

    expect(actual).toEqual({
      left: undefined,
      right: 3,
    })
  })

  it('can hold an error in left', () => {
    const actual = Either.fromLeft<string, number>('Cannot calculate number')

    expect(actual).toEqual({
      left: 'Cannot calculate number',
      right: undefined,
    })
  })

  it('applies fa if it is a Left', () => {
    const actual = Either.fromLeft<string, number>('Cannot calculate number')

    const folded = actual.fold<string>((val) => `Error: ${val}`, (val) => `Success: ${val}`)

    expect(folded).toEqual('Error: Cannot calculate number')
  })

  it('applies fb if it is a Right', () => {
    const actual = Either.fromRight<string, number>(3)

    const folded = actual.fold<number>(() => 0, (val) => val * 2)

    expect(folded).toEqual(6)
  })

  it('isLeft returns true if it is a Left', () => {
    const actual = Either.fromLeft<string, number>('Cannot calculate number')

    expect(actual.isLeft()).toBe(true)
  })

  it('isLeft returns false if it is a Right', () => {
    const actual = Either.fromRight<string, number>(3)

    expect(actual.isLeft()).toBe(false)
  })

  it('isRight returns true if it is a Right', () => {
    const actual = Either.fromRight<string, number>(3)

    expect(actual.isRight()).toBe(true)
  })

  it('isRight returns false if it is a Left', () => {
    const actual = Either.fromLeft<string, number>('Cannot calculate number')

    expect(actual.isRight()).toBe(false)
  })
})
