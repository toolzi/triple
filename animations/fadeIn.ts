interface FadeInConfig {
  duration?: number
  delay?: number
}

export const fadeIn = (config?: FadeInConfig) => {
  return {
    initial: { opacity: 0, y: '10px' },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: config?.duration ?? 0.7,
      ease: 'easeInOut',
      delay: config?.delay ?? 0,
      when: 'afterChildren',
    },
  }
}
