import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="bg-rich-black min-h-[200vh]">
      <Hero />
      {/* This empty space is just so you can scroll and test the parallax */}
      <div className="h-screen w-full flex items-center justify-center text-gray-500 font-sans">
        <p>Keep scrolling to test the smooth motion...</p>
      </div>
    </main>
  )
}