# SETTING UP TYPESCRIPT WITH REACTJS USING WEBPACK

## CREATE THE PROJECT

### CREATE PROJECT ROOT AND DIRECTORIES

> mkdir react-typescript
> cd react-typescript
> mkdir -p src/components

### INITIALIZE THE PROJECT AS NPM PACKAGE

> npm init -y

## INSTALL DEPENDENCIES

### INSTALL WEBPACK

> npm install --save-dev webpack webpack-cli

### INSTALL REACT & REACT DOM

> npm install --save react react-dom
> npm install --save-dev @types/react @types/react-dom

### INSTALL WEBPACK LOADERS

> npm install --save-dev typescript ts-loader source-map-loader

## ADD TYPESCRIPT CONFIGURATION FILE

> touch tsconfig.json

Add the following code to `tsconfig.json`

```
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

### CREATE REACT COMPONENT

> touch src/components/Hello.tsx

Add the following code to `Hello.tsx`

```
import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
```

### CREATE REACT RENDER FILE

> touch src/index.tsx

Add the following code to `index.tsx`

```
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
```

### CREATE ROOT HTML PAGE

> touch index.html

Add the following markup to `index.html`

```
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

### CONFIGURE WEBPACK CONFIGURATION FILE

> touch webpack.config.js

Add the following code to `webpack.config.js`

```
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
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
```

## RUNNING THE REACT APPLICATION

### BUILD THE APPLICATION WITH WEBPACK

> npx webpack
