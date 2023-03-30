
export interface baseProps {
    httpAPI: string;
    wsAPI: string;
    waitTimer?: number;
    answeringTimer?: number;
    questionFetchCountMax?: number;
    socketHeartbeat?: number;
    questionFetchTimer?: number;
    httpError?: (msg: string) => void;
}

const baseConfig: baseProps = {
    // http请求接口地址
    httpAPI: "http://10.60.129.65:3080",
    // websocket请求接口地址
    wsAPI: "ws://10.60.129.65:3080",
    waitTimer: 5, // 后端无响应等待时长 默认5s
    answeringTimer: 3, // websocket message 回复中断等待时长 默认3s
    questionFetchCountMax: 10, // websocket message 回复中断 用http轮询 最大轮询次数 默认10次
    socketHeartbeat: 30, // websocket心跳时间间隔 默认30s
    questionFetchTimer: 3, // question详情接口轮询间隔 默认3s
    httpError: () => {}
}

export default baseConfig;