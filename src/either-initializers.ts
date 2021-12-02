import { EitherRight,Left } from './either'

export function asLeft<L, R>(value: L): Left<L,R> {
  return new Left<L,R>(value)
}

export function asRight<L, R>(value: R): EitherRight<L,R> {
  return new EitherRight<L,R>(value)
}
