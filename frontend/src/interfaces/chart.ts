export default interface ChartComponentProps {
    data: Array<{
        date: string;
        income: number;
        expense: number;
        balance: number;
        displayDate: string;
    }>;
    mode: 'DETAILED' | 'SUMMARY';
}