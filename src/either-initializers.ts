import { Left,Right } from './either'

export function asLeft<L, R>(value: L): Left<L,R> {
  return new Left<L,R>(value)
}

export function asRight<L, R>(value: R): Right<L,R> {
  return new Right<L,R>(value)
}
