import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaArrowRight } from 'react-icons/fa';
import type { AuthPayload } from '../core/types/api.types';
import { authService } from '../core/services/auth-services';
import { useNavigate } from 'react-router-dom';
import type { AxiosError } from 'axios';

type State =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'error'; message: string }
    | { status: 'success' };

export default function AuthPage() {
    const navigation = useNavigate();
    const [state, setState] = useState<State>({ status: 'idle' });
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [formData, setFormData] = useState<AuthPayload>({
        email: '',
        name: '',
        last_name: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ status: 'idle' });
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setState({
            status: 'loading',
        });

        if (isLogin) {
            try {
                await authService.login(formData);
                navigation('/');
            } catch (error: AxiosError | any) {
                if (error.name === 'AxiosError') {
                    setState({
                        status: 'error',
                        message: 'Problemas no servidor. Desculpas!',
                    });
                } else {
                    setState({
                        status: 'error',
                        message: 'Senha e/ou e-mail inválidos.',
                    });
                }
            }
        } else {
            try {
                await authService.register(formData);
                setIsLogin(true);
                setState({
                    status: 'idle',
                });
                setFormData({
                    email: formData.email,
                    password: '',
                });
            } catch (error) {
                console.warn(error);
                setState({
                    status: 'error',
                    message: 'Erro ao criar a conta. Tente novamente.',
                });
            }
        }
    };

    return (
        <div className="min-h-screen w-full flex bg-[#0f1115] relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-blue-600/20 rounded-full blur-[120px]" />

            <div className="hidden lg:flex w-1/2 flex-col justify-center items-center relative z-10 p-12">
                <div className="max-w-lg text-center space-y-8">
                    <h1 className="text-5xl font-bold text-white tracking-tight">
                        Domine suas{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                            Finanças
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        De "Malabarista de Boletos" a "Império Pixy". Transforme sua gestão
                        financeira em um jogo onde você sempre ganha.
                    </p>

                    <div className="mt-12 p-4 bg-gray-800/60 border border-white/10 rounded-xl backdrop-blur-md flex items-center gap-4 transform -rotate-6 hover:rotate-0 transition-all duration-500 cursor-default max-w-xs mx-auto">
                        <div className="bg-yellow-500/20 p-3 rounded-lg text-yellow-400">🔥</div>
                        <div className="text-left">
                            <div className="text-white font-bold text-sm">
                                Conquista Desbloqueada
                            </div>
                            <div className="text-gray-400 text-xs">
                                Mestre da Economia • Nível 4
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8 z-10">
                <div className="w-full max-w-md">
                    <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                        <div className="flex p-2 bg-gray-900/40 border-b border-white/5">
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                                    isLogin
                                        ? 'bg-gray-700/50 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                Entrar
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                                    !isLogin
                                        ? 'bg-gray-700/50 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                Cadastrar
                            </button>
                        </div>

                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {isLogin ? 'Bem-vindo de volta!' : 'Comece sua jornada'}
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    {isLogin
                                        ? 'Acesse seu painel e verifique seu progresso.'
                                        : 'Crie sua conta e comece a subir de nível.'}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {!isLogin && (
                                    <>
                                        <div>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <FaUser className="text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Seu primeiro nome"
                                                    className="w-full pl-11 pr-4 py-4 bg-gray-950/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <FaUser className="text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    placeholder="Seu último nome"
                                                    className="w-full pl-11 pr-4 py-4 bg-gray-950/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="group">
                                    {state.status === 'error' && (
                                        <p className="text-red-500 text-sm mb-2">{state.message}</p>
                                    )}
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <FaEnvelope className="text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="seu@email.com"
                                            className="w-full pl-11 pr-4 py-4 bg-gray-950/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <FaLock className="text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                        </div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Sua senha secreta"
                                            className="w-full pl-11 pr-4 py-4 bg-gray-950/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {isLogin && (
                                    <div className="flex justify-end">
                                        <a
                                            href="#"
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            Esqueceu a senha?
                                        </a>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {state.status === 'loading' ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            {isLogin ? 'Entrar no Sistema' : 'Criar Conta Grátis'}
                                            <FaArrowRight size={14} />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="my-8 flex items-center gap-4">
                                <div className="h-px bg-white/10 flex-1" />
                                <span className="text-gray-500 text-sm">ou continue com</span>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>

                            <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group">
                                <FaGoogle className="text-gray-400 group-hover:text-white transition-colors" />
                                <span>Google</span>
                            </button>
                        </div>
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-8">
                        © 2026 Pixy Financial. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </div>
    );
}
