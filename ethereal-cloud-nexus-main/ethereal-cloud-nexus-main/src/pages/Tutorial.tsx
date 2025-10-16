import { Link } from 'react-router-dom';
import { ArrowLeft, Cloud, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';

const tutorials = [
  {
    title: 'Tutorial Beam Main Site',
    url: 'https://example.com/tutorial-main',
  },
  {
    title: 'Tutorial Beam Backup Site',
    url: 'https://example.com/tutorial-backup',
  },
  {
    title: 'Tutorial Email Bypasser',
    url: 'https://example.com/tutorial-email',
  },
  {
    title: 'Tutorial Webhooks',
    url: 'https://example.com/tutorial-webhooks',
  },
  {
    title: 'Cookie Log Mobile',
    url: 'https://example.com/cookie-mobile',
  },
  {
    title: 'Cookie Log iOS',
    url: 'https://example.com/cookie-ios',
  },
  {
    title: 'Cookie Log PC',
    url: 'https://example.com/cookie-pc',
  },
];

const Tutorial = () => {
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
            Back to Main
          </Button>
        </Link>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold flex items-center justify-center gap-4 text-glow">
              <Cloud className="w-10 h-10 md:w-14 md:h-14" />
              ETHEREAL TUTORIALS
              <Cloud className="w-10 h-10 md:w-14 md:h-14" />
            </h1>
          </div>

          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {tutorials.map((tutorial, index) => (
              <button
                key={index}
                onClick={() => window.open(tutorial.url, '_blank')}
                className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 glow-white hover:glow-white-strong group min-h-[180px] flex flex-col items-center justify-center"
              >
                <Play className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-center">{tutorial.title}</h3>
                <p className="text-sm text-muted-foreground">Click to Watch</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
