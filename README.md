# [React] Redux Toolkit (Một phiên bản mới của Redux)

## 1. Redux Toolkit (RTK)
  - install
    ### Using Create React App
    ```
      # Redux + Plain JS template
      npx create-react-app my-app --template redux

      # Redux + TypeScript template
      npx create-react-app my-app --template redux-typescript
    ```

    ### An Existing App
    ```
      npm install @reduxjs/toolkit
    ```

  - RTK là một thư viện giúp mình viết Redux tốt hơn, dễ hơn và đơn giản hơn.
  - Ba vấn đề làm nền tảng ra đời RTK:

    `
      - Configuring a Redux store is too complicated.
      - I have to add a lot of packages to get Redux to do anything useful.
      - Redux requires too much boilerplate code.
    `