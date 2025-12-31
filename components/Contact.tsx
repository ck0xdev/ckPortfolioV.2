// File: components/Contact.tsx
export default function Contact() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center bg-rich-black">
      <h2 className="font-serif text-[10vw] leading-none text-soft-cream hover:text-luxury-gold hover:italic transition-all duration-500 cursor-pointer">
        Let's Talk.
      </h2>
      <div className="flex gap-10 mt-12 font-sans text-sm tracking-widest uppercase text-gray-500">
        <a href="mailto:kukadiyachintan026@gmail.com" className="hover:text-soft-cream transition-colors">Email</a>
        <a href="https://github.com/ck0xdev" target="_blank" className="hover:text-soft-cream transition-colors">GitHub</a>
      </div>
    </section>
  )
}