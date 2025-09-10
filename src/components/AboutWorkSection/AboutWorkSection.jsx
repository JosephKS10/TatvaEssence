import { useMotionValue, useTransform, useMotionValueEvent, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GiRecycle, GiPlantSeed, GiOfficeChair } from 'react-icons/gi'
import { FaGift } from 'react-icons/fa'
import './AboutWorkSection.css'

export default function AboutWorkSection() {
  const stats = [
    { value: 3500, label: "Organic waste diverted from landfills", unit: "kg", Icon: GiRecycle, color: "#4CAF50" },
    { value: 2800, label: "Plants nurtured through our compost & kits", Icon: GiPlantSeed, color: "#8BC34A" },
    { value: 25, label: "Schools & corporates engaged via workshops", Icon: GiOfficeChair, color: "#FFC107" },
    { value: 1000, label: "Eco-friendly gifts delivered by our company", Icon: FaGift, color: "#FF9800" },
  ]

  return (
    <section className="about-work-section">
      <div className="change-strip">
        <div className="change-container">
          {/* Left side - THE CHANGE text */}
          <div 
            className="change-text-container"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h1 className="change-title">THE CHANGE</h1>
          </div>

          {/* Right side - Stats with vertical separators */}
          <div className="stats-horizontal" >
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="stat-item-horizontal"
                data-aos="fade-up"
                data-aos-delay={index * 150} // staggered fade-up
                data-aos-duration="800"
              >
                <CountUpStat stat={stat} />
                {index < stats.length - 1 && <div className="vertical-separator"></div>}
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
      ? Math.min(stat.value / 800, 10) // scale duration with value
      : 10

    const controls = animate(count, stat.value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    })

    return () => controls.stop()
  }, [count, stat.value])

  const formatNumber = (n) => new Intl.NumberFormat("en-US").format(n)

  return (
    <div className="count-up-stat-horizontal">
      <div className="stat-icon" style={{ color: stat.color }}>
        <stat.Icon size={24} />
      </div>
      <div className="stat-value-container">
        <span className="stat-value">{formatNumber(display)}</span>
        {stat.unit && <span className="stat-unit">{stat.unit}</span>}
      </div>
      <p className="stat-label">{stat.label}</p>
    </div>
  )
}
