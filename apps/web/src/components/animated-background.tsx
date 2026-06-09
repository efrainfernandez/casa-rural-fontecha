'use client'

import { useEffect, useRef } from 'react'

const SPRITE_PATH = '/media/fondo-sprites/fondo-sprite.png'
const POSTER_PATH = '/media/fondo-sprites/fondo-poster.jpg'
const FRAME_WIDTH = 256
const FRAME_HEIGHT = 144
const COLUMNS = 12
const TOTAL_FRAMES = 96

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas == null) {
      return
    }

    const canvasElement = canvas

    const context = canvasElement.getContext('2d', { alpha: true })

    if (context == null) {
      return
    }

    const drawingContext = context

    const sprite = new Image()
    let animationFrameId = 0
    let isCancelled = false
    let lastFrame = -1

    function resizeCanvas() {
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      const width = window.innerWidth
      const height = window.innerHeight

      canvasElement.width = Math.round(width * devicePixelRatio)
      canvasElement.height = Math.round(height * devicePixelRatio)
      canvasElement.style.width = `${width}px`
      canvasElement.style.height = `${height}px`
    }

    function drawFrame(frameIndex: number) {
      const sourceX = (frameIndex % COLUMNS) * FRAME_WIDTH
      const sourceY = Math.floor(frameIndex / COLUMNS) * FRAME_HEIGHT
      const canvasWidth = canvasElement.width
      const canvasHeight = canvasElement.height
      const scale = Math.max(canvasWidth / FRAME_WIDTH, canvasHeight / FRAME_HEIGHT)
      const drawWidth = FRAME_WIDTH * scale
      const drawHeight = FRAME_HEIGHT * scale
      const drawX = (canvasWidth - drawWidth) / 2
      const drawY = (canvasHeight - drawHeight) / 2

      drawingContext.clearRect(0, 0, canvasWidth, canvasHeight)
      drawingContext.drawImage(sprite, sourceX, sourceY, FRAME_WIDTH, FRAME_HEIGHT, drawX, drawY, drawWidth, drawHeight)
    }

    function drawFromScroll() {
      const scrollableHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const progress = Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
      const frame = Math.min(Math.floor(progress * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1)

      if (frame !== lastFrame) {
        drawFrame(frame)
        lastFrame = frame
      }
    }

    function requestDraw() {
      window.cancelAnimationFrame(animationFrameId)
      animationFrameId = window.requestAnimationFrame(() => {
        if (!isCancelled && sprite.complete) {
          drawFromScroll()
        }
      })
    }

    resizeCanvas()

    function handleResize() {
      resizeCanvas()

      if (sprite.complete) {
        drawFromScroll()
      }
    }

    sprite.onload = () => {
      if (isCancelled) {
        return
      }

      drawFromScroll()
    }

    sprite.src = SPRITE_PATH
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', requestDraw, { passive: true })

    return () => {
      isCancelled = true
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', requestDraw)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#08110d]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 scale-110"
        style={{ backgroundImage: `url(${POSTER_PATH})` }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full scale-110 opacity-80 blur-[14px] saturate-[1.15]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,8,0.28),rgba(6,10,8,0.46))]" />
    </div>
  )
}
