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
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react"
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

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
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
  document.getElementById("example")
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
    <title>Hello React!</title>
  </head>
  <body>
    <div id="example"></div>

    <!-- Dependencies -->
    <script src="./node_modules/react/umd/react.development.js"></script>
    <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

    <!-- Main -->
    <script src="./dist/main.js"></script>
  </body>
</html>
```

## SETUP WEBPACK

Create webpack configuration file

`touch webpack.config.js`

Add the following code to `webpack.config.js`

```javascript
module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx"]
  },

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
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
```

## RUNNING THE REACT APPLICATION

### BUILD THE APPLICATION WITH WEBPACK

`npx webpack`

## SETUP WEBPACK DEVELOPMENT SERVER

Install webpack-dev-server

`npm install --save-dev webpack-dev-server`
