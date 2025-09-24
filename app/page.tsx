"use client"

import { useState } from "react"
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react"
import Image from 'next/image'
import Link from 'next/link'

export default function PaperShaderPage() {
  const [intensity, setIntensity] = useState(1.5)
  const [speed, setSpeed] = useState(1.0)
  const [isInteracting, setIsInteracting] = useState(false)
  const [activeEffect, setActiveEffect] = useState("mesh")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("pnpm i v0-cli")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Existing nav (top-right) */}
      <nav className="absolute top-0 left-0 right-0 z-10 pointer-events-auto">
        <div className="flex justify-end items-center px-8 py-6">
          <div className="flex items-center space-x-8 font-mono text-sm text-white/80 hover:text-white transition-colors">
            {/* ... (commented-out nav links remain unchanged) */}
          </div>
        </div>
      </nav>

      {/* MeshGradient and DotOrbit effects */}
      {activeEffect === "mesh" && (
        <MeshGradient
          className="w-full h-full absolute inset-0"
          colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
          speed={speed}
        />
      )}
      {activeEffect === "dots" && (
        <div className="w-full h-full absolute inset-0 bg-black">
          <DotOrbit
            className="w-full h-full"
            speed={speed}
          />
        </div>
      )}
      {activeEffect === "combined" && (
        <>
          <MeshGradient
            className="w-full h-full absolute inset-0"
            colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
            speed={speed * 0.5}
          />
          <div className="w-full h-full absolute inset-0 opacity-60">
            <DotOrbit
              className="w-full h-full"
              speed={speed * 1.5}
            />
          </div>
        </>
      )}

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Centered Header */}
        <div className="absolute top-4 left-0 right-0 pointer-events-auto">
          <header className="relative z-20 flex items-center justify-center px-6 py-4 max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png" // logo
                alt="Logo"
                className="w-30 h-10 object-contain transform translate-x-[-0.5px]"
              />
            </div>
            {/* Navigation */}
            <nav className="flex items-center space-x-2 ml-8">
              <Link
                href="/"
                className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Home / მთავარი
              </Link>
              <Link
                href="/"
                className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Products / პროდუქტები
              </Link>
              <Link
                href="/"
                className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                Contact / კონტაქტი
              </Link>
              <Link
                href="/"
                className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                About Us / ჩვენს შესახებ
              </Link>
            </nav>

            {/* Login Button Group with Arrow */}
            <div id="gooey-btn" className="relative flex items-center group ml-8" style={{ filter: "url(#gooey-filter)" }}>
              <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
              <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
                Login
              </button>
            </div>
          </header>
        </div>

        {/* Effect Controls */}
        <div className="absolute bottom-8 left-8 pointer-events-auto"></div>

        {/* Parameter Controls */}
        <div className="absolute bottom-8 right-8 pointer-events-auto space-y-4"></div>

        {/* Status indicator */}
        <div className="absolute top-8 right-8 pointer-events-auto"></div>
      </div>

      {/* Lighting overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/2 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/3 rounded-full blur-xl animate-pulse"
          style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
        />
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center font-mono">
          <div className="text-m text-white/50">We are preparing something new for you. Launching soon. / ჩვენ თქვენთვის ახალს ვამზადებთ. მალე გაიხსნება.</div>
          <div className="mt-1 flex items-center justify-center gap-2 text-xs">
            <Link
              href="https://github.com/loppocalypse"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto hover:text-white/80 transition-colors text-white/30"
            >
              loppocalypse
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}