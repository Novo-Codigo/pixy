import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface LineChartComponentProps {
    data: Array<{
        date: string;
        income: number;
        expense: number;
        balance: number;
        displayDate: string;
    }>;
    mode: 'DETAILED' | 'SUMMARY';
}

export default function LineChartComponent({data, mode}: LineChartComponentProps) {
    return (
        <div className="w-full h-96 overflow-x-auto">
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip/>

                    {mode === 'DETAILED' ? (
                        <>
                            <Line type="monotone" dataKey="income" stroke="#82ca9d" name="Receita" />
                            <Line type="monotone" dataKey="expense" stroke="#ef5350" name="Saídas" />
                        </>
                    ) : (
                        <>
                            <Line type="monotone" dataKey="balance" stroke="#8884d8" name="Saldo Líquido" />
                        </>
                    )}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
