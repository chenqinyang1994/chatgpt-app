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
declare const baseConfig: baseProps;
export default baseConfig;
