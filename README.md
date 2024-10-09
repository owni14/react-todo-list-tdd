# React todo list with TDD 
### Project link
- [owni14-todo-list](https://owni14-todo-list-tdd.netlify.app/)

### Deploy
- Netlify

### Enviroment

-   [nodejs] - v.18.18.2
-   [reactjs] - v.18.2.64
-   [typescript] - v.4.9.5
-   [jest] - v27.5.1
-   [sass] - v7.0.3

### Folder structure

```
├─ node_modules
├─ public
├─ src
│  ├─ App.tsx
│  ├─ app.scss
│  ├─ components
│  │  ├─ TodoListForm.tsx
│  │  ├─ TodoListHeader.tsx
│  │  └─ TodoListItems.tsx
│  ├─ index.tsx
│  ├─ styles
│  │  ├─ global.scss
│  │  └─ reset.scss
│  ├─ tests
│  │  ├─ TodoListForm.test.tsx
│  │  ├─ TodoListHeader.test.tsx
│  │  └─ TodoListItem.test.tsx
│  └─ type.ts
├─ .gitignroe
├─ .prettierrc
├─ .babel.config.js
├─ .package-lock.json
├─ .package.json
├─ .README.md
├─ .tsconfig.json
```

### Dependencies

`package.json`

---

```
"dependencies": {
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.87",
        "@types/react": "^18.2.64",
        "@types/react-dom": "^18.2.21",
        "dayjs": "^1.11.10",
        "node-sass": "^7.0.3",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-icons": "^5.0.1",
        "react-scripts": "5.0.1",
        "typescript": "^4.9.5",
        "web-vitals": "^2.1.4"
    },

  "devDependencies": {
        "@babel/preset-env": "^7.24.0",
        "@babel/preset-typescript": "^7.23.3",
        "jest": "^27.5.1"
    }
```

<!-- Outlink -->

[reactjs]: https://reactjs.org/
[nodejs]: https://nodejs.org/en/
[typescript]: https://www.typescriptlang.org/
[jest]: https://jestjs.io/
[sass]: https://sass-lang.com/
