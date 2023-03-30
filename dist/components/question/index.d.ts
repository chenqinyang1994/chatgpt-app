import './index.less';
interface IProps {
    data: string;
    className?: string;
    onCopy?: (type: 'question' | 'answer') => void;
}
declare const Question: ({ data, className, onCopy }: IProps) => JSX.Element;
export default Question;
