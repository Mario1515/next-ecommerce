import Image from "next/image";
import Link from "next/link";

const CollectionList = () => {
  return (
    <div className="px-4 overflow-x-scroll">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://ingiliz.bg/cdn/shop/files/22017-01-12_1-2_a813cd21-2bd9-483a-b932-daea881178f7.png?v=1709717089&width=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide"></h1>
        </Link>
      </div>
    </div>
  );
};

export default CollectionList;
