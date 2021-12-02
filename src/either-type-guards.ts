import type { Either, EitherRight,Left } from './either'

export function guardLeft<L,R>(either: Either<L,R>): either is Left<L,R> {
  return either.isLeft()
}

export function guardRight<L,R>(either: Either<L,R>): either is EitherRight<L,R> {
  return either.isRight()
}
