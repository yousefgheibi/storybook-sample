# Angular App with Storybook

This project is a simple Angular application showcasing an input component using Storybook.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [Angular CLI](https://angular.io/cli)
- [Storybook](https://storybook.js.org/)

## Installation

Clone the repository and install dependencies:
```sh
npm install
```

## Running the Angular App

To start the Angular development server:
```sh
ng serve
```

## Setting Up and Running Storybook

If Storybook is not already installed, initialize it:
```sh
npx storybook@latest init --builder webpack5
```

To run Storybook:
```sh
npm run storybook
```

## Input Component

The project includes a simple input component located in:
```
src/app/components/input/input.component.ts
```

### Example Usage
```html
<app-input label="Username" placeholder="Enter your username" type="text"></app-input>
```

## Storybook Preview

The input component is showcased in Storybook with customizable controls. You can find the story definition in:
```
src/stories/input.component.stories.ts
```

## Troubleshooting

If you encounter any dependency issues, try:
```sh
rm -rf node_modules package-lock.json
npm install
npm run storybook
```

Ensure your TypeScript version is up to date:
```sh
npm install typescript@latest --save-dev
```

## License

This project is licensed under the MIT License.

