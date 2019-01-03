# Phaser WebPack ES6

## Inspiration

Inspired from [Phaser-ES6-Boilerplate](https://github.com/joshuamorony/phaser-es6-boilerplate)
but based on webpack as builder for JS application.

## Ananlogs

[Phaser-ES6-Webpack](https://github.com/lean/phaser-es6-webpack) also webpack based system for phaser.    
Pros:

* Ready for all platforms (cordova based for mobile platform)
* Highly customizable (includes webfontloader, predefined width/height config)

Cons:

* Webpack v3
* Smaller game states lifecycle (3 state instead 5)
* Large dev-env dependencies

## Usage

To start your own project do the following steps:

### 1. Clone this repo:

Navigate to yor destination directory and run:    
`git clone https://github.com/Dmitry-Kucher/phaser-webpack-es6`

### 2. Manually remove link to boilerplate git repository:

Navigate to recently cloned directory:    
`cd phaser-webpack-es6`    
And remove **.git** directory:    
`rm -rf .git`

### 3. Install npm dependencies:

`npm install`

### 4. Run development server:

`npm run start:deb`
