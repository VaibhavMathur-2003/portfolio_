"use client"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Zap, Brain, Rocket } from "lucide-react"

const timeline = [
  {
    title: "Personalized Vision",
    description: "AI-driven routines tailored to your lifestyle, adapting as you grow.",
    icon: Brain,
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Smart Health Engine",
    description: "Intelligent coaching with GROQ LLMs for real-time fitness and nutrition.",
    icon: Zap,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Robust Architecture",
    description: "Next.js, MongoDB, and custom Tailwind UI ensure stability and speed.",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Blazing Speed",
    description: "Lighthouse 95+, seamless SSR, lazy loading, and optimized UX.",
    icon: Rocket,
    color: "from-orange-500 to-red-600",
  },
]

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col text-white overflow-hidden bg-black">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Transform Your Health
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
              Explore the power of AI-driven wellness through adaptive fitness and nutrition.
            </p>
          </>
        }
      >
        <Image
          src={`/change_1.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl h-full object-contain"
          draggable={false}
        />
      </ContainerScroll>

      {/* Enhanced Timeline Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Why Choose Our Platform
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built with cutting-edge technology to deliver the best wellness experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {timeline.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-6 w-1 h-1 bg-pink-500 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Enhanced Images Section */}
      <section className="w-full py-24 px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Link
              href="https://uchange.vercel.app/"
              className="inline-flex items-center gap-2 text-2xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text hover:from-green-300 hover:to-emerald-400 transition-all duration-300 group"
            >
              Explore the Platform
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="grid gap-12 lg:gap-16">
            {["/change_3.png", "/change_4.png", "/change_2.png"].map((src, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <Image
                  height={1000}
                  width={1000}
                  alt={`Wellness AI screenshot ${index + 1}`}
                  src={src || "/placeholder.svg"}
                  className="relative w-full max-w-6xl mx-auto rounded-3xl shadow-2xl shadow-black/50 hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-700 border border-gray-800/50"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
