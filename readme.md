# SETTING UP TYPESCRIPT WITH REACTJS USING WEBPACK

## CREATE THE PROJECT

Create project root and directories

`mkdir react-typescript`

`cd react-typescript`

`mkdir -p src/components`

Initialize the project as a npm package

`npm init -y`

## INSTALL DEPENDENCIES

Install webpack

`npm install --save-dev webpack webpack-cli`

Install react and react-dom

`npm install --save react react-dom`

`npm install --save-dev @types/react @types/react-dom`

Install webpack loaders

`npm install --save-dev typescript ts-loader source-map-loader`

## CONFIGURE TYPESCRIPT

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

## WRITE SOME REACT CODE

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

## SETUP WEBPACK

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

## SETUP WEBPACK DEVELOPMENT SERVER

Install webpack-dev-server

`npm install --save-dev webpack-dev-server`

Configure `package.json` to have the following scripts

```json
  "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
  },
```

## RUN THE APP

To start the app in your browser type

`npm start`

To build the app into your dist folder type

`npm run build`
