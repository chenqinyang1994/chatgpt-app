import { IItem } from '../../index';
import './index.less';
export interface AnswerProps {
    data: string;
    isDone?: boolean;
    status?: 1 | 2 | 3 | 4;
}
interface IProps {
    data: IItem;
    domScrollFn: () => void;
    onCopy?: (type: 'question' | 'answer') => void;
    onGetScrollSwicth: () => boolean;
    className?: string;
    Question?: ({ data }: {
        data: string;
    }) => JSX.Element;
    Answer?: ({ data, isDone, status }: AnswerProps) => JSX.Element;
}
declare const Chat: ({ data, className, onCopy, domScrollFn, onGetScrollSwicth, Question: QuestionCom, Answer: AnswerCom, }: IProps) => JSX.Element;
export default Chat;
