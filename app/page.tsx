import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center  p-24 justify-center lg:justify-start">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm  lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-700 bg-gradient-to-b  pb-6 pt-8 backdrop-blur-2xl  bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          Happy Hump Day &nbsp;
          <code className="font-mono font-bold">Sope Teams 🎉</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t   from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none sm:hidden lg:block transition-all">
          <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            <Image
              src="/sopelogo.png"
              alt="Sope Logo"
              className="invert"
              width={120}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="w-full flex  max-w-5xl sm:justify-center lg:justify-start">
        <Link
          href="https://wheelofnames.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl font-semibold mt-14 group rounded-lg border  px-5 py-4 transition-colors bg-gray-100 border-neutral-700 bg-neutral-800/30`}
        >
          Spin the Wheel 🎡
        </Link>
      </div>

      <div className="min-h-full flex items-center">
        <div className=" grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href="https://www.theage.com.au/topic/quizzes-1qx"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              The Age{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Superquiz and Target Time! Test your knowledge and skill.
            </p>
          </Link>

          <Link
            href="https://www.nytimes.com/games/wordle/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Wordle{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Wordle. Get 6 chances to guess a 5-letter word.
            </p>
          </Link>

          <a
            href="https://worldle.teuteuf.fr/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold inline`}>Wor </h2>
            <h2 className={`mb-3 text-2xl font-semibold inline text-lime-500`}>
              l{' '}
            </h2>
            <h2 className={`mb-3 text-2xl font-semibold inline`}>
              dle
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 mt-3`}>
              Wordle game. in the World. A daily game - guess the country based
              on the map image!
            </p>
          </a>

          <a
            href="https://www.geoguessr.com/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              GeoGuessr
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              GeoGuessr is a geography game which takes you on a journey around
              the world
            </p>
          </a>

          <a
            href="https://emovi.teuteuf.fr/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              E-movie{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Emovi: Guess a movie with emoji!
            </p>
          </a>

          <a
            href="https://framed.wtf/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Framed{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Guess the movie from 6 frames.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
