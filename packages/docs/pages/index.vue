<template lang="md">
  <div class="markdown">

    # My Icon
    Manage all Icon and Illustrations by create package and optimize all of the assets. Use this site to search all of the available icons and Illustrations.

    ## Requirements
    This project monorepo project using Lerna, you will need `yarn` installed on your computer.

    ## Commands
    - `optimizie-svgs` - Optimize all of the `svg` assets using `SVGO`
    - `generate-svgs` - Compile the `svg` file into `vue` component
    - `build:svgs` - Compile the `vue` file of icons and illustration into `esm` and `cjs`
    - `dev:docs` - Run documentation of the icon, see and search

    ## Adding icons or illustrations

    - Checkout from the `main` branch then create a new local branch, make sure your branch using `feat` prefix.
      ```bash
      # Checkout to the main branch
      git checkout main
      # Retrieve the latest updates
      git pull
      # Create a new local branch
      git checkout -b feat/new-icon
      ```
    - Update latest dependencies by running `yarn install`

    ### Icons
    - An assets can be categorized as an icon if the color and the size can be modified
    - An icon must be in `.svg` format, for icon we recommend the size is not exceed 1 Kb
    - Icons are placed in the `packages/svgs/assets/icons` folder, use prefix `Icon` to name the icon
    - If the asset has not been optimized, you can compress the assets by running command `optimizie-svgs` in the root project
    - Make sure that your icon has `width`, `height`, `view-box`, and `fill` attributes, these attributes will be replaced in `generate-svgs` command
    - After adding new assets, execute the following commands
    ```bash
      # This will compress all assets, you can skip this if you already compress the assets
      yarn run optimizie-svgs
      # Generate `vue` component from `svg` files
      yarn run generate-svgs
      # Compile the `vue` file to `esm` and `cjs` using rollup
      yarn run build:svgs
      # Check your icon locally at http://localhost:3000/icons
      yarn run dev:docs
    ```
    - Commit your changes then create pull request to `main` branch

     ### Illustrations
    - An illustration can be as `.svg` or `.png` format, for illustration we recommend the size is not exceed 10 Kb
    - Illustrations are placed in the `packages/svgs/assets/illustrations` folder, use prefix `Illus` to name the icon
    - If the asset has not been optimized, you can compress the assets by running command `optimizie-svgs` in the root project
    - After adding new assets, execute the following commands
    ```bash
      # This will compress all assets, you can skip this if you already compress the assets
      yarn run optimizie-svgs
      # Generate `vue` component from `svg` or `png` files
      yarn run generate-svgs
      # Compile the `vue` file to `esm` and `cjs` using rollup
      yarn run build:svgs
      # Check your illustration locally at http://localhost:3000/illustrations
      yarn run dev:docs
    ```
    - Commit your changes then create pull request to `main` branch

  </div>
</template>
