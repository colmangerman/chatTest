# ChatTest

Este proyecto se desarrollo usando Angular 9. Es la vista web que se conecta al proyecto chatTest-be (https://github.com/chaba87/chatTest-be)

ATENCION! para realizar la conexion con dicho backend se debe ejecutar la solucion provista en el link anterior y reemplazar en el archivo "chatTest/src/app/services/message/message.service.ts" la variable "url" por la url donde se ejecuta el backend.

Una vez ejecutada la aplicacion angular se vera una sencilla vista con un input donde puede ingresarse texto y al presionar "send" se envia el mensaje, lo que hara el llamado al backend para solicitar una respuesta y mostrarla en pantalla.

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
