// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import CustomLogo from './BostonBlockLogo2.png';
import Banner from './TheBostonBlockNewsLetter.png'
import { fondamento } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${fondamento.className} flex flex-row items-center leading-none text-white `}
    >
      <Image src={CustomLogo} alt="Boston Block Logo" className="bg-cover bg-no-repeat hidden md:block" />
      <Image src={Banner} alt="Boston Block BAnner" className="bg-cover bg-no-repeat block md:hidden" />

      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      {/* <p className="text-[24px]">News Letter</p> */}
    </div>
  );
}

