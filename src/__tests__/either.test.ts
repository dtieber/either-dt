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

})
