# chatgpt-app

## 使用前需引入 css

```js
import "chatgpt-app/dist/bundle.css";
```

## 示例

```js
import React from "react";
import Chat from "chatgpt-app";
import "chatgpt-app/dist/bundle.css";

const onError = (type: string) => {
  console.log("🚀 ~ file: index.tsx:6 ~ onError ~ type:", type);
};

const App = () => (
  <Chat ref={chatRef} onError={onError} Question={Question} Answer={Answer} />
);

export default App;
```
