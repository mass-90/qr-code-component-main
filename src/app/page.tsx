import Image from "next/image";



export default function Home() {
  return (
    <main className="font-sans bg-[#D5E1EF] flex items-center justify-center min-h-screen">
      <div className="bg-white w-full max-w-[320px] p-4 rounded-[20px] shadow-md">
        <Image 
          src="/qr-code.png" 
          alt="QR code" 
          width={300} 
          height={300} 
          className="w-full rounded-xl" 
        />
        <div className="text-center mt-6 px-2 space-y-4">
          <h1 className="text-[20px] sm:text-[22px] font-bold text-[#1F314F] leading-tight">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#7D889E] leading-relaxed">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}

