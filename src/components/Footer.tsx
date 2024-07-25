import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">MACHIAVELLI</div>
          </Link>
          <p>
            Sofia 1000, Bulgaria
          </p>
          <span className="font-semibold">contact@machiavelli-shoes.com</span>
          <span className="font-semibold">+359 88 240 7945</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:w-1/2 gap-7 lg:gap-0 lg:space-x-6">
          <div className="flex flex-col items-start">
            <h1 className="font-medium text-lg lg:mb-10">ЗА НАС</h1>
            <div className="flex flex-col gap-3 sm:gap-6 mt-4 sm:mt-0">
              <Link href="">За нас</Link>
              <Link href="">Контакти</Link>
              <Link href="">Често задавани въпроси</Link>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-medium text-lg lg:mb-10">ГРИЖА ЗА КЛИЕНТА</h1>
            <div className="flex flex-col gap-3 sm:gap-6 mt-4 sm:mt-0">
              <Link href="">Ръководство за размери</Link>
              <Link href="">Доставка</Link>
              <Link href="">Връщане и възстановяване на средства</Link>
            </div>
          </div>
          <div className="flex flex-col items-start ">
            <h1 className="font-medium text-lg lg:mb-4">LEGAL</h1>
            <div className="flex flex-col gap-3 sm:gap-6">
              <Link href=""></Link>
              <Link href="">Условия за ползване</Link>
              <Link href="">Политика за поверителност</Link>
              <Link href="">Политика за бисквитки</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
       
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Machiavelli</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Език</span>
            <span className="font-medium">Български | English</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;