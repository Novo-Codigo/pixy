import { useMemo, useState } from "react";
import { differenceInDays, parseISO } from "date-fns";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const transactions = [
    // ===== 2020 =====
    { data: '2020-01-03', income: 180, expense: 120 },
    { data: '2020-01-15', income: 220, expense: 150 },
    { data: '2020-02-05', income: 200, expense: 130 },
    { data: '2020-03-20', income: 250, expense: 170 },
    { data: '2020-06-10', income: 300, expense: 200 },
    { data: '2020-09-18', income: 280, expense: 210 },
    { data: '2020-12-22', income: 350, expense: 240 },

    // ===== 2021 =====
    { data: '2021-01-08', income: 400, expense: 260 },
    { data: '2021-02-14', income: 420, expense: 300 },
    { data: '2021-03-30', income: 380, expense: 270 },
    { data: '2021-05-12', income: 450, expense: 310 },
    { data: '2021-07-19', income: 500, expense: 340 },
    { data: '2021-10-03', income: 480, expense: 360 },
    { data: '2021-12-27', income: 550, expense: 390 },

    // ===== 2022 =====
    { data: '2022-01-06', income: 520, expense: 400 },
    { data: '2022-02-18', income: 560, expense: 420 },
    { data: '2022-04-02', income: 600, expense: 450 },
    { data: '2022-06-21', income: 650, expense: 480 },
    { data: '2022-08-11', income: 700, expense: 520 },
    { data: '2022-10-29', income: 680, expense: 500 },
    { data: '2022-12-15', income: 750, expense: 550 },

    // ===== 2023 =====
    { data: '2023-01-04', income: 800, expense: 600 },
    { data: '2023-02-16', income: 820, expense: 630 },
    { data: '2023-03-28', income: 780, expense: 610 },
    { data: '2023-05-09', income: 900, expense: 680 },
    { data: '2023-07-22', income: 950, expense: 720 },
    { data: '2023-09-14', income: 980, expense: 750 },
    { data: '2023-12-30', income: 1050, expense: 800 },

    // ===== 2024 =====
    { data: '2024-01-05', income: 1100, expense: 820 },
    { data: '2024-02-12', income: 1150, expense: 850 },
    { data: '2024-03-19', income: 1200, expense: 900 },
    { data: '2024-04-25', income: 1250, expense: 950 },
    { data: '2024-05-30', income: 1300, expense: 980 },
    { data: '2024-06-14', income: 1350, expense: 1000 },
    { data: '2024-07-08', income: 1400, expense: 1050 },
    { data: '2024-08-21', income: 1500, expense: 1100 },
    { data: '2024-09-10', income: 1450, expense: 1080 },
    { data: '2024-10-18', income: 1550, expense: 1120 },
    { data: '2024-11-26', income: 1600, expense: 1150 },

    // ===== últimos 30 dias (granular) =====
    { data: '2024-12-01', income: 220, expense: 160 },
    { data: '2024-12-02', income: 210, expense: 150 },
    { data: '2024-12-03', income: 230, expense: 170 },
    { data: '2024-12-04', income: 250, expense: 180 },
    { data: '2024-12-05', income: 240, expense: 175 },
    { data: '2024-12-06', income: 260, expense: 190 },
    { data: '2024-12-07', income: 300, expense: 200 },
    { data: '2024-12-08', income: 280, expense: 195 },
    { data: '2024-12-09', income: 270, expense: 185 },
    { data: '2024-12-10', income: 290, expense: 210 },
    { data: '2024-12-11', income: 310, expense: 220 },
    { data: '2024-12-12', income: 320, expense: 230 },
    { data: '2024-12-13', income: 330, expense: 240 },
    { data: '2024-12-14', income: 340, expense: 250 },
    { data: '2024-12-15', income: 350, expense: 260 },
];

type Period = '7D' | '15D' | '30D' | '2M' | '3M' | '4M' | '5M' | '6M' | '7M' | '8M' | '9M' | '10M' | '11M' | '1Y' | '2Y' | '3Y' | '4Y' | 'ALL';
type VisualizationMode = 'DETAILED' | 'SUMMARY';

export default function Home() {
    const [period, setPeriod] = useState<Period>('ALL');
    const [mode, setMode] = useState<VisualizationMode>('DETAILED');

    const processedData = useMemo(() => {
        const today = new Date('2024-12-31');

        const filteredData = transactions.filter(
            (t) => {
                const dateItem = parseISO(t.data);

                switch (period) {
                    case '7D':
                        return differenceInDays(today, dateItem) <= 7;
                    case '15D':
                        return differenceInDays(today, dateItem) <= 15;
                    case '30D':
                        return differenceInDays(today, dateItem) <= 30;
                    case '2M':
                        return differenceInDays(today, dateItem) <= 60;
                    case '3M':
                        return differenceInDays(today, dateItem) <= 90;
                    case '4M':
                        return differenceInDays(today, dateItem) <= 120;
                    case '5M':
                        return differenceInDays(today, dateItem) <= 150;
                    case '6M':
                        return differenceInDays(today, dateItem) <= 180;
                    case '7M':
                        return differenceInDays(today, dateItem) <= 210;
                    case '8M':
                        return differenceInDays(today, dateItem) <= 240;
                    case '9M':
                        return differenceInDays(today, dateItem) <= 270;
                    case '10M':
                        return differenceInDays(today, dateItem) <= 300;
                    case '11M':
                        return differenceInDays(today, dateItem) <= 330;
                    case '1Y':
                        return differenceInDays(today, dateItem) <= 365;
                    case '2Y':
                        return differenceInDays(today, dateItem) <= 730;
                    case '3Y':
                        return differenceInDays(today, dateItem) <= 1095;
                    case '4Y':
                        return differenceInDays(today, dateItem) <= 1460;
                    case 'ALL':
                        return true;
                    default:
                        return true;
                }
            }
        );

        return filteredData.map(item => ({
            ...item,
            balance: item.income - item.expense,
        }));
    }, [period]);

    function Chart() {
        return (
            <div className="w-full h-96 overflow-x-auto">
                <ResponsiveContainer>
                    <LineChart data={processedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="data" />
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

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Resumo</h1>
                <div className="flex flex-col gap-6 mb-8">
                    <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 py-6 px-2 md:p-6">
                        <div className="flex flex-col items-center justify-between mb-2">
                            <h3 className="text-gray-200 bg-primary/50 text-xl font-medium border border-white/20 shadow-lg rounded-2xl px-4 py-2 mb-4">Evolução de Receita</h3>
                            
                            <div className="flex flex-col md:flex-row gap-y-4 flex-nowrap my-4 w-full pl-4 md:px-4 md:justify-between md:items-center">
                                <select
                                    value={period}
                                    onChange={(e) => setPeriod(e.target.value as Period)}
                                    className="text-xs mr-4 bg-gray-500/50 text-white rounded-lg p-2 md:text-lg"
                                >
                                    <option value="7D">Últimos 7 dias</option>
                                    <option value="15D">Últimos 15 dias</option>
                                    <option value="30D">Últimos 30 dias</option>
                                    <option value="2M">Últimos 2 meses</option>
                                    <option value="3M">Últimos 3 meses</option>
                                    <option value="4M">Últimos 4 meses</option>
                                    <option value="5M">Últimos 5 meses</option>
                                    <option value="6M">Últimos 6 meses</option>
                                    <option value="7M">Últimos 7 meses</option>
                                    <option value="8M">Últimos 8 meses</option>
                                    <option value="9M">Últimos 9 meses</option>
                                    <option value="10M">Últimos 10 meses</option>
                                    <option value="11M">Últimos 11 meses</option>
                                    <option value="1Y">Último ano</option>
                                    <option value="2Y">Últimos 2 anos</option>
                                    <option value="3Y">Últimos 3 anos</option>
                                    <option value="4Y">Últimos 4 anos</option>
                                    <option value="ALL">Últimos 5 anos</option>
                                </select>
                                
                                <div className="flex flex-row flex-nowrap gap-x-4">
                                    <button
                                        type="button"
                                        className="text-white bg-gray-500/50 rounded-lg p-2 text-xs shadow-md disabled:bg-gray-600/30 disabled:text-white/50 disabled:cursor-not-allowed hover:cursor-pointer md:text-sm"
                                        disabled={mode === "DETAILED"}
                                        onClick={() => { setMode("DETAILED") }}
                                    >
                                        DETALHADO
                                    </button>
                                    <button
                                        type="button"
                                        className="text-white bg-gray-500/50 rounded-lg p-2 text-xs shadow-md disabled:bg-gray-600/30 disabled:text-white/50 disabled:cursor-not-allowed hover:cursor-pointer md:text-sm"
                                        disabled={mode === "SUMMARY"}
                                        onClick={() => { setMode("SUMMARY") }}
                                    >
                                        RESUMIDO
                                    </button>
                                </div>
                            </div>
                            <Chart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}