import React from "react";
import './index.less';
export interface AnswerProps {
    data: string;
    isDone?: boolean;
    status?: 1 | 2 | 3 | 4;
}
export interface HomeProps {
    className?: string;
    userId?: string;
    onError: (errorType: string, msg?: string) => void;
    onCopy?: (type: 'question' | 'answer') => void;
    Question?: ({ data }: {
        data: string;
    }) => JSX.Element;
    Answer?: ({ data, isDone, status }: AnswerProps) => JSX.Element;
}
export interface InnerComponentRef {
    getAllData: () => any[];
}
export interface IItem {
    id: string;
    question: string;
    answer: string;
    timestamp: number;
    isDone?: boolean;
    status?: 1 | 2 | 3 | 4;
}
declare const Home: React.ForwardRefExoticComponent<HomeProps & React.RefAttributes<InnerComponentRef>>;
export default Home;
