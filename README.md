# use-tilt3d
A smooth 3D tilt React library.

## Installation

To install the package, use npm:

```bash
pnpm add use-tilt3d

yarn install use-tilt3d

npm install use-tilt3d
```

## Usage

```tsx
import { useTilt3d } from 'use-tilt3d';

const ref = useTilt3d({
    // ...
});

<div ref={ref} style={{ width: '200px', height: '200px', backgroundColor: 'lightgray' }}>
    Tilt me!
</div>
```

## tsup
Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## How to use this
1. install dependencies
```
# pnpm
$ pnpm install

# yarn
$ yarn install

# npm
$ npm install
```
2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. Test build command to build `src`.
Once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn run build

# npm
$ npm run build
```
5. Publish your package

```zsh
$ npm publish
```


## test package
https://www.npmjs.com/package/use-tilt3d
