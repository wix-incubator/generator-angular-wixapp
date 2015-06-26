# Yeoman Wix Application Generator

A generator for [Yeoman](http://yeoman.io).

Read more about wix application development in [develpment guide](http://dev.wix.com/docs).

## Features

* Using official Wix [UI Lib](https://github.com/wix/wix-ui-lib) with demo settings panel
* Localized settings panel
* Demo implementation of settings panel and app interaction
* You can choose to use SASS instead of plain CSS
* [Wix SDK](http://dev.wix.com/docs/sdk/) wrapped as Angular service
* Generates sample unit and e2e tests

## Getting Started

Install yeoman:

```
$ sudo npm install -g yo
```

To install generator-angular-wixapp from npm, run:

```
$ sudo npm install -g generator-angular-wixapp
```

Finally, initiate the generator:

```
$ mkdir wixapp
$ cd wixapp
$ yo angular-wixapp
```

After app is generated run:

```
$ grunt serve
```

Now you should see the app in your browser at [http://localhost:9000](http://localhost:9000)

Start unit tests server that will rerun tests on each change:

```
$ grunt test
```

Or you can run unit tests only once:

```
$ grunt karma:singlerun
```

In order to run e2e tests first you have to [https://angular.github.io/protractor/](install protractor). Then run:

```
$ protractor protractor-conf.js
```

Building:

```
$ grunt build
```

This command this build your app do dist directory.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
