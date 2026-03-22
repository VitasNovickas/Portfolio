import Hero from '@/components/Hero';
import About from '@/components/about';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <section id="contact"/>     {/* How to reach you */}
    </main>
  );
}
