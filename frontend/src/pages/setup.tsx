"use client"

import { useState } from "react"
import { FaPlus } from "react-icons/fa6"
import { IoCartOutline, IoDocumentTextOutline } from "react-icons/io5"
import { MdOutlineAttachMoney } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"

type Income = {
  id: string
  amount: number
  description: string
  date: string
  type: "monthly" | "extra"
}

type Expense = {
  id: string
  amount: number
  description: string
  date: string
  category: string
  recurring: boolean
}

type PastIncome = {
    month: string,
    amount: number,
    incomes: Income[],
    expenses: Expense[],
}

export default function SetupPage() {
    const [showIncomeModal, setShowIncomeModal] = useState(false)
    const [showExpenseModal, setShowExpenseModal] = useState(false)

    const [pastIncomes, _] = useState<PastIncome[]>([
        { month: "Janeiro 2023", amount: 3300, incomes: [
                { id: "1", amount: 8000, description: "Salário", date: "2023-01-05", type: "monthly" },
            ], expenses: [
                { id: "1", amount: 2200, description: "Aluguel", date: "2023-01-10", category: "Moradia", recurring: true },
                { id: "2", amount: 300, description: "Luz", date: "2023-01-12", category: "Contas", recurring: true },
                { id: "3", amount: 150, description: "Internet", date: "2023-01-12", category: "Contas", recurring: true },
                { id: "4", amount: 1500, description: "Supermercado", date: "2023-01-16", category: "Alimentação", recurring: false },
                { id: "5", amount: 550, description: "Lazer", date: "2023-01-20", category: "Lazer", recurring: false },
            ]
        },
        { month: "Dezembro 2022", amount: 1500, incomes: [
                { id: "1", amount: 6200, description: "Salário", date: "2022-12-05", type: "monthly" },
            ], expenses: [
                { id: "1", amount: 2200, description: "Aluguel", date: "2023-01-10", category: "Moradia", recurring: true },
                { id: "2", amount: 300, description: "Luz", date: "2023-01-12", category: "Contas", recurring: true },
                { id: "3", amount: 150, description: "Internet", date: "2023-01-12", category: "Contas", recurring: true },
                { id: "4", amount: 1500, description: "Supermercado", date: "2023-01-16", category: "Alimentação", recurring: false },
                { id: "5", amount: 550, description: "Lazer", date: "2023-01-20", category: "Lazer", recurring: false },
            ]
        }
    ]);

    const [incomes, setIncomes] = useState<Income[]>([
        { id: "1", amount: 5000, description: "Salário", date: "2024-01-05", type: "monthly" },
        { id: "2", amount: 500, description: "Freelance", date: "2024-01-15", type: "extra" },
        { id: "3", amount: 300, description: "Venda online", date: "2024-01-20", type: "extra" },
    ])

    const [expenses, setExpenses] = useState<Expense[]>([
        { id: "1", amount: 1200, description: "Aluguel", date: "2024-01-10", category: "Moradia", recurring: true },
        { id: "2", amount: 150, description: "Luz", date: "2024-01-12", category: "Contas", recurring: true },
        { id: "3", amount: 80, description: "Internet", date: "2024-01-12", category: "Contas", recurring: true },
        { id: "4", amount: 45, description: "iFood", date: "2024-01-15", category: "Alimentação", recurring: false },
        {
            id: "5",
            amount: 200,
            description: "Supermercado",
            date: "2024-01-16",
            category: "Alimentação",
            recurring: false,
        },
        { id: "6", amount: 60, description: "Uber", date: "2024-01-18", category: "Transporte", recurring: false },
    ])

    const [newIncome, setNewIncome] = useState({
        amount: "",
        description: "",
        date: "",
        type: "extra" as "extra" | "monthly",
    })
    const [newExpense, setNewExpense] = useState({
        amount: "",
        description: "",
        date: "",
        category: "",
        recurring: false,
    })

    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0)
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    const balance = totalIncome - totalExpenses

    const handleAddIncome = () => {
        if (newIncome.amount && newIncome.description && newIncome.date) {
            const income: Income = {
                id: Date.now().toString(),
                amount: Number.parseFloat(newIncome.amount),
                description: newIncome.description,
                date: newIncome.date,
                type: newIncome.type,
            }
            setIncomes([...incomes, income])
            setNewIncome({ amount: "", description: "", date: "", type: "extra" })
            setShowIncomeModal(false)
        }
    }

    const handleAddExpense = () => {
        if (newExpense.amount && newExpense.description && newExpense.date && newExpense.category) {
            const expense: Expense = {
                id: Date.now().toString(),
                amount: Number.parseFloat(newExpense.amount),
                description: newExpense.description,
                date: newExpense.date,
                category: newExpense.category,
                recurring: newExpense.recurring,
            }
            setExpenses([...expenses, expense])
            setNewExpense({ amount: "", description: "", date: "", category: "", recurring: false })
            setShowExpenseModal(false)
        }
    }

    const deleteIncome = (id: string) => {
        setIncomes((prev) => prev.filter((income) => income.id !== id))
    }

    const deleteExpense = (id: string) => {
        setExpenses((prev) => prev.filter((expense) => expense.id !== id))
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Gerenciador Financeiro</h1>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-gray-400 text-sm font-medium">Total de Receitas</h3>
                            <div className="bg-green-500/20 p-2 rounded-lg">
                                <MdOutlineAttachMoney color="#4ade80" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-white">R$ {totalIncome.toFixed(2)}</p>
                    </div>

                    <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-gray-400 text-sm font-medium">Total de Despesas</h3>
                            <div className="bg-red-500/20 p-2 rounded-lg">
                                <IoCartOutline color="#f87171" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-white">R$ {totalExpenses.toFixed(2)}</p>
                    </div>

                    <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-gray-400 text-sm font-medium">Saldo</h3>
                            <div className={`${balance >= 0 ? "bg-blue-500/20" : "bg-red-500/20"} p-2 rounded-lg`}>
                                <IoDocumentTextOutline color={balance >= 0 ? "#3b82f6" : "#f87171"} />
                            </div>
                        </div>
                        <p className={`text-3xl font-bold ${balance >= 0 ? "text-white" : "text-red-400"}`}>
                            R$ {balance.toFixed(2)}
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-white">Receitas</h2>
                            <button
                                type="button"
                                onClick={() => setShowIncomeModal(true)}
                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                            >
                                <FaPlus color="white" />
                                Adicionar
                            </button>
                        </div>

                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {incomes.map((income) => (
                                <div
                                    key={income.id}
                                    className="bg-gray-700/30 p-4 rounded-lg border border-white/10 hover:bg-gray-700/40 transition-colors"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-white font-medium">{income.description}</h3>
                                                {income.type === "monthly" && (
                                                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Mensal</span>
                                                )}
                                            </div>
                                            <p className="text-green-400 text-lg font-semibold">+ R$ {income.amount.toFixed(2)}</p>
                                            <p className="text-gray-400 text-sm mt-1">{new Date(income.date).toLocaleDateString("pt-BR")}</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => deleteIncome(income.id)}
                                            className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded transition-colors hover:cursor-pointer"
                                        >
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-white">Despesas</h2>
                            <button
                                type="button"
                                onClick={() => setShowExpenseModal(true)}
                                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                            >
                                <FaPlus color="white" />
                                Adicionar
                            </button>
                        </div>

                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {expenses.map((expense) => (
                                <div
                                    key={expense.id}
                                    className="bg-gray-700/30 p-4 rounded-lg border border-white/10 hover:bg-gray-700/40 transition-colors"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-white font-medium">{expense.description}</h3>
                                                {expense.recurring && (
                                                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Recorrente</span>
                                                )}
                                            </div>
                                            <p className="text-red-400 text-lg font-semibold">- R$ {expense.amount.toFixed(2)}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-gray-400 text-sm">{expense.category}</span>
                                                <span className="text-gray-600">•</span>
                                                <span className="text-gray-400 text-sm">
                                                    {new Date(expense.date).toLocaleDateString("pt-BR")}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => deleteExpense(expense.id)}
                                            className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded transition-colors hover:cursor-pointer"
                                        >
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-300 ${
                showIncomeModal ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
            >
                <div className="bg-secondary/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-6 max-w-md w-full">
                    <h3 className="text-2xl font-bold text-white mb-6">Adicionar Receita</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Descrição</label>
                            <input
                                type="text"
                                value={newIncome.description}
                                onChange={(e) => setNewIncome({ ...newIncome, description: e.target.value })}
                                className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Ex: Freelance"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Valor</label>
                            <input
                                type="number"
                                value={newIncome.amount}
                                onChange={(e) => setNewIncome({ ...newIncome, amount: e.target.value })}
                                className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="500.00"
                            />
                            </div>
                        <div>
                        <label className="block text-gray-400 text-sm mb-2">Data</label>
                        <input
                            type="date"
                            value={newIncome.date}
                            onChange={(e) => setNewIncome({ ...newIncome, date: e.target.value })}
                            className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Tipo</label>
                            <select
                                value={newIncome.type}
                                onChange={(e) => setNewIncome({ ...newIncome, type: e.target.value as "monthly" | "extra" })}
                                className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                <option value="extra">Extra</option>
                                <option value="monthly">Mensal</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            onClick={() => setShowIncomeModal(false)}
                            className="flex-1 bg-gray-700/50 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={handleAddIncome}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                        >
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-300 ${
                showExpenseModal ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
            >
                <div className="bg-secondary/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-6 max-w-md w-full">
                    <h3 className="text-2xl font-bold text-white mb-6">Adicionar Despesa</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Descrição</label>
                            <input
                                type="text"
                                value={newExpense.description}
                                onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                                className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Ex: iFood"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Valor</label>
                            <input
                                type="number"
                                value={newExpense.amount}
                                onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                                className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="45.00"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Data</label>
                            <input
                                type="date"
                                value={newExpense.date}
                                onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                                className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Categoria</label>
                            <select
                                value={newExpense.category}
                                onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                                className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                <option value="">Selecione uma categoria</option>
                                <option value="Alimentação">Alimentação</option>
                                <option value="Moradia">Moradia</option>
                                <option value="Transporte">Transporte</option>
                                <option value="Contas">Contas</option>
                                <option value="Lazer">Lazer</option>
                                <option value="Saúde">Saúde</option>
                                <option value="Educação">Educação</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="recurring"
                                checked={newExpense.recurring}
                                onChange={(e) => setNewExpense({ ...newExpense, recurring: e.target.checked })}
                                className="w-5 h-5 bg-gray-700/50 border border-white/10 rounded focus:ring-2 focus:ring-purple-500"
                            />
                            <label htmlFor="recurring" className="text-gray-400 text-sm">
                                Despesa recorrente
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            onClick={() => setShowExpenseModal(false)}
                            className="flex-1 bg-gray-700/50 hover:bg-gray-600 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={handleAddExpense}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                        >
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-304 mx-auto bg-secondary/40 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-6">
                <h2 className="text-xl font-bold text-white mb-4">Histórico de Renda</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {pastIncomes.map((pi: PastIncome) => (
                        <div key={pi.month} className="bg-gray-700/30 p-4 rounded-lg border border-white/10 hover:bg-gray-700/40 transition-colors">
                            <h3 className="text-white font-medium mb-2">{pi.month}</h3>
                            <p className="text-green-400 text-lg font-semibold mb-4">R$ {pi.amount.toFixed(2)}</p>
                            <div className="space-y-2">
                                <h4 className="text-white font-semibold mb-1">Receitas:</h4>
                                {pi.incomes.map((income) => (
                                    <div key={income.id} className="flex items-center justify-between">
                                        <span className="text-gray-300">{income.description}</span>
                                        <span className="text-green-400">+ R$ {income.amount.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2 mt-4">
                                <h4 className="text-white font-semibold mb-1">Despesas:</h4>
                                {pi.expenses.map((expense) => (
                                    <div key={expense.id} className="flex items-center justify-between">
                                        <span className="text-gray-300">{expense.description}</span>
                                        <span className="text-red-400">- R$ {expense.amount.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
