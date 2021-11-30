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

  public fold<C>(fa: (l: L) => C, fb: (r: R) => C): C {
    if(this.left !== undefined) {
      return fa(this.left)
    }

    // using `!` is not nice, but tsc is not able to detect that it actually cannot be undefined
    // eslint-disable-next-line
    return fb(this.right!)
  }

  public isLeft(): boolean {
    return this.left !== undefined
  }

  public isRight(): boolean {
    return this.right !== undefined
  }

  public map<C>(f: (r: R) => C): Either<L,C> {
    if(this.left !== undefined) {
      return Either.fromLeft(this.left)
    }

    // using `!` is not nice, but tsc is not able to detect that it actually cannot be undefined
    // eslint-disable-next-line
    return Either.fromRight(f(this.right!))
  }
}
