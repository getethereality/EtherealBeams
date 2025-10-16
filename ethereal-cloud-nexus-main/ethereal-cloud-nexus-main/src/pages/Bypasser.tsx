import { Link } from 'react-router-dom';
import { ArrowLeft, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';

const Bypasser = () => {
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
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold flex items-center justify-center gap-4 text-glow">
              <Cloud className="w-10 h-10 md:w-14 md:h-14" />
              BYPASSER
              <Cloud className="w-10 h-10 md:w-14 md:h-14" />
            </h1>
          </div>

          <div className="w-full max-w-2xl space-y-6 animate-scale-in">
            {/* Bypass Tools Card */}
            <div className="bg-card border-2 border-border rounded-2xl p-8 glow-white transition-all duration-300 hover:glow-white-strong">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Cloud className="w-6 h-6" />
                <h2 className="text-2xl font-bold">BYPASS TOOLS</h2>
                <Cloud className="w-6 h-6" />
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => window.open('https://example.com/13-bypass', '_blank')}
                  className="w-full bg-secondary border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300 glow-white hover:glow-white-strong group"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Cloud className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold">13+ To &lt;13</h3>
                    <Cloud className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-sm text-muted-foreground">Bypass age restrictions</p>
                </button>

                <button
                  onClick={() => window.open('https://example.com/dual-hook', '_blank')}
                  className="w-full bg-secondary border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300 glow-white hover:glow-white-strong group"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Cloud className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold">Dual Hook</h3>
                    <Cloud className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-sm text-muted-foreground">Advanced bypass creation</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bypasser;
