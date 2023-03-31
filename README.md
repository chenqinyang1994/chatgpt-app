# chatgpt-app

ChatGPT 聊天 UI，进行了 webSocket 和 http 异常处理，如下异常：

- 消息发出，服务端没有任何返回
- 服务端返回消息，但是消息中断
- 网络中断

## 使用前需引入 css

```js
import "chatgpt-app/dist/bundle.css";
```

## 示例

```jsx
import React from "react";
import ChatgptApp from "chatgpt-app";
import "chatgpt-app/dist/bundle.css";

const baseConfig = {
  httpAPI: "http://10.60.129.65:3080",
  wsAPI: "ws://10.60.129.65:3080",
};

const onError = (type) => {
  console.log("🚀 ~ type:", type);
};

const App = () => <ChatgptApp baseConfig={baseConfig} onError={onError} />;

export default App;
```

## API

### ChatgptApp

| 参数       | 说明                           | 类型                                                                   | 默认值               | 是否必传                           |
| ---------- | ------------------------------ | ---------------------------------------------------------------------- | -------------------- | ---------------------------------- |
| baseConfig | 基础配置                       | [baseProps](#baseProps)                                                | [默认值](#baseProps) | <span style="color: red">是</span> |
| className  | 组件最外层自定义 class         | string                                                                 | -                    | 否                                 |
| userId     | 自定义传给服务端的 userId      | string                                                                 | -                    | 否                                 |
| onError    | websocket 交互过程中的报错回调 | ([errorType](#errorType): string, msg?: string) => void                | -                    | <span style="color: red">是</span> |
| onCopy     | 点击复制问题 or 答案的成功回调 | (type: 'question' \| 'answer') => void                                 | -                    | 否                                 |
| Question   | 自定义 Question 组件           | ({ data }: { data: string }) => JSX.Element                            | -                    | 否                                 |
| Answer     | 自定义 Answer 组件             | ({ data, isDone, status }: [AnswerProps](#AnswerProps)) => JSX.Element | -                    | 否                                 |

### baseProps

组件必传的基础配置说明

| 参数                  | 说明                                                         | 类型                  | 默认值 | 是否必传                           |
| --------------------- | ------------------------------------------------------------ | --------------------- | ------ | ---------------------------------- |
| httpAPI               | http 请求的 api 地址                                         | string                | -      | <span style="color: red">是</span> |
| wsAPI                 | websocket 请求的 api 地址                                    | string                | -      | <span style="color: red">是</span> |
| waitTimer             | 后端无响应等待时长 单位 秒                                   | number                | 5      | 否                                 |
| answeringTimer        | websocket message 回复中断等待时长 单位 秒                   | number                | 3      | 否                                 |
| questionFetchCountMax | websocket message 回复中断 用 http 轮询 最大轮询次数 单位 次 | number                | 10     | 否                                 |
| socketHeartbeat       | websocket 心跳时间间隔 单位 秒                               | number                | 30     | 否                                 |
| questionFetchTimer    | question 详情接口轮询间隔 单位 秒                            | number                | 3      | 否                                 |
| httpError             | axios 的 http 请求报错回调                                   | (msg: string) => void | -      | 否                                 |

### errorType

websocket 交互过程中的报错回调的参数说明

| 参数                   | 说明                                                       | 类型   | 其他                                                |
| ---------------------- | ---------------------------------------------------------- | ------ | --------------------------------------------------- |
| INPUT_EMPTY            | 点击发送内容为空                                           | string |                                                     |
| NOT_LOGIN              | token 不存在或 token 过期                                  | string |                                                     |
| NET_OFFLINE            | 网络中断                                                   | string |                                                     |
| SERVICE_NOT_RESPONDING | 点击发送后，后端无响应                                     | string |                                                     |
| QUESTION_FETCH_MAX     | websocket message 回复中断 用 http 轮询 超过了最大轮询次数 | string |                                                     |
| INSUFFICIENT_BALANCE   | 余额不足 or 提问次数不足                                   | string |                                                     |
| WS_ERROR               | websocket 报错                                             | string | 此时回调会有第二个参数 msg，是 websocket 的报错信息 |

### AnswerProps

Answer 组件的 props

| 参数   | 说明         | 类型             | 其他                                                |
| ------ | ------------ | ---------------- | --------------------------------------------------- |
| data   | 回答的内容   | string           |                                                     |
| isDone | 回答是否结束 | boolean          |                                                     |
| status | 回答的状态值 | 1 \| 2 \| 3 \| 4 | 1 创建提问未开始回答 2 回答中 3 回答完成 4 回答异常 |

### getAllData

通过 ref 转发获取组件内全部数据

```jsx
import React, { useRef } from "react";
import ChatgptApp from "chatgpt-app";
import "chatgpt-app/dist/bundle.css";

const chatRef = useRef(null);

const baseConfig = {
  httpAPI: "http://10.60.129.65:3080",
  wsAPI: "ws://10.60.129.65:3080",
};

const onError = (type) => {
  console.log("🚀 ~ type:", type);
};

const fn = () => {
  // 获取组件内全部数据
  console.log(chatRef.current?.getAllData());
};

const App = () => (
  <ChatgptApp 
    ref={chatRef} 
    baseConfig={baseConfig} 
    onError={onError} 
  />
);

export default App;
```
