<template lang="md">
  <div class="markdown">

    # My Icon
    Manage all Icon by create package and optimize all of the assets. Use this site to search all of the available icons.

    ## Requirements
    This project monorepo project using Lerna, you will need `yarn` installed on your computer.

    ## Commands
    - `optimizie-svgs` - Optimize all of the `svg` assets using `SVGO`
    - `generate-svgs` - Compile the `svg` file into `vue` component
    - `build:svgs` - Compile the `vue` file of icons into `esm` and `cjs`
    - `dev:docs` - Run documentation of the icon, see and search

    ## Adding Icons
    - Add icon in Figma
    - Save your current work to history with format "0.0.[version]" as title and "Add icon [icons name]" as description
    - Review and merge the automatic pull request from Github Action
  </div>
</template>
