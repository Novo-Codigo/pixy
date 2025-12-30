import PixyLogo from "/public/pixy.webp";

export function About() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-primary via-secondary to-primary py-20 md:py-32 min-h-screen text-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                            <span className="text-sm font-medium text-accent-foreground">🎯 Construa seu futuro financeiro</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                            Alcance sua liberade.
                            <br />
                            <span className="text-blue-300/90">1 passo</span> de cada vez.
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                            {
                                "Com a ajuda do seu novo companheiro Pixy, alcance a sua liberdade financeira através de missões que vão te ajudar a subir de nível (literalmente)"
                            }
                        </p>

                        <div className="flex flex-col items-center sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#" className="text-base bg-neutral-200 text-black p-3 rounded-xl hover:cursor-pointer text-primary-foreground hover:bg-neutral-300">
                                Comece Agora!
                            </a>
                            <a href="#" className="text-base bg-transparent hover:underline">
                                Entenda como funciona
                            </a>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                                <img src={PixyLogo} className="w-64 h-64 md:w-72 md:h-80 relative drop-shadow-2xl" />

                            {/* Floating achievement badges */}
                            <div className="absolute -top-4 -left-4 animate-float bg-neutral-100/80 backdrop-blur-lg text-black border border-border rounded-xl p-3 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-primary/50 rounded-full flex items-center justify-center text-lg">🔥</div>
                                    <div className="text-xs">
                                        <div className="font-semibold">7 Direto!</div>
                                        <div className="text-muted-foreground">Continue Assim</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 -right-4 animate-float-delayed bg-neutral-100/80 backdrop-blur-lg text-black border border-border rounded-xl p-3 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-secondary/50 rounded-full flex items-center justify-center text-lg">💎</div>
                                    <div className="text-xs">
                                        <div className="font-semibold">Investidor Nível 5</div>
                                        <div className="text-muted-foreground">+250 XP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
