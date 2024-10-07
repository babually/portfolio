import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="container py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Code className="h-8 w-8 mb-2" />
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Next.js.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Palette className="h-8 w-8 mb-2" />
            <CardTitle>UI/UX Design</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Creating intuitive and visually appealing user interfaces with a focus on user experience.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="h-8 w-8 mb-2" />
            <CardTitle>Performance Optimization</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Optimizing web applications for speed, efficiency, and scalability.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;