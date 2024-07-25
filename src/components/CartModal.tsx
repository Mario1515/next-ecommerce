"use client";
import Image from "next/image";

const CartModal = () => {
  const cartItems = false;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        //LIST OF ITEMS
        <>
        <h2 className="text-xl">КОШНИЦА</h2>
        <div className="flex flex-col gap-8">
          {/* ITEMS */}
        <div className="flex gap-4">
          <Image
            src="https://images.pexels.com/photos/27108021/pexels-photo-27108021/free-photo-of-a-building-with-a-red-and-white-clock-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* TOP */}
            <div>
            {/* TITLE */}
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-semibold">Product Name</h3>
              <div className="p-1 bg-gray-50 rounded-sm">BGN 49</div>
            </div>
            {/* DESC */}
              <div className="text-sm text-gray-500">
                available
              </div>
            </div>
            {/* BOTTOM */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Qty. 2</span>
              <span className="text-blue-500">Remove</span>
            </div>
          </div>
          </div>
        </div>
        
        {/*CART FOOTER */}
        <div>
          <div className="flex items-center justify-between font-semibold">
            <span className="">Subtotal</span>
            <span className="">BGN 49</span>
          </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">ВИЖ КОШНИЦА</button>
              <button className="rounded-md py-3 px-4 bg-black text-white">КУПИ СЕГА</button>
            </div>
        </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
