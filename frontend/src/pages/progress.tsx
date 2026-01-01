import { FaUser } from "react-icons/fa6";

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

export default function Progress() {
    return (
        <div className="bg-linear-to-br from-primary via-secondary to-primary flex justify-row flex-nowrap justify-between p-12 min-h-screen">
            <div>
                {/* Ranking Section */}
                <section>
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
                <section></section>
            </div>

            {/* Journey Section */}
            <section></section>
        </div>
    );
}