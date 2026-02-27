import { useMotionValue, useTransform, useMotionValueEvent, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GiRecycle, GiPlantSeed, GiOfficeChair } from 'react-icons/gi'
import { FaGift } from 'react-icons/fa'

export default function AboutWorkSection() {
  const stats = [
    { value: 3500, label: "Organic waste diverted from landfills", unit: "kg", Icon: GiRecycle, color: "#4CAF50" },
    { value: 2800, label: "Plants nurtured through our compost & kits", Icon: GiPlantSeed, color: "#8BC34A" },
    { value: 25, label: "Schools & corporates engaged via workshops", Icon: GiOfficeChair, color: "#FFC107" },
    { value: 1000, label: "Eco-friendly gifts delivered by our company", Icon: FaGift, color: "#FF9800" },
  ]

  return (
    <section className="relative w-full bg-transparent p-0">
      <div className="bg-[linear-gradient(350deg,#3e2723_10%,#795548_100%)] w-full py-12 px-3 md:py-16 md:px-8 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-center relative z-10 px-2 lg:px-5">
          
          {/* Left side - THE CHANGE text */}
          <div 
            className="flex items-center justify-center "
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h1 className="text-6xl md:text-[7.5rem] font-black text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] tracking-tight leading-[0.9] relative lg:-left-40 bg-[url('https://images.unsplash.com/photo-1741186695426-e17db619c21d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdyZWVuJTIwd29vZHxlbnwwfDB8MHx8fDA%3D')] bg-center bg-cover bg-clip-text text-transparent [-webkit-text-stroke:1px_white] bg-blend-overlay">
              THE CHANGE
              <span className="absolute top-0 left-0 text-white/10 -z-10 [-webkit-text-fill-color:rgba(255,255,255,0.1)]">THE CHANGE</span>
            </h1>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-stretch bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 relative lg:-left-12 mt-12 lg:mt-0 gap-6 md:gap-4 lg:gap-0">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="flex flex-1 items-center justify-center relative w-full md:w-auto"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="800"
              >
                <CountUpStat stat={stat} />
                {index < stats.length - 1 && (
                  <div className="hidden lg:block w-[2px] h-[80px] shrink-0 mx-4 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.5)_20%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0.5)_80%,transparent_100%)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CountUpStat({ stat }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.floor(latest))
  const [display, setDisplay] = useState(0)

  useMotionValueEvent(rounded, "change", (v) => setDisplay(v))

  useEffect(() => {
    const duration = stat.value > 500 
      ? Math.min(stat.value / 800, 10) 
      : 10

    const controls = animate(count, stat.value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    })

    return () => controls.stop()
  }, [count, stat.value])

  const formatNumber = (n) => new Intl.NumberFormat("en-US").format(n)

  return (
    <div className="text-center text-white flex-1 flex flex-col items-center justify-center p-4 rounded-xl md:w-[10vw] md:h-[25vh]">
      <div className="mb-2 opacity-90" style={{ color: stat.color }}>
        <stat.Icon size={24} />
      </div>
      <div className="flex items-baseline justify-center gap-1 mb-3">
        <span className="text-3xl md:text-[2rem] font-bold text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">{formatNumber(display)}</span>
        {stat.unit && <span className="text-lg md:text-[1.2rem] text-white/90">{stat.unit}</span>}
      </div>
      <p className="text-[0.9rem] md:text-[0.85rem] text-white/90 leading-tight font-medium w-[140px] max-w-full">
        {stat.label}
      </p>
    </div>
  )
}