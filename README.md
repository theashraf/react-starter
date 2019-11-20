# React TDD Starter

![](https://github.com/theashraf/react-starter/workflows/CI/badge.svg)

## What is TDD?

Test-Driven Development (TDD) is an approach to automated software testing that involves writing a failing test before writing the production code to make it pass. TDD helps you develop a robust test suite to catch bugs, as well as guiding you to more modular, flexible code.

TDD approaches:

- Middle-Out Testing: an approach to testing that begins with domain objects and works from there out to user-facing code.
- Outside-in Testing: an approach to testing that begins with the outside of the system, i.e. with acceptance tests, and then writes isolation tests as needed to specify classes needed to satisfy the acceptance test.

## Outside-in Steps

TODO:

## Why Outside-in?

1. Confidence it works. Unit or component tests are great to specify the functionality of functions or classes, but the app can still crash or do the wrong thing when they’re connected together. An end-to-end test confirms that all the pieces connect in the right way.

2. 100% test coverage. By only writing the minimal code necessary to pass each error, this ensures we don’t have any code that isn’t covered by a test. This avoids the situation where a change we make breaks untested code.

3. Minimal code. We build the minimal features that pass our test. This help us avoid to speculate on features the code might need in the future, that increase our maintenance cost without adding any benefit.

4. Ability to refactor. Because we have 100% test coverage, we can make changes to our code to improve its design to handle future requirements. Our code doesn’t develop cruft that makes it complex to work within.

5. Ability to ship quickly. We aren’t spending time building code our users don’t need. When some old code is slowing us down, we can refactor it to make it quicker to work with. And our tests reduce the amount of manual testing we need to do before a release.

## Features

- [x] test setup
- [x] hot reload
- [x] code formatting
- [x] static code analysis using eslint
- [x] ~~travis starter config file~~ github CI workflow config
- [x] vaildate staged files on precommit hook
- [x] lint commit messages on commit hooks

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

runs unit and e2e tests<br>

### `npm run test:unit:watch`

runs unit tests in watch mode

### `npm run test:unit`

runs unit tests

### `npm run test:e2e`

runs e2e testing using cypress

### `npm run test:cy:open`

opens cypress

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!.

### `npm run lint`

lints js and jsx files.

### `npm run commit`

prompts you to fill out any required commit fields at commit time. No more waiting until later for a git commit hook to run and reject your commit.

### `npm run format`

formats .js|jsx|json|md|yml files.
