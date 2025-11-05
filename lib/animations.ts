// Animation utilities for consistent usage across the app
export const animations = {
  // Fade animations
  fadeIn: "animate-fade-in",
  fadeUp: "animate-fade-up",
  
  // Slide animations
  slideIn: "animate-slide-in",
  
  // Built-in Tailwind animations
  spin: "animate-spin",
  ping: "animate-ping",
  pulse: "animate-pulse",
  bounce: "animate-bounce",
  
  // shadcn/ui animations
  accordionDown: "animate-accordion-down",
  accordionUp: "animate-accordion-up",
} as const

// Animation classes for Framer Motion
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  },
  
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  },
  
  slideIn: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
    transition: { duration: 0.3 },
  },
}

// CSS animation classes for direct usage
export const cssAnimations = {
  fadeIn: "transition-opacity duration-500 ease-in-out",
  fadeUp: "transition-all duration-500 ease-in-out transform",
  slideIn: "transition-transform duration-300 ease-in-out",
  hover: "transition-all duration-200 ease-in-out hover:scale-105",
  focus: "transition-all duration-200 ease-in-out focus:ring-2 focus:ring-primary",
}