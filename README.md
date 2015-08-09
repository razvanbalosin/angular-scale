# Angular Scale — A framework to support apps that grow

This project is an application skeleton for a [AngularJS](http://angularjs.org/) web app that will be easily scalable, with the code style following John Papa's Opinionated Angular [style guide](https://github.com/johnpapa/angular-styleguide#angular-style-guide) for teams

The package contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development tools for instant web development.

## Documentation

To get you started you can simply clone the angular-scale repository and run `npm install`

### Prerequisites

You must have node.js and its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).
We also use Grunt to run the javascript tasks for us. You can get it via npm:

```
npm install -g grunt-cli
```

### Clone angular-scale

Clone the angular-scale repository:

```
git clone https://github.com/razvanbalosin/angular-scale.git
cd angular-scale
```

### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code.

`npm` is preconfigured to automatically run `bower` so we you simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-scale changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

The project is preconfigured with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/`.



## Scaffolding

```
app/                    --> all of the source files for the application
  assets/               --> all project assets
    css/                  --> css files generated automatically
    js/                   --> third party javascript
    sass/                 --> this is where you write your css
      importer.scss         --> you have to import here all other css files in sass
                                this file is being watched by grunt and assembles your css
  components/           --> all app specific logic
    directives/           --> all directives
    factories/            --> all factories
    resources/            --> all resources
    services/             --> all services
  modules/              --> all app modules
    account/              --> account module with views, templates and controllers
    dashboard/            --> dashboard module with views, templates and controllers
    home/                 --> home module with views, templates and controllers
  partials/             --> app partials (i.e footer, header)
    /footer               --> footer with template and controller
    /header               --> header with template and controller
  app.js                --> main application module
  index.html            --> app layout file
```

## Using Grunt

After starting the local server, run `grunt` in your terminal. This will launch the `watch` tasks
which is compiling all your sass/scss files into one file in `assets/css/main.css`

### Minify CSS

To minify all the css code, you just have to run:

```
grunt cssmin
```

After that, follow the instructions in `index.html` on how to load the minified css file

### Minify JS

To minify the javascript code, firstly you will have to run

```
grunt ngAnnotate
```

Which will inject dependencies where needed. After annotation is complete, run:

```
grunt uglify
```

this will minify and mangle all your javascript files then again, just follow the instructions in
`index.html` on how to load the minified js file.

## Updating Angular

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are all the files under the `app/` directory.
Everything else should be omitted.
