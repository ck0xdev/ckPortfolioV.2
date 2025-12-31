// File: components/About.tsx
export default function About() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-rich-black px-20 border-r border-white/10">
      <div className="max-w-4xl text-center">
        <p className="font-sans text-sm tracking-[0.3em] uppercase text-luxury-gold mb-8">Who I Am</p>
        <h2 className="font-serif text-5xl md:text-7xl leading-tight text-soft-cream mb-12">
          I am a <span className="italic text-gray-500">BCA Student</span>, 
          <br /> Front-End Developer 
          <br /> & Graphic Designer.
        </h2>
        <div className="flex justify-center gap-4">
           <span className="px-6 py-2 border border-white/20 rounded-full text-sm text-gray-400 hover:border-luxury-gold hover:text-luxury-gold transition-all cursor-default">
             Based in India
           </span>
        </div>
      </div>
    </section>
  )
}