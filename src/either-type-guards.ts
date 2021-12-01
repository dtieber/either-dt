import type { Either, EitherLeft, EitherRight } from './either'

export function guardLeft<L,R>(either: Either<L,R>): either is EitherLeft<L,R> {
  return either.isLeft()
}

export function guardRight<L,R>(either: Either<L,R>): either is EitherRight<L,R> {
  return either.isRight()
}
