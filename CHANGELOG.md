# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.1.0](https://github.com/hoppr-eip/hoppr-mobile/compare/v0.0.1...v0.1.0) (2019-12-12)


### Features

* **android:** add DirectSms module + package ([2dcfade](https://github.com/hoppr-eip/hoppr-mobile/commit/2dcfade2d5bf449af2cd7b0fc4b2b59b2009475b))
* **app:** add alert button, send a SMS to each contacts ([29bba16](https://github.com/hoppr-eip/hoppr-mobile/commit/29bba165ee54fd11489af7ff5adec24f6c9a4f50))


### Bug Fixes

* **app:** display the alert button only when a contact has been added ([f4dd0f0](https://github.com/hoppr-eip/hoppr-mobile/commit/f4dd0f07bf102d04d6fa3e7a48dededa0d342986))
* **app:** replace View by ScrollView ([3d0d39f](https://github.com/hoppr-eip/hoppr-mobile/commit/3d0d39f7529943aa7e34c6147c8920f9f0c283d6))
* **contact:** remove bad regex, just avoid empty name ([e9569dc](https://github.com/hoppr-eip/hoppr-mobile/commit/e9569dc864943eaec38a8c282aab58dbd47215f8))
* **contact:** replace UI library, add vector icons library, fix problem in contact form validation ([f837719](https://github.com/hoppr-eip/hoppr-mobile/commit/f837719345411f2f18fd9f939b335ebe5e3ef1ba)), closes [#6](https://github.com/hoppr-eip/hoppr-mobile/issues/6)


### Code Style

* apply prettier ([459fd3a](https://github.com/hoppr-eip/hoppr-mobile/commit/459fd3a10fa70c3aedc419d81a9f1763d921cf72))


### Continuous Integration

* **travis:** add minimalist conf to see travis behaviour ([914c6fe](https://github.com/hoppr-eip/hoppr-mobile/commit/914c6fecb9120009beb4880445a8617703bd1d5b))


### Improvement

* **alert-button:** add a real styled red button with warning icon ([1f9261f](https://github.com/hoppr-eip/hoppr-mobile/commit/1f9261fe1039c2cfc3d4e60d21e232579fa82fdd))
* **app:** application handle only one Contact instead of a list ([450d839](https://github.com/hoppr-eip/hoppr-mobile/commit/450d8395d6e729b5fb167d8985c64ff9567e028e))
* **app:** move alertButton style into a StyleSheet ([a64cd91](https://github.com/hoppr-eip/hoppr-mobile/commit/a64cd9121bfd76f35ee2affb34d4eca25b94c630))


### Miscellaneous

* **android:** add logo in all size ([7784ea2](https://github.com/hoppr-eip/hoppr-mobile/commit/7784ea232702aea2578dc97dd6883ee049816db2))
* **android:** change app name to HoppR ([dff3f4b](https://github.com/hoppr-eip/hoppr-mobile/commit/dff3f4b8f36b70281bd8c450dc377eb79cc9cba7))
* **android:** config release mode in build.gradle ([f05955e](https://github.com/hoppr-eip/hoppr-mobile/commit/f05955e2c2e8902f0ed712ff36627a23faebba47))

### 0.0.1 (2019-12-06)


### Features

* **contact:** add contact form and contact display ([90e7205](https://github.com/hoppr-eip/hoppr-mobile/commit/90e72058397ad6c48b9ea313694f5fab7e2733f5))
* **contact:** add the form for the mvp not styled yet ([13e3772](https://github.com/hoppr-eip/hoppr-mobile/commit/13e3772d64feb718cea8475e06c95f7297ffc5d6))


### Bug Fixes

* **prettier:** change prettier config because it was only passing on .json a root ([1f9f558](https://github.com/hoppr-eip/hoppr-mobile/commit/1f9f55888577b28dabc56c3ad97e2bbb514d2c46))


### Code Style

* **all:** apply prettier to the repo using new configuration ([06abb9d](https://github.com/hoppr-eip/hoppr-mobile/commit/06abb9d394a16b4037b5fc7a98aff99f0da2dfe5))
* **app:** apply prettier to the repo ([5530c4d](https://github.com/hoppr-eip/hoppr-mobile/commit/5530c4d9802ec97c1df8ffa29de8cd28949f7366))


### Miscellaneous

* **npm:** add conventional changelog and commitizen for beautiful commits ([a232ff6](https://github.com/hoppr-eip/hoppr-mobile/commit/a232ff697cddc2988f7eb2755c5abd9042fef376))
* **npm:** add lint staged and husky to prettify during commit ([615b2b9](https://github.com/hoppr-eip/hoppr-mobile/commit/615b2b9c52ca816e1d406bbe8a8c060d81de99bb))
* **npm:** add prettier to repo ([f013dcd](https://github.com/hoppr-eip/hoppr-mobile/commit/f013dcd66bf674286fe28e091fc1bc963356e5ce))
* **npm:** add standard-version to generate changelog + tag/release ([6897e1c](https://github.com/hoppr-eip/hoppr-mobile/commit/6897e1c1dd2f8e4c5c3eb1dd8a09636d3bfa2a71))
* **npm:** add tcomb to handle forms ([1f7ed8c](https://github.com/hoppr-eip/hoppr-mobile/commit/1f7ed8c680296cc672b6b2ac79330cff2b23bca1))
* **npm:** change prettier config ([c74ff62](https://github.com/hoppr-eip/hoppr-mobile/commit/c74ff621aedb586c43d6541cc6f9f16ccf9e024a))
* **npm:** move scripts.precommit to husky.hooks.pre-commit ([7ea72ac](https://github.com/hoppr-eip/hoppr-mobile/commit/7ea72ac5a1c6800549dbc4e6a14675e79509df97))
* **npm:** remove eslint since it has been replaced with prettier ([0104b85](https://github.com/hoppr-eip/hoppr-mobile/commit/0104b85999765169870d89415b1f4edd041a6b96))
* **npm:** replace conventional-changelog with cz-conventional-changelog ([e574ac7](https://github.com/hoppr-eip/hoppr-mobile/commit/e574ac75531cd82827a4ac0a37cabb4e7f0b1fe7))
* **react-native:** init react-native using typescript template ([b4a9b2c](https://github.com/hoppr-eip/hoppr-mobile/commit/b4a9b2cee2097cd138efa39c8a3668cee1e77698))
* **readme:** add readme to repository ([1f0ae10](https://github.com/hoppr-eip/hoppr-mobile/commit/1f0ae10b1cf5a6973ce7988f66136a274aac2de0))
