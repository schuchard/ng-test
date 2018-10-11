# NgTest Demo

Demo Angular app with Jest and Cypress for unit, integration and e2e tests. Slides [here](https://docs.google.com/presentation/d/e/2PACX-1vRi8krtA4MfzZzUkIQ5e_uYBwjYVKMEHwxNI6Hnl6uQn5BGMeAMONKaL2AR9MTEX71VpkomWvWdy0v1/pub?start=false&loop=false&delayms=3000&slide=id.p).

## Demo

https://ngtest.netlify.com

## Integration tests

    yarn test

Both the Taco and Pizza components use the `order-display` component and test that the DOM is updated correctly for each component.

- [taco order - int.spec.ts](src/app/taco-order/taco-order.component.int.spec.ts)
- [pizza order - int.spec.ts](src/app/pizza-order/pizza-order.component.int.spec.ts)

## Unit tests

Isolated unit tests at the method level.

    yarn test

- [taco order - spec.ts](src/app/taco-order/taco-order.component.spec.ts) - contains a service mock
- [pizza order - spec.ts](src/app/pizza-order/pizza-order.component.spec.ts)

## E2E tests

Test are run with [Cypress](https://www.cypress.io/) and mirror the actions and expectations from the integration tests.

*Serve the app in separate terminal with `yarn start` before running*

GUI - time travel and inspect w/ Chrome devtools

    yarn cypress

Headless - saves video recording of specs

    yarn cypress:ci

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
