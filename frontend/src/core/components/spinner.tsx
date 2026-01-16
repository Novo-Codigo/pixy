export default function Spinner() {
    return (
        <div className="bg-primary w-screen h-screen">
            <div className="bg-primary/20 w-full h-full flex flex-col gap-y-4 justify-center items-center">
                <div className="relative animate-spin" style={{ width: 80, height: 80 }}>
                    <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
                    <div className="absolute inset-1 rounded-full bg-primary" />
                </div>
                <span className="text-white">Carregando</span>
            </div>
        </div>
    );
}
