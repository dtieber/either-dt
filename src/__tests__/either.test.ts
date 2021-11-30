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
