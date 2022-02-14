# smash-or-pass

Simple Smash or pass created with React.
Available with Pokemon list for now.


### Environment Variables

If you want to change environment variables, you just have to modify the config file found in `public/env/Config.js`

### Husky

if you want to enable a pre-commit hook for `prettier` and `eslint` with `husky`, run the following commands

```bash
$ cd projectRoot
$ npx husky install
```


To run the react app locally using npm, run the following commands

```bash
$ cd projectRoot
$ npm install
$ npm start
$ npx json-server --watch db.json --port 8080
```

