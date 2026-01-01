import { FaStar, FaUser, FaTrophy, FaLock, FaCheck } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

import Disciplina from "/disciplina.png";
import Indeciso from "/indeciso.png";
import Pinga from "/pinga.png";
import Troco from "/troco.png";

const mockedRankingUsers = [
    { pos: 1, name: "Alex R." },
    { pos: 2, name: "Maria K." },
    { pos: 3, name: "Junior V." },
    { pos: 4, name: "You" },
    { pos: 5, name: "Felicia S." },
    { pos: 6, name: "Gabriel T." },
    { pos: 7, name: "Martin R." },
    { pos: 8, name: "Taylor T." },
    { pos: 9, name: "Scott M." },
    { pos: 10, name: "Harry P." },
];

const mockedBagdesData = [
    {
        id: 1,
        title: "Investidor de Pinga",
        icon: Pinga,
        description: "Gaste mais da metade dos seus investimentos em álcool por semana",
        unlocked: true,
    },
    {
        id: 2,
        title: "Economizador de Troco",
        icon: Troco,
        description: "Economize menos de R$3,00 a cada compra por 1 mês",
        unlocked: true,
    },
    {
        id: 3,
        title: "O Indeciso",
        icon: Indeciso,
        description: "Guarde dinheiro semana sim, gaste semana não. Por pelo menos 1 mês",
        unlocked: true,
    },
    {
        id: 4,
        title: "O Disciplinado",
        icon: Disciplina,
        description: "Mantenha seus gastos padronizados durante 1 mês",
        unlocked: false,
    },
    {
        id: 5,
        title: "Mestre da Economia",
        icon: Disciplina,
        description: "Mantenha seus gastos padronizados durante 3 meses",
        unlocked: false,
    },
];

const mockedJourneyPoints = [
    { id: 1, title: "O Início", progress: 1, status: "completed" },
    { id: 2, title: "Progresso", progress: 0.5, status: "current" },
    { id: 3, title: "Mercadinho", progress: 0, status: "locked" },
    { id: 4, title: "Império", progress: 0, status: "locked" },
];

