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

| 参数 | 说明 | 类型 | 默认值 | 是否必传 |
| --- | --- | --- | --- | --- |
| baseConfig | 基础配置 | [baseProps](#baseProps) | [默认值](#baseProps) | <span style="color: red">是</span> |
| className | 组件最外层自定义class | string | - | 否 |
| userId | 自定义传给服务端的userId | string | - | 否 |
| onError | websocket交互过程中的报错回调 | ([errorType](#errorType): string, msg?: string) => void | - | <span style="color: red">是</span> |
| onCopy | 点击复制问题or答案的成功回调 | (type: 'question' \| 'answer') => void | - | 否 |
| Question | 自定义Question组件 | ({ data }: { data: string }) => JSX.Element | - | 否 |
| Answer | 自定义Answer组件 | ({ data, isDone, status }: [AnswerProps](#AnswerProps)) => JSX.Element | - | 否 |

### baseProps

组件必传的基础配置说明

| 参数 | 说明 | 类型 | 默认值 | 是否必传 |
| --- | --- | --- | --- | --- |
| httpAPI | http请求的api地址 | string | - | <span style="color: red">是</span> |
| wsAPI | websocket请求的api地址 | string | - | <span style="color: red">是</span> |
| waitTimer | 后端无响应等待时长 单位 秒 | number | 5 | 否 |
| answeringTimer | websocket message 回复中断等待时长 单位 秒 | number | 3 | 否 |
| questionFetchCountMax | websocket message 回复中断 用http轮询 最大轮询次数 单位 次 | number | 10 | 否 |
| socketHeartbeat | websocket心跳时间间隔 单位 秒 | number | 30 | 否 |
| questionFetchTimer | question详情接口轮询间隔 单位 秒 | number | 3 | 否 |
| httpError | axios的http请求报错回调 | (msg: string) => void | - | 否 |

### errorType

websocket交互过程中的报错回调的参数说明

| 参数 | 说明 | 类型 | 其他 |
| --- | --- | --- |  |
| INPUT_EMPTY | 点击发送内容为空 | string |  |
| NOT_LOGIN | token不存在或token过期 | string |  |
| NET_OFFLINE | 网络中断 | string |  |
| SERVICE_NOT_RESPONDING | 点击发送后，后端无响应 | string |  |
| QUESTION_FETCH_MAX | websocket message 回复中断 用http轮询 超过了最大轮询次数 | string |  |
| INSUFFICIENT_BALANCE | 余额不足or提问次数不足 | string |  |
| WS_ERROR | websocket报错 | string | 此时回调会有第二个参数msg，是websocket的报错信息 |

### AnswerProps

Answer组件的props

| 参数 | 说明 | 类型 | 其他 |
| --- | --- | --- |  |
| data | 回答的内容 | string |  |
| isDone | 回答是否结束 | boolean |  |
| status | 回答的状态值 | 1 \| 2 \| 3 \| 4 | 1创建提问未开始回答 2回答中 3回答完成 4回答异常 |