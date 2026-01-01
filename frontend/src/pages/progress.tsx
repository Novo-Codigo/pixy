import { FaUser } from "react-icons/fa6";
import Disciplina from "/public/disciplina.png";
import Indeciso from "/public/indeciso.png";
import Pinga from "/public/pinga.png";
import Troco from "/public/troco.png";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

const mockedRankingUsers = [
    {
        pos: 1,
        name: "Alex R."
    },
    {
        pos: 2,
        name: "Maria K."
    },
    {
        pos: 3,
        name: "Junior V."
    },
    {
        pos: 4,
        name: "You"
    },
    {
        pos: 5,
        name: "Felicia S."
    },
    {
        pos: 6,
        name: "Gabriel T."
    },
    {
        pos: 7,
        name: "Martin R."
    },
    {
        pos: 8,
        name: "Taylor T."
    },
    {
        pos: 9,
        name: "Scott M."
    },
    {
        pos: 10,
        name: "Harry P."
    },
]

const mockedBagdesData = [
    {
        id: 1,
        title: "Investidor de Pinga",
        icon: Pinga,
        description: "Gaste mais da metade dos seus investimentos em álcool por semana"
    },
    {
        id: 2,
        title: "Economizador de Troco",
        icon: Troco,
        description: "Economize menos de R$3,00 a cada compra por 1 mês"
    },
    {
        id: 3,
        title: "O Indeciso",
        icon:  Indeciso,
        description: "Guarde dinheiro semana sim, gaste semana não. Por pelo menos 1 mês"
    },
    {
        id: 4,
        title: "O Disciplinado",
        icon: Disciplina,
        description: "Mantenha seus gastos padronizados durante 1 mês"
    },
    {
        id: 5,
        title: "O Disciplinado",
        icon: Disciplina,
        description: "Mantenha seus gastos padronizados durante 1 mês"
    },
]

export default function Progress() {
    const [badgeSelected, setBadgeSelected] = useState<number | null>(null);

    function toggleBadgeModal(id?: number) {
        setBadgeSelected(id ?? null);
    }

    function badgeModal() {
        const badge = mockedBagdesData.find(b => b.id === badgeSelected);

        return (
            <div className="w-screen h-screen fixed bg-black/50 top-0 left-0 flex items-center justify-center">
                <div className="bg-neutral-200 border border-neutral-400 rounded-xl flex justify-center relative">
                    <div className="w-[80%] flex flex-col gap-y-4 p-4 items-center">
                        <img src={badge?.icon} className="w-24 h-24 border border-neutral-400/30 shadow-sm rounded-full p-3"/>
                        <p className="bg-secondary text-white rounded-lg px-4 py-1 shadow-lg">{badge?.title}</p>
                        <p className="max-w-[80%] text-center">{badge?.description}</p>
                        <hr className="w-full"/>
                        <p className="self-start text-neutral-600 text-sm">Reinicia em 30 dias</p>
                    </div>
                    <button
                        className="absolute -right-4 -top-4 hover:cursor-pointer"
                        onClick={() => toggleBadgeModal()}
                    >
                        <CgClose size={34} color="white" className="rounded-full bg-red-500"/>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-linear-to-br from-primary via-secondary to-primary flex justify-row flex-nowrap justify-between p-12 min-h-screen">
            <div className="flex flex-col justify-around max-w-[35%]">
                {/* Ranking Section */}
                <section className="w-full">
                    <p className="font-bold my-2 text-white">Posição Atual</p>
                    <div className="border border-gray-300 rounded-xl max-h-52 flex flex-col px-4 py-2 bg-white">
                        <div className="flex flex-row flex-nowrap justify-between items-baseline gap-x-12 border-b border-gray-300 py-1">
                            <p className="font-bold">Ranking</p>
                            <p className="text-xs text-black/80">Top 100 do Seu Nível</p>
                        </div>
                        <div className="overflow-y-auto">
                            {mockedRankingUsers.map((user) => (
                                <div key={user.pos} className={`flex flex-row flex-nowrap justify-start items-center gap-x-2 my-2 px-2 ${user.name === "You" ? "bg-linear-to-r from-primary via-secondary to-secondary/80 text-white rounded-lg py-2" : ""}`}>
                                    <span className={`tabular-nums ${user.pos === 1 ? "bg-yellow-400 rounded-full text-white px-2" : user.pos === 2 ? "bg-gray-300 rounded-full text-black px-2" : user.pos === 3 ? "bg-yellow-700 rounded-full px-2 text-white" : ""}`}>{user.pos}</span>
                                    <FaUser className="border rounded-full" />
                                    <p>{user.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bagdes Section */}
                <section className="w-full">
                    <p className="font-bold my-2 text-white">Conquistas</p>
                    <div className="border border-gray-300 rounded-xl max-h-52 flex flex-col px-4 py-6 bg-white">
                        <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 relative justify-center">
                            {mockedBagdesData.map((badge) => (
                                <button
                                    key={badge.id}
                                    type="button"
                                    className="border max-w-20 border-neutral-300 shadow-sm rounded-full p-4 transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
                                    onClick={() => toggleBadgeModal(badge.id)}
                                >
                                    <img src={badge.icon} className="w-full h-full"/>
                                </button>
                            ))}
                            {badgeSelected && badgeModal()}
                        </div>
                    </div>
                </section>
            </div>

            {/* Journey Section */}
            <section></section>
        </div>
    );
}