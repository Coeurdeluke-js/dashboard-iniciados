'use client';

import UserProfile from '@/components/auth/UserProfile';

export default function PerfilPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Triangle Background */}
      <div className="triangle-background">
        <div className="triangle-dots"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center text-crypto-blue mb-10">
          Tu Perfil
        </h1>
        
        <UserProfile />
      </div>
    </div>
  );
}