import { Link } from 'react-router-dom';
import { Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';

const Home = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Title */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 flex items-center justify-center gap-4 text-glow">
            <Cloud className="w-12 h-12 md:w-16 md:h-16" />
            ETHEREAL
            <Cloud className="w-12 h-12 md:w-16 md:h-16" />
          </h1>
          
          <Button
            variant="outline"
            size="lg"
            className="glow-white hover:glow-white-strong transition-all duration-300 border-2"
            onClick={() => window.open('https://discord.gg/example', '_blank')}
          >
            <span className="mr-2">💬</span>
            Join Discord
          </Button>
        </div>

        {/* Main Generator Section */}
        <div className="w-full max-w-2xl space-y-6 animate-scale-in">
          <div className="bg-card border-2 border-border rounded-2xl p-8 glow-white transition-all duration-300 hover:glow-white-strong">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Cloud className="w-6 h-6" />
              <h2 className="text-2xl font-bold">MAIN GENERATOR</h2>
              <Cloud className="w-6 h-6" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/generator" className="w-full">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full text-lg font-semibold border-2 border-border hover:border-primary transition-all duration-300 glow-white hover:glow-white-strong"
                >
                  <span className="mr-2">⚡</span>
                  Generator
                </Button>
              </Link>
              
              <Link to="/bypasser" className="w-full">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full text-lg font-semibold border-2 border-border hover:border-primary transition-all duration-300 glow-white hover:glow-white-strong"
                >
                  <span className="mr-2">⚡</span>
                  Bypasser
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground text-center mt-6 italic">
              If the Sites are down or Flagged be Patient as we are aware of this and working on fixing it asap
            </p>
          </div>

          {/* Tutorial Section */}
          <div className="w-full max-w-2xl mt-6 animate-scale-in">
            <div className="bg-card border-2 border-border rounded-2xl p-8 glow-white transition-all duration-300 hover:glow-white-strong">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-2xl">▶️</span>
                <h2 className="text-2xl font-bold">Tutorial</h2>
                <span className="text-2xl">▶️</span>
              </div>
              
              <Link to="/tutorial" className="block">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  <span className="mr-2">▶️</span>
                  Watch Tutorial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
