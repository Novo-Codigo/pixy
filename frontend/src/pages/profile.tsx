"use client"

import { FaEnvelope, FaCalendar, FaEdit, FaCog, FaSignOutAlt } from "react-icons/fa"

export default function ProfilePage() {
  const user = {
    name: "Maria Silva",
    email: "maria.silva@email.com",
    joinDate: "Janeiro 2024"
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Profile Header Card */}
        <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 overflow-hidden mb-8">
          <div className="h-32 md:h-48 bg-linear-to-l from-primary to-secondary" />

          {/* Profile Info */}
          <div className="px-6 md:px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 md:-mt-20">
              <div className="flex flex-col md:flex-row md:items-end gap-6">

                {/* Name */}
                <div className="pb-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{user.name}</h1>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6 md:mt-0 md:mb-2">
                <button className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium hover:cursor-pointer">
                  <FaEdit size={16} />
                  Editar Perfil
                </button>
                <button className="bg-gray-700/50 hover:bg-gray-600 text-white p-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer">
                  <FaCog size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="bg-secondary backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Informações</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <FaEnvelope size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-medium">{user.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-gray-700/50 p-3 rounded-lg">
                  <FaCalendar size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Entrou em</div>
                  <div className="font-medium">{user.joinDate}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-secondary backdrop-blur-sm rounded-2xl shadow-xl border border-white/10 p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Configurações da Conta</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between bg-gray-700/30 hover:bg-gray-700/50 text-white px-5 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:cursor-pointer">
                <span className="font-medium">Privacidade e Segurança</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full flex items-center justify-between bg-gray-700/30 hover:bg-gray-700/50 text-white px-5 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:cursor-pointer">
                <span className="font-medium">Notificações</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full flex items-center justify-between bg-gray-700/30 hover:bg-gray-700/50 text-white px-5 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:cursor-pointer">
                <span className="font-medium">Preferências</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full flex items-center justify-between bg-red-900/30 hover:bg-red-900/50 text-red-300 px-5 py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] mt-6 border border-red-500/20 hover:cursor-pointer">
                <span className="font-medium flex items-center gap-2">
                  <FaSignOutAlt size={16} />
                  Sair da Conta
                </span>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
