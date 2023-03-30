import type { Method } from 'axios';
type Ioptions = {
    url: string;
    data?: any;
    headers?: any;
    method: Method;
};
declare const request: (options: Ioptions) => Promise<any>;
export default request;