const BadgeModal = ({
    badgeId,
    onClose,
}: {
    badgeId: number;
    onClose: () => void;
}) => {
    const badge = mockedBagdesData.find((b) => b.id === badgeId);
    if (!badge) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300 p-4">
            <div className="relative w-full max-w-md scale-100 transform rounded-2xl bg-white p-6 shadow-2xl transition-all">
                <button
                    onClick={onClose}
                    className="absolute -right-3 -top-3 rounded-full bg-red-500 p-2 text-white shadow-md transition-transform hover:scale-110 hover:bg-red-600"
                >
                    <CgClose size={20} />
                </button>

                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="relative">
                        <div className={`rounded-full p-1 ${badge.unlocked ? "bg-linear-to-tr from-yellow-400 to-orange-500" : "bg-gray-300"}`}>
                            <img
                                src={badge.icon}
                                alt={badge.title}
                                className={`h-28 w-28 rounded-full border-4 border-white object-cover shadow-inner ${!badge.unlocked && "grayscale opacity-50"}`}
                            />
                        </div>
                        {!badge.unlocked && <div className="absolute bottom-0 right-0 bg-gray-700 text-white p-2 rounded-full"><FaLock size={12}/></div>}
                    </div>
                
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{badge.title}</h3>
                        <span className={`px-3 py-0.5 rounded-full text-xs font-medium ${badge.unlocked ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                            {badge.unlocked ? "Conquistado" : "Bloqueado"}
                        </span>
                    </div>

                    <p className="text-gray-600">{badge.description}</p>
                
                    <div className="w-full border-t border-gray-100 pt-4">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                            {badge.unlocked ? "Conquistado em 12/10/2024" : "Reinicia em 30 dias"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ProfessionalProgress() {
    const [badgeSelected, setBadgeSelected] = useState<number | null>(null);

    const getRankStyle = (pos: number) => {
        switch (pos) {
        case 1: return "text-yellow-500 border-yellow-500 bg-yellow-50";
        case 2: return "text-gray-500 border-gray-400 bg-gray-50";
        case 3: return "text-amber-700 border-amber-700 bg-orange-50";
        default: return "text-white border-gray-200";
        }
    };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-primary via-secondary to-primary p-6 md:p-12 font-sans text-slate-800 selection:bg-purple-300">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12">
        
            {/* --- Ranking & Badges --- */}
            <div className="flex flex-col gap-8 lg:col-span-4">
            
                {/* Ranking */}
                <section className="flex flex-col gap-3">
                    <h2 className="flex items-center gap-2 text-lg font-bold text-white/90">
                        <FaTrophy className="text-yellow-400" /> Classificação
                    </h2>
                    
                    <div className="flex h-80 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-xl">
                        <div className="flex justify-between border-b border-white/10 p-4 text-white">
                            <span className="font-semibold">Ranking Semanal</span>
                            <span className="text-xs text-white/60 self-center uppercase tracking-wider">Top 100</span>
                        </div>
                    
                        <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                            {mockedRankingUsers.map((user) => (
                                <div
                                    key={user.pos}
                                    className={`mb-2 flex items-center justify-between rounded-xl p-3 transition-colors ${
                                    user.name === "You"
                                        ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg border border-purple-400"
                                        : "bg-white/5 text-white/80 hover:bg-white/10"
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold ${user.name === "You" ? "border-white text-white" : getRankStyle(user.pos)}`}>
                                            <FaUser />
                                        </div>
                                        <span className="font-medium">{user.name}</span>
                                    </div>
                                    {user.pos}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seção Conquistas (Badges) */}
                <section className="flex flex-col gap-3">
                    <h2 className="text-lg font-bold text-white/90">Conquistas Recentes</h2>
                    <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6 shadow-xl">
                        <div className="grid grid-cols-4 gap-4 place-items-center">
                            {mockedBagdesData.map((badge) => (
                                <button
                                    key={badge.id}
                                    onClick={() => setBadgeSelected(badge.id)}
                                    className="group relative flex h-16 w-16 items-center justify-center transition-transform hover:scale-110 focus:outline-none hover:cursor-pointer"
                                    title={badge.title}
                                >
                                    <div className={`absolute inset-0 rounded-full opacity-20 transition-opacity group-hover:opacity-40 ${badge.unlocked ? "bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]" : "bg-gray-500"}`}></div>
                                    <img
                                        src={badge.icon}
                                        alt={badge.title}
                                        className={`relative z-10 h-14 w-14 rounded-full object-cover shadow-sm ${!badge.unlocked && "grayscale opacity-60"}`}
                                    />
                                    {!badge.unlocked && (
                                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 rounded-full">
                                            <FaLock className="text-white/80" size={14}/>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* --- Journey --- */}
            <div className="lg:col-span-8 flex flex-col gap-3">
                <h2 className="text-lg font-bold text-white/90">Sua Jornada à Ascensão</h2>
                
                <div className="flex flex-1 flex-col justify-center rounded-2xl border border-white/10 bg-white/90 shadow-2xl py-8 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-white to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent z-20 pointer-events-none"></div>

                    <div className="text-center mb-8 px-6">
                        <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
                            Nível Atual: Consistência
                        </p>
                        <p className="text-gray-500 text-sm mt-1">Deslize para ver os próximos marcos</p>
                    </div>

                    <div className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4">
                        {mockedJourneyPoints.map((path, index) => {
                            const isCompleted = path.status === "completed";
                            const isCurrent = path.status === "current";
                            const isLocked = path.status === "locked";

                            const prevCompleted = index > 0 && mockedJourneyPoints[index - 1].status !== 'locked';
                            const lineLeftColor = prevCompleted || isCompleted || isCurrent ? "bg-purple-500" : "bg-gray-200";
                            
                            const lineRightColor = isCompleted ? "bg-purple-500" : "bg-gray-200";

                            return (
                                <div key={path.id} className="min-w-[50%] relative flex flex-col items-center snap-center group">
                                    <div className="absolute top-8 w-full flex items-center justify-center z-0">
                                        <div className={`h-1.5 w-1/2 ${index === 0 ? 'opacity-0' : ''} ${lineLeftColor} transition-colors duration-500`}></div>
                                        
                                        <div className={`h-1.5 w-1/2 ${index === mockedJourneyPoints.length - 1 ? 'opacity-0' : ''} ${lineRightColor} transition-colors duration-500`}></div>
                                    </div>

                                    <div 
                                        className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-500 shadow-lg
                                            ${isCompleted ? "border-purple-500 bg-purple-500 text-white scale-100" : ""}
                                            ${isCurrent ? "border-purple-500 bg-white text-purple-600 scale-110 shadow-purple-500/50 ring-4 ring-purple-100" : ""}
                                            ${isLocked ? "border-gray-200 bg-gray-100 text-gray-300 grayscale" : ""}
                                        `}
                                    >
                                        {isCompleted ? <FaCheck size={20} /> : isCurrent ? <FaStar size={24} className="animate-pulse" /> : <FaLock size={20} />}
                                    </div>
                                    
                                    <div className="text-center mt-6 px-2 transition-opacity duration-300">
                                        <p className={`font-bold text-base truncate w-full ${isCurrent ? "text-purple-700" : isLocked ? "text-gray-400" : "text-gray-700"}`}>
                                            {path.title}
                                        </p>
                                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">
                                            {isCompleted ? "Concluído" : isCurrent ? "Em andamento" : "Bloqueado"}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        {badgeSelected && (
            <BadgeModal 
                badgeId={badgeSelected} 
                onClose={() => setBadgeSelected(null)} 
            />
        )}
    </div>
  );
}