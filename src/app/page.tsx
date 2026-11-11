export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24 sm:px-8">
      <div className="w-full max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          Bonjour, je suis
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl dark:text-neutral-50">
          Mamadou Gueye
        </h1>

        <h2 className="mt-3 text-lg text-neutral-600 sm:text-2xl dark:text-neutral-300">
          Ingénieur en informatique industrielle
        </h2>

        <div className="mt-8 h-px w-16 bg-neutral-300 dark:bg-neutral-700" />

        <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
          Passionné d’informatique, je conçois des solutions logicielles au
          service des systèmes industriels. Je suis actuellement en montée en
          compétences vers l’architecture logicielle, pour concevoir des
          systèmes plus robustes, évolutifs et faciles à maintenir.
        </p>
      </div>
    </main>
  );
}
