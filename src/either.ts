import { asLeft, asRight } from './either-initializers'

export abstract class Either<L,R> {
  protected readonly left: L | undefined
  protected readonly right: R | undefined

  protected constructor(left: L | undefined, right: R | undefined) {
    this.left = left
    this.right = right
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
      return asLeft(this.left)
    }

    // using `!` is not nice, but tsc is not able to detect that it actually cannot be undefined
    // eslint-disable-next-line
    return asRight(f(this.right!))
  }

  public orElse(val: R): R {
    if(this.right === undefined) {
      return val
    }
    return this.right
  }
}

export class EitherLeft<L, R> extends Either<L, R> {
  constructor(left: L) {
    super(left, undefined)
  }

  public getLeft(): L {
    // using `!` is not nice, but tsc is not able to detect that it actually cannot be undefined
    // eslint-disable-next-line
    return this.left!
  }
}

export class EitherRight<L, R> extends Either<L, R> {
  constructor(right: R) {
    super(undefined, right)
  }

  public getRight(): R {
    // using `!` is not nice, but tsc is not able to detect that it actually cannot be undefined
    // eslint-disable-next-line
    return this.right!
  }
}

