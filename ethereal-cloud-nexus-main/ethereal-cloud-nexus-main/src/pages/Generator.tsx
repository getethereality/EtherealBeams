import { Link } from 'react-router-dom';
import { ArrowLeft, Cloud, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';

const Generator = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Back Button */}
        <Link to="/">
          <Button
            variant="outline"
            className="mb-8 glow-white hover:glow-white-strong transition-all duration-300 border-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold flex items-center justify-center gap-4 text-glow mb-2">
              <Cloud className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
              GENERATORS
              <Cloud className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
            </h1>
            <p className="text-muted-foreground text-lg mt-4">Select your preferred generator option</p>
          </div>

          <div className="w-full max-w-4xl space-y-8 animate-scale-in">
            {/* Main Site Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-card via-secondary to-card border-2 border-border rounded-2xl p-10 glow-white transition-all duration-500 group-hover:glow-white-strong group-hover:border-primary/50 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-bold text-primary flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    Main Site
                  </h2>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div className="flex items-center gap-3 text-base bg-secondary/50 rounded-lg p-3 border border-border/50">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                    <span className="font-medium">Auto Disable 2fac</span>
                  </div>
                  <div className="flex items-center gap-3 text-base bg-secondary/50 rounded-lg p-3 border border-border/50">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                    <span className="font-medium">Auto Change Age</span>
                  </div>
                  <div className="flex items-center gap-3 text-base bg-secondary/50 rounded-lg p-3 border border-border/50">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                    <span className="font-medium">Auto Add Authenticator</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full text-xl font-bold py-7 bg-primary text-primary-foreground hover:bg-primary/90 glow-white-strong transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => window.open('https://immortal.rs/?code=NzA3Mzc1MjExMDU4MzA1NzIwOQ==', '_blank')}
                >
                  STANDARD OPTION
                </Button>
              </div>
            </div>

            {/* Backup Site Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-card via-secondary to-card border-2 border-border rounded-2xl p-10 glow-white transition-all duration-500 group-hover:glow-white-strong group-hover:border-primary/50 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-bold text-primary flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    Backup Site
                  </h2>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div className="flex items-center gap-3 text-base bg-secondary/50 rounded-lg p-3 border border-border/50">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                    <span className="font-medium">Auto Set Email</span>
                  </div>
                  <div className="flex items-center gap-3 text-base bg-secondary/50 rounded-lg p-3 border border-border/50">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                    <span className="font-medium">Auto Disable 2Fac</span>
                  </div>
                  <div className="flex items-center gap-3 text-base bg-secondary/50 rounded-lg p-3 border border-border/50">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                    <span className="font-medium">Auto Add Authenticator</span>
                  </div>
                  <div className="flex items-center gap-3 text-base bg-secondary/50 rounded-lg p-3 border border-border/50">
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                    <span className="font-medium">Auto Change Age</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full text-xl font-bold py-7 bg-primary text-primary-foreground hover:bg-primary/90 glow-white-strong transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => window.open('https://www.logged.tg/auth/ethereal', '_blank')}
                >
                  STANDARD OPTION
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center italic mt-8 bg-secondary/30 rounded-lg p-4 border border-border/30">
              If the Sites are down or Flagged be Patient as we are aware of this and working on fixing it asap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
