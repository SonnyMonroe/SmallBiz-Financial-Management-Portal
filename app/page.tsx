import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { kreon } from '@/app/ui/fonts';
import Image from 'next/image';

// import styles from '@/app/ui/home.module.css';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* <div className="flex h-20 shrink-0 items-end rounded-lg bg-stone-200 p-4 md:h-52">
        {<AcmeLogo />}
      </div> */}
      <div className="flex pt-4 justify-center items-end rounded-lg">
        {/* {<img src={'./opengraph-image.png'} alt="The Boston Block" />} */}
        <Image
          src="/opengraph-image.png"
          width={1000}
          height={760}
          className="hidden md:block rounded-lg shadow-2xl"
          alt="The Boston Block Banner"
        />
        <Image
          src="/opengraph-image.png"
          width={560}
          height={620}
          className="block md:hidden rounded-lg shadow-2xl"
          alt="The Boston Block Banner"
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${kreon.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to The Boston Block.</strong> Newsletter {' '}
            <a href="https://nextjs.org/learn/" className="text-rose-700">
              Financial Dashboard
            </a>
            , brought to you by <i className="bold text-rose-700"> The Boston Block.</i>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-rose-700 md:text-base"
          >
            <span className={`${kreon.className} text-md text-white md:text-md md:leading-normal`}
            >Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* <Image
            src="/opengraph-image.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="The Boston Block Banner"
          />
          <Image
            src="/opengraph-image.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="The Boston Block Banner"
          /> */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
