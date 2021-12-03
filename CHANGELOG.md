# Changelog

All notable changes to this project will be documented in this auto-generated file.


## 1.0.0 (2021-12-02)


### :tropical_fish: Features

* add checks for `isLeft`/`isRight` ([4687e4a](https://github.com/dtieber/either-dt/commit/4687e4a922c9d592f5fdb4d47697f68c371458a4))
* add option to `map` righty values ([c1ddca5](https://github.com/dtieber/either-dt/commit/c1ddca5c397bae5ab8f99444767f8f661817e16c))
* add option to transform value using `fold` ([b81fa0b](https://github.com/dtieber/either-dt/commit/b81fa0bf35aa065947a5ae70d03a6076a11f4823))
* add primitive accessors for left/right ([d87ed9c](https://github.com/dtieber/either-dt/commit/d87ed9cd269b98f935230b4167409663d93e6c81))
* add simple either class ([be569dd](https://github.com/dtieber/either-dt/commit/be569ddb6403fa8449e9ccd8e2b7c5f33c2639e8))
* add type-guards for EitherLeft and EitherRight ([51a424b](https://github.com/dtieber/either-dt/commit/51a424b3a1c205b9445fcedc39b3a8de2d794ca8))
* return either right value or given value with `getOrElse` ([743f196](https://github.com/dtieber/either-dt/commit/743f19666219de8870ee3945f75e3cdee16708e4))


### :hammer: Refactorings 

* remove union type `Either` and use base class instead ([7f512cd](https://github.com/dtieber/either-dt/commit/7f512cd72fe7d5b53eff49a95cb697bd50e97af1))
* rename `EitherLeft` to just `Left` ([e435c11](https://github.com/dtieber/either-dt/commit/e435c116fac6d6a177a1a3840e1c2cf1ae291d56))
* rename `EitherRight` to just `Right` ([45432b9](https://github.com/dtieber/either-dt/commit/45432b94e4e3cfac200ff0932664a37aac25238c))
* split `Either` in distinct classes for `Left` and `Right` ([136cd8a](https://github.com/dtieber/either-dt/commit/136cd8aa49d2ce75774afaf38018d4f9da186000))
