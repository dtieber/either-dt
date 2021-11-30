export class Either<L,R> {
  private left: L | undefined
  private right: R | undefined

  private constructor(left: L | undefined, right: R | undefined) {
    this.left = left
    this.right = right
  }

  public static fromLeft<L, R>(value: L): Either<L,R> {
    return new Either<L,R>(value, undefined)
  }

  public static fromRight<L, R>(value: R): Either<L,R> {
    return new Either<L,R>(undefined, value)
  }

  public isLeft(): boolean {
    return this.left !== undefined
  }

  public isRight(): boolean {
    return this.right !== undefined
  }
}
