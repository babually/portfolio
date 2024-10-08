import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CardMarquee from '@/components/CardMarquee';

const marqueeItems = [
  { title: "React", description: "Building interactive UIs" },
  { title: "Next.js", description: "Server-side rendering and static generation" },
  { title: "TypeScript", description: "Type-safe JavaScript development" },
  { title: "Tailwind CSS", description: "Utility-first CSS framework" },
  { title: "Node.js", description: "Server-side JavaScript runtime" },
  { title: "GraphQL", description: "Efficient API queries and mutations" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CardMarquee items={marqueeItems}/>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}