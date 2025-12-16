import { Code, Wrench } from "lucide-react"
import { FaGithub } from "react-icons/fa";
import PixyLogo from "/pixy.webp";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex flex-row nowrap items-center justify-center gap-x-2 mb-4">
            <div className="w-30 h-auto">
              <img 
                src={PixyLogo}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Pixy
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-pretty">
            Seu amigo financeiro.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="space-y-12">
          {/* O que é o projeto */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00d4ff]">O que é o Pixy?</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Pixy ajuda você a gerenciar suas finanças de forma simples e
                eficaz. Seja para controle pessoal (CPF) ou empresarial (CNPJ), o Pixy oferece ferramentas para
                acompanhar gastos, planejar o futuro e melhorar sua saúde financeira.
              </p>
            </div>
          </div>

          {/* Para que serve */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00d4ff]">Para que serve?</h2>
              <div className="space-y-3 text-lg text-gray-300 leading-relaxed">
                <p>O Pixy foi criado para simplificar o controle financeiro e ajudar você a:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Registrar e categorizar receitas e despesas automaticamente</li>
                  <li>Acompanhar seu fluxo de caixa em tempo real</li>
                  <li>Gerar relatórios financeiros personalizados</li>
                  <li>Planejar metas e objetivos financeiros</li>
                  <li>Desenvolver uma mentalidade financeira mais saudável</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Código aberto */}
          <div className="bg-linear-to-br from-[#00d4ff]/10 to-[#0099cc]/10 backdrop-blur-md border border-[#00d4ff]/30 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#00d4ff] to-[#0099cc] flex items-center justify-center shadow-lg shadow-[#00d4ff]/40 shrink-0">
                <FaGithub className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-4 flex-1">
                <h2 className="text-3xl md:text-4xl font-bold">100% Código Aberto</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  O Pixy é um projeto open source. Isso significa que todo o código é público e pode ser auditado por
                  qualquer pessoa. Acreditamos em transparência total quando se trata do seu dinheiro e seus dados. Você
                  tem controle completo e pode confiar na segurança do sistema.
                </p>
                <button
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-6 rounded-2xl transition-all cursor-pointer"
                  onClick={() => window.open("https://github.com/Novo-Codigo/pixy.git", "_blank")}
                >
                  <div className="flex flex-row nowrap gap-x-4 items-center justify-center">
                    <Code className="w-5 h-5" />
                    <span>Ver no GitHub</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Em desenvolvimento */}
          <div className="bg-linear-to-br from-[#ff6b35]/10 to-[#ff8c61]/10 backdrop-blur-md border border-[#ff6b35]/30 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#ff6b35] to-[#ff8c61] flex items-center justify-center shadow-lg shadow-[#ff6b35]/40 shrink-0">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-4 flex-1">
                <h2 className="text-3xl md:text-4xl font-bold">Em Desenvolvimento Ativo</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  O Pixy está em constante evolução. Estamos trabalhando para trazer novas funcionalidades, melhorar a
                  experiência do usuário e adicionar recursos que farão ainda mais diferença na sua vida financeira.
                  Acompanhe nosso progresso!
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Beta</span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                    Atualizações Frequentes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-16 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-3xl font-bold">
            Pixy
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="https://github.com/Novo-Codigo/" className="hover:text-[#00d4ff] transition-colors">
              GitHub
            </a>
            <a href="https://github.com/Novo-Codigo/pixy/blob/master/README.md" className="hover:text-[#00d4ff] transition-colors">
              Documentação
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
