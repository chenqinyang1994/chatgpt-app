import ReconnectingWebSocket from "reconnecting-websocket";
import request from '../utils/request';
import { authToken } from '../utils/authService';
import { wsAPI } from "../constants/api";

const BASE_URL = '';

export function indexPageQuestion(data: {
  size: number;
  current: number;
  exclude?: number | undefined;
}) {
  return request({
    url: `${BASE_URL}/question`,
    method: 'get',
    data,
  });
}

export function indexQuestionDetail({ id }: { id: number | string }) {
  return request({
    url: `${BASE_URL}/question/${id}`,
    method: 'get',
  });
}

export function chatWS({
    successFn,
    errorFn
  }: {
    successFn: (res: any) => void;
    errorFn: (err: any) => void;
  }) {
    const rws = new ReconnectingWebSocket(`${wsAPI}?token=${authToken.get()}`);
  
    rws.addEventListener("message", ({ data }) => {
      try {
        const packet = JSON.parse(data);
        successFn(packet);
      } catch (error) {
        errorFn("socket JSON.parse error ~");
      }
    });
  
    return rws;
  }