import "./index.less";
interface IProps {
    data: string;
    className?: string;
    isDone?: boolean;
    status?: 1 | 2 | 3 | 4;
    onCopy?: (type: 'question' | 'answer') => void;
}
declare const Answer: ({ data, className, isDone, status, onCopy }: IProps) => JSX.Element;
export default Answer;
