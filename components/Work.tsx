// File: components/Work.tsx
export default function Work() {
  const projects = [
    { name: "Personal Portfolio", type: "Web Design" },
    { name: "Avenuehub", type: "Full Stack" }
  ]

  return (
    <section className="w-full h-full flex bg-rich-black border-r border-white/10">
      {projects.map((p, i) => (
        <div key={i} className="w-1/2 h-full flex flex-col justify-center px-20 border-l border-white/10 first:border-l-0 hover:bg-white/[0.03] transition-colors group">
           <span className="font-serif text-9xl text-white/5 group-hover:text-luxury-gold/20 transition-colors duration-500">
             0{i+1}
           </span>
           <h3 className="font-serif text-5xl mt-10 mb-4 text-soft-cream">{p.name}</h3>
           <p className="font-sans text-xs tracking-widest uppercase text-luxury-gold">{p.type}</p>
        </div>
      ))}
    </section>
  )
}