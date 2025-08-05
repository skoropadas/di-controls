## [5.0.10](https://github.com/skoropadas/di-controls/compare/v5.0.9...v5.0.10) (2025-08-05)


### Bug Fixes

* **controls:** ngControl now can be overridden ([f2c8410](https://github.com/skoropadas/di-controls/commit/f2c84101626bfde094274997fe3734b1f21e5f48))


### Reverts

* Revert "fix(controls): di-control overrides `valueAccessor` of the `NgControl`" ([da5f333](https://github.com/skoropadas/di-controls/commit/da5f3337ff8e409bbfca44efecaf06a141e24a6e))
* Revert "fix(controls): allow DefaultValueAccessor override" ([f7b2001](https://github.com/skoropadas/di-controls/commit/f7b20010d7187bd7200bac6540b5e1c2527dbd98))

## [5.0.9](https://github.com/skoropadas/di-controls/compare/v5.0.8...v5.0.9) (2025-01-24)


### Bug Fixes

* **controls:** allow DefaultValueAccessor override ([302cbdc](https://github.com/skoropadas/di-controls/commit/302cbdc6be9c10ada40a0f8d8e3a0d4c5718d7cf))

## [5.0.8](https://github.com/skoropadas/di-controls/compare/v5.0.7...v5.0.8) (2025-01-24)


### Bug Fixes

* **controls:** di-control overrides `valueAccessor` of the `NgControl` ([96b5e8a](https://github.com/skoropadas/di-controls/commit/96b5e8a9d54be32533a03d93808bc3b3f2b62377))

## [5.0.7](https://github.com/skoropadas/di-controls/compare/v5.0.6...v5.0.7) (2024-12-06)


### Bug Fixes

* **project:** disabled state requires addition change detection run in tests ([519661c](https://github.com/skoropadas/di-controls/commit/519661c1323c2e4918d6cf54192ea9d8209c3d5f))

## [5.0.6](https://github.com/skoropadas/di-controls/compare/v5.0.5...v5.0.6) (2024-12-06)


### Bug Fixes

* **project:** disabled state requires addition change detection run in tests in Angular 19 ([d0fe5a7](https://github.com/skoropadas/di-controls/commit/d0fe5a7c8067cf7186ef1d70f0f73df6388cbe57))

## [5.0.5](https://github.com/skoropadas/di-controls/compare/v5.0.4...v5.0.5) (2024-09-05)


### Bug Fixes

* **project:** collection control can't unselect values with "0" ([88ae70b](https://github.com/skoropadas/di-controls/commit/88ae70b1d3eb49401e0b12d1ce0660328117f636))

## [5.0.4](https://github.com/skoropadas/di-controls/compare/v5.0.3...v5.0.4) (2024-08-16)


### Bug Fixes

* **project:** host control update child control that was just updated ([3398ea8](https://github.com/skoropadas/di-controls/commit/3398ea870325be2976a5f58eaf6a4ae535008c43))

## [5.0.3](https://github.com/skoropadas/di-controls/compare/v5.0.2...v5.0.3) (2024-08-15)


### Bug Fixes

* **project:** `withNativeElementSupport` option doesn't set `disabled` attribute ([1f06151](https://github.com/skoropadas/di-controls/commit/1f06151bc1e07cc87d3c0db46017210b6f609b24))

## [5.0.2](https://github.com/skoropadas/di-controls/compare/v5.0.1...v5.0.2) (2024-08-14)


### Bug Fixes

* **project:** `updateModel` method doesn't update control that was changed last ([166e94a](https://github.com/skoropadas/di-controls/commit/166e94a69b184b49e4cfe17d9bf77303d6ef6f43))

## [5.0.1](https://github.com/skoropadas/di-controls/compare/v5.0.0...v5.0.1) (2024-08-12)


### Bug Fixes

* **project:** fix `disabled` type ([5a56d1a](https://github.com/skoropadas/di-controls/commit/5a56d1a029269c2499bef2fa93917691c4a7c426))

# [5.0.0](https://github.com/skoropadas/di-controls/compare/v4.0.1...v5.0.0) (2024-08-12)


### Bug Fixes

* **controls:** controls no longer set attributes like `aria-checked` on elements ([e25ff31](https://github.com/skoropadas/di-controls/commit/e25ff31fd05032327fd011ba61f37eeebdf09ea5))
* **project:** build ([2930ee5](https://github.com/skoropadas/di-controls/commit/2930ee58977fdb944afa6e9147b01fee30c716be))


### BREAKING CHANGES

* **controls:** Controls no longer set attributes like `aria-checked` on elements. This functionality required the use of `ElementRef` and `Renderer`, making it impossible to use `DIControl` for structural directives. Additionally, to support the `disabled` attribute for native elements, you must specify `withNativeElementSupport: true`.

## [4.0.1](https://github.com/skoropadas/di-controls/compare/v4.0.0...v4.0.1) (2024-08-07)


### Bug Fixes

* **collection-control:** DiCollectionControl doesn't support signal `value` from `DIStateControl` ([55b1be3](https://github.com/skoropadas/di-controls/commit/55b1be37a25d0508d41a267a5ed6a5de078a96d4))

# [4.0.0](https://github.com/skoropadas/di-controls/compare/v3.3.0...v4.0.0) (2024-08-07)


### Bug Fixes

* **collection-control:** DiCollectionControl doesn't implement DICompareHost interface ([a7e68a4](https://github.com/skoropadas/di-controls/commit/a7e68a4812b26724b2d85e4ebabecd17955085ba))


### BREAKING CHANGES

* **collection-control:** The implementation of the `DICompareHost` interface inside `DICollectionControl` caused confusion and limited some possible implementations. This has been removed, and instead `DICollectionControl` now has a `compare` property in the configuration that corresponds to the same property in `DIStateControl`.

# [3.3.0](https://github.com/skoropadas/di-controls/compare/v3.2.1...v3.3.0) (2024-07-10)


### Features

* add signals support for `value` and `compare` inputs ([f18661b](https://github.com/skoropadas/di-controls/commit/f18661b3de80a7ce04bc7afe74bf87d5630dda09))

## [3.2.1](https://github.com/skoropadas/di-controls/compare/v3.2.0...v3.2.1) (2024-01-11)


### Bug Fixes

* **controls:** add `DI_HOST_CONTROL` token to exports ([974f1b6](https://github.com/skoropadas/di-controls/commit/974f1b6259b077c20e85e0141feb7b18fb565e33))

# [3.2.0](https://github.com/skoropadas/di-controls/compare/v3.1.1...v3.2.0) (2023-12-21)


### Features

* **controls:** add `data-has-value` attribute that indicates that model has a value ([3e45f01](https://github.com/skoropadas/di-controls/commit/3e45f015dd37f1c6a5c42d915a96f77abcbd5d03))

## [3.1.1](https://github.com/skoropadas/di-controls/compare/v3.1.0...v3.1.1) (2023-12-06)


### Bug Fixes

* **state-control:** value in `compareFn` has null in types ([8026fed](https://github.com/skoropadas/di-controls/commit/8026fed7a129a7a81161da634b9b691cdd6382fa))

# [3.1.0](https://github.com/skoropadas/di-controls/compare/v3.0.1...v3.1.0) (2023-12-06)


### Features

* **state-control:** improve types of DIStateControls, now you can provide type for `value` input which will affect `compareFn` types ([527b4a4](https://github.com/skoropadas/di-controls/commit/527b4a4c071a550e01db68fe63e61eb1d7e92114))

## [3.0.1](https://github.com/skoropadas/di-controls/compare/v3.0.0...v3.0.1) (2023-12-05)


### Bug Fixes

* **state-control:** rename `compareHost` to `compare` due to interface changes ([c8f875d](https://github.com/skoropadas/di-controls/commit/c8f875de6be2360e856ac6c671e9c950d5d19869))

# [3.0.0](https://github.com/skoropadas/di-controls/compare/v2.1.0...v3.0.0) (2023-12-05)


### Bug Fixes

* **state-control:** now `DIStateControl` will force you to implement `@Input value` to have better typings, `uncheckedValue` now also can be provided using `super` call ([c069e50](https://github.com/skoropadas/di-controls/commit/c069e50b6f3aeccaf0c319e6039360f1ebf88cb8))


### Features

* **angular:** update to Angular 17 ([edf647a](https://github.com/skoropadas/di-controls/commit/edf647ab1b232caabd577b5951353e8ad6812b01))
* **project:** update to ng17 ([492db0e](https://github.com/skoropadas/di-controls/commit/492db0e1f6568ecc46707e1a20de76828ca2b65a))
* **state-control:** state controls now can accept compare function instead of compare host ([c6c4905](https://github.com/skoropadas/di-controls/commit/c6c4905426a5c50e40f74e31ee4bea88d081e29b))


### BREAKING CHANGES

* **state-control:** Breaking changes in DIStateControl
* **angular:** Angular 17

# [2.1.0](https://github.com/skoropadas/di-controls/compare/v2.0.1...v2.1.0) (2023-11-06)


### Features

* **project:** add Combobox demo ([82bd22c](https://github.com/skoropadas/di-controls/commit/82bd22cf4d93ea80b64fbd234d9a5e761beefb3f))
* **project:** add date range component and update documentation ([b22a90e](https://github.com/skoropadas/di-controls/commit/b22a90e06535dac6b5d050c4f0fd051072a0d3b3))

## [2.0.1](https://github.com/skoropadas/flex-controls/compare/v2.0.0...v2.0.1) (2023-05-09)


### Bug Fixes

* **project:** remove `forwardRef` for `provideControlHost` ([6bf3b44](https://github.com/skoropadas/flex-controls/commit/6bf3b444873e95d52f152acb463e0a0ccfa5644b))

# [2.0.0](https://github.com/skoropadas/flex-controls/compare/v1.1.5...v2.0.0) (2023-05-09)


### Features

* **project:** angular 16 ([b369663](https://github.com/skoropadas/flex-controls/commit/b369663ee344401fd54f80e7350832246b2cdf93))


### BREAKING CHANGES

* **project:** Angular 16

## [1.1.5](https://github.com/skoropadas/flex-controls/compare/v1.1.4...v1.1.5) (2023-03-31)


### Bug Fixes

* **project:** angular version ([cd2a92d](https://github.com/skoropadas/flex-controls/commit/cd2a92d145bb5e6947c7ed24e230f3c265e603b6))

## [1.1.4](https://github.com/skoropadas/flex-controls/compare/v1.1.3...v1.1.4) (2023-03-31)


### Bug Fixes

* **project:** extend rxjs dependencies ([f5d9f32](https://github.com/skoropadas/flex-controls/commit/f5d9f32ac73b250aff1e65cbda22f2d0323d31e8))
* **project:** injecting control error ([0960da0](https://github.com/skoropadas/flex-controls/commit/0960da087f9de7587a1289ccf0355d0ff55a5c69))
* **project:** update version of target compiler ([c2b99a2](https://github.com/skoropadas/flex-controls/commit/c2b99a24129fe2289ded50328b812e4be06731dd))

## [1.1.3](https://github.com/skoropadas/flex-controls/compare/v1.1.2...v1.1.3) (2023-03-31)


### Bug Fixes

* **project:** update version of target compiler ([81cdbaa](https://github.com/skoropadas/flex-controls/commit/81cdbaa5250ff4b4e3ad6672e3bdd29bc519a6f6))

## [1.1.2](https://github.com/skoropadas/flex-controls/compare/v1.1.1...v1.1.2) (2022-12-16)


### Bug Fixes

* **project:** extend rxjs dependencies ([ee47d10](https://github.com/skoropadas/flex-controls/commit/ee47d10d0bbbf61cdee0691d39567c9ecc742925))

## [1.1.1](https://github.com/skoropadas/flex-controls/compare/v1.1.0...v1.1.1) (2022-12-08)


### Bug Fixes

* **project:** unbound angular dependencies ([42ad908](https://github.com/skoropadas/flex-controls/commit/42ad90800f7312b4ab08dd9b4963b1b60ef78ca4))

# [1.1.0](https://github.com/skoropadas/flex-controls/compare/v1.0.4...v1.1.0) (2022-07-25)


### Features

* **providers:** add `provideControlHost` function that helps to provide hosts ([b843364](https://github.com/skoropadas/flex-controls/commit/b84336490c78fbe38d8a53059ad7375454d55a2a))
* **providers:** add `provideControlHost` function that helps to provide hosts ([2ad605e](https://github.com/skoropadas/flex-controls/commit/2ad605ef0addea0a952b67594e44d443ae024309))
* **providers:** add ControlSilencer directive that helps you to disable comunication between control and host ([8632d85](https://github.com/skoropadas/flex-controls/commit/8632d8522c28377f22f40a3cec31aa3857e3c6a9))
* **providers:** add ControlSilencer directive that helps you to disable comunication between control and host ([4ebb6ee](https://github.com/skoropadas/flex-controls/commit/4ebb6eeef9bc059a35ebe0f7e34cfad00fb79284))

## [1.0.4](https://github.com/skoropadas/flex-controls/compare/v1.0.3...v1.0.4) (2022-07-22)


### Bug Fixes

* **project:** upgrade usage ([a803808](https://github.com/skoropadas/flex-controls/commit/a803808d6155e603127895c4ea60b715f48c1b3f))

## [1.0.3](https://github.com/skoropadas/flex-controls/compare/v1.0.2...v1.0.3) (2022-07-22)


### Bug Fixes

* **project:** upgrade usage ([e2ce4f1](https://github.com/skoropadas/flex-controls/commit/e2ce4f122ae06b43ffb4dc33df3966a4fe634176))
* **project:** upgrade usage ([efde928](https://github.com/skoropadas/flex-controls/commit/efde9288792710bfc2ae021f5dea8211d997aa69))

## [1.0.2](https://github.com/skoropadas/flex-controls/compare/v1.0.1...v1.0.2) (2022-07-22)


### Bug Fixes

* **project:** upgrade usage ([04d3d4e](https://github.com/skoropadas/flex-controls/commit/04d3d4e5ae718db5f272e4f7722121f03d3c680f))

## [1.0.1](https://github.com/skoropadas/flex-controls/compare/v1.0.0...v1.0.1) (2022-07-03)


### Bug Fixes

* **project:** downgrade rxjs version ([a10ec7a](https://github.com/skoropadas/flex-controls/commit/a10ec7a8c71f12d19087bea9b54f77f9a8588e94))

# 1.0.0 (2022-07-03)


### Features

* **project:** init project ([1dfee34](https://github.com/skoropadas/flex-controls/commit/1dfee34fa3ded501a51ed95ffe682f11f58a8c45))
