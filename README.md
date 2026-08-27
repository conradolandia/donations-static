# Donations Static Component

This is a [Vite](https://vite.dev) application.

## To preview

1. In the terminal, run `npm install`
2. Then, `npm run dev`

The project will be visible at `localhost`. Check the output for details.

## To build for production

1. In the terminal, run `npm install` (unless already done)
2. Then, `npm run build`
3. Files for publication will be in the `dist/` folder. 

Files in `dist/` are configured to be used internally by Spyder IDE. They will not work properly in an standalone browser. `style.css` intentionally does not include CSS variable definitions, they will be provided by each theme in the [`spyder-themes`](https://pypi.org/project/spyder-themes/) package.
