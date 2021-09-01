# Project run-through

### Commands
Install node-modules

```
npm install
```

#### Development

Run **Webpack** in **Development** mode and start coding!

```
npm run dev
```

#### Production

Run **Webpack** in **Production** mode.

```
npm run build
```


#### Use Aliases
Using alias we'll simplify the imports. 
Add the configuration to your **webpack.config.js**

```javascript
resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/assets/scss'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@': path.resolve(__dirname, 'src')
    }
  }
  ```


#### Use BrowserSync

BrowserSync will start only when you run Webpack in watch mode.

```javascript
npm i -D browser-sync-webpack-plugin browser-sync
```
and add the configuration to your **webpack.config.js**

```javascript
//at the beginning of the file
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

//in the configuration -> plugins
plugins: [
  ...
      new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
];
```