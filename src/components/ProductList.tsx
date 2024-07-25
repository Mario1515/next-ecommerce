import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
        <Image
          src="https://ingiliz.bg/cdn/shop/files/21056-01-02_8-2.png?v=1716366452&width=800"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />
        <Image
          src="https://ingiliz.bg/cdn/shop/files/21056-01-02_21-2.png?v=1716366453&width=800"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">BGN 49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-redski text-redski w-max py-2 px-4 text-xs hover:bg-redski hover:text-white">Купи Сега</button>
      </Link>
    </div>
  );
};

export default ProductList;
