import ReconnectingWebSocket from "reconnecting-websocket";
export declare function indexPageQuestion(data: {
    size: number;
    current: number;
    exclude?: number | undefined;
}): Promise<any>;
export declare function indexQuestionDetail({ id }: {
    id: number | string;
}): Promise<any>;
export declare function chatWS({ successFn, errorFn }: {
    successFn: (res: any) => void;
    errorFn: (err: any) => void;
}): ReconnectingWebSocket;
