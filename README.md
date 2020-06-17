<h1 align="center"> VueJS Typescript Test Project </h1>

## Introduction
A test VueJS project in Typescript reduced to its bare minimum while still retaining code layouting automations (prettier and linter).

## Getting Started

### Running the project
1. [Download](https://nodejs.org/en/) the latest Node version. This is marked as `<version number> Current`. Install it on your machine.

2. This project uses Yarn instead of NPM. [Download](https://yarnpkg.com/latest.msi) Yarn. This is a faster package manager than the default `npm` one, likewise also manages your dependencies and handles its updates way better.

3. Clone the project and modify the ENV file based on your Firebase configuration

    ```
    git clone https://github.com/RinMinase/vue-ts-test-project.git vue-ts
    cd vue-ts
    ```

4. Install the dependencies then run the project

    ```
    yarn install
    yarn start
    ```

5. Fire up your browser and go to `localhost:3000`


### Building the project
Installations Required:
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/latest.msi)

1. Fire up your terminal inside the project folder.

2. Build the project by running:

    ```
    yarn build
    ```

3. This should generate a `dist/` folder inside the project folder.


### Project tasks

Task automation is based on [Yarn scripts](https://yarnpkg.com/lang/en/docs/cli/run/) or [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task                | Description                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| `yarn start`        | Run a **development server** on `http://localhost:3000/` while also watching for any file changes    |
| `yarn build`        | Compiles and minifies source code for production, outputs to `dist` folder                           |
| `yarn lint`         | Lints and fixes all TypeScript and Vue files to follow the project coding standards and layout       |


## Built with
* <img width=20 height=20 src="https://vuejs.org/images/icons/favicon-32x32.png"> [VueJS + Router + Vuex](https://vuejs.org//) - Web Framework
* <img width=20 height=20 src="https://www.typescriptlang.org/assets/images/icons/favicon-32x32.png"> [TypeScript](https://www.typescriptlang.org/) - Language syntax
* <img width=20 height=20 src="https://sass-lang.com/favicon.ico"> [Sassy CSS (SCSS)](https://sass-lang.com/) - CSS pre-processor
* <img width=20 height=20 src="https://yarnpkg.com/icons/icon-48x48.png"> [Yarn](https://yarnpkg.com/) - Package Manager
