import { EitherLeft, EitherRight } from './either'

export function asLeft<L, R>(value: L): EitherLeft<L,R> {
  return new EitherLeft<L,R>(value)
}

export function asRight<L, R>(value: R): EitherRight<L,R> {
  return new EitherRight<L,R>(value)
}
