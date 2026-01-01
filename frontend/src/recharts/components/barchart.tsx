import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    ResponsiveContainer, 
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

interface BarChartComponentProps {
    data: Array<{
        name: string;
        total: number;
    }>;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FD0', '#FF6699'];

export default function BarChartComponent({ data }: BarChartComponentProps) {
    return (
        <div className="w-full h-96 overflow-x-auto">
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey={"name"} />
                    <YAxis />
                    <Tooltip cursor={{ fillOpacity: 0 }} />
                    <Bar dataKey="total" fill="#ef5350" name="Despesas" radius={[4, 4, 0, 0]}>
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
