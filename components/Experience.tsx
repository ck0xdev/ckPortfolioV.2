// File: components/Experience.tsx
export default function Experience() {
  return (
    <section className="w-full h-full flex items-center justify-center bg-rich-black border-r border-white/10 px-20">
      <div className="w-full max-w-5xl grid grid-cols-2 gap-20">
        
        {/* EXPERIENCE */}
        <div>
           <h3 className="font-serif text-3xl mb-8 border-b border-white/20 pb-4 text-soft-cream">Experience</h3>
           <div className="mb-8">
             <h4 className="text-xl font-bold text-gray-200">Intern</h4>
             <p className="text-luxury-gold font-serif italic">Subhghosh Technolab</p>
           </div>
        </div>

        {/* SKILLS */}
        <div>
           <h3 className="font-serif text-3xl mb-8 border-b border-white/20 pb-4 text-soft-cream">Skills</h3>
           <div className="flex flex-wrap gap-3">
             {["HTML", "CSS", "JavaScript", "React", "Python", "MongoDB"].map(skill => (
               <span key={skill} className="px-4 py-2 border border-white/10 rounded-md text-sm text-gray-400 hover:border-luxury-gold/50 hover:text-luxury-gold transition-colors">
                 {skill}
               </span>
             ))}
           </div>
        </div>

      </div>
    </section>
  )
}