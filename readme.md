# React TypeScript with Webpack

If you are like me and don't appreciate all the black magic that comes along with `create-react-app` or you simply just want to know how things really work when you create a react app, this guide is for you.

In this guide you will learn how to configure your very own react environment. We will be configuring awesome tools like TypeScript, Sass and more in the future!

### Things to implement into our project

- ~~TypeScript~~
- Sass
- Jest
- Environments

## Create the Project

Create project root and directories

`mkdir react-typescript`

`cd react-typescript`

`mkdir -p src/components`

Initialize the project as a npm package

`npm init -y`

## Install Dependencies

Install webpack

`npm install --save-dev webpack webpack-cli`

Install react and react-dom

`npm install --save react react-dom`

`npm install --save-dev @types/react @types/react-dom`

Install webpack loaders

`npm install --save-dev typescript ts-loader source-map-loader`

## Configure Typescript

Create typescript configuration file

`touch tsconfig.json`

Add the following code to `tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "module": "commonjs",
    "target": "es6",
    "lib": ["es2015", "es2017", "dom"],
    "jsx": "react",
    "outDir": "dist",
    "paths": {
      "components/*": ["src/components/*"]
    },
    "allowJs": true,
    "allowSyntheticDefaultImports": false,
    "noImplicitAny": false,
    "removeComments": true,
    "sourceMap": true
  }
}
```

## Write some React code

Create a react component using Typescript

`touch src/components/Hello.tsx`

Add the following code to `Hello.tsx`

```typescript
import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
```

Create a react file to render the component

`touch src/index.tsx`

Add the following code to `index.tsx`

```typescript
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
```

Create a root html page to create insertion point for our react application

`touch index.html`

Add the following markup to `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React & Typescript</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- Dependencies -->
    <script src="./node_modules/react/umd/react.development.js"></script>
    <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

    <!-- Bundle.js -->
    <script src="./dist/bundle.js"></script>
  </body>
</html>
```

## Setup Webpack

Create webpack configuration file

`touch webpack.config.js`

Add the following code to `webpack.config.js`

```javascript
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
```

## Setup Webpack Development Server

Install webpack-dev-server

`npm install --save-dev webpack-dev-server`

Configure `package.json` to have the following scripts

```json
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
  },
```

## Run the App

To start the app in your browser type

`npm start`

To build the app into your dist folder type

`npm run build`
