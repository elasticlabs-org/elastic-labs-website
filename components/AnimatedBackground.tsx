export function AnimatedBackground() {
  return (
    <div className="absolute left-0 right-0 top-0 z-[-1] ml-auto mr-auto h-full max-h-[50rem] w-full max-w-[100rem] overflow-hidden blur-3xl">
      <div className="hero relative h-full bg-gradient-to-tl from-violet-400 via-blue-900 to-blue-900 opacity-70 dark:opacity-70"></div>
    </div>
  )
}
