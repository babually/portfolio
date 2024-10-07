import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="container flex flex-col items-center justify-center space-y-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Mrisho Ally Mvungi
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        I'm a passionate developer creating innovative solutions and beautiful
        user experiences.
      </p>
      <Button size="lg" className="mt-4">
        View My Work
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </section>
  );
};

export default Hero;
