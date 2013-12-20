# Yeoman Wix application generator

A generator for [Yeoman](http://yeoman.io).

Read more about wix application development in [develpment guide](http://dev.wix.com/docs).

## Features

* Official Wix [UI Lib](https://github.com/wix/wix-ui-lib) with demo settings panel
* Translations for settings panel
* Demo implementation of settings panel and app communication
* Choose to use SASS or CSS
* [Wix SDK](http://dev.wix.com/docs/display/DRAF/JavaScript+SDK) included as a service
* App structure compatible with [AngularJS generator](https://github.com/yeoman/generator-angular) commands

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

Other available grunt commands:

```
$ grunt build
$ grunt test
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
