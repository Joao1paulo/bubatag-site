import Image from "next/image";

export default function Header() {
  return (
    <section
      className="relative flex h-[85vh] w-full items-center justify-center bg-cover bg-center  p-10"
      style={{ backgroundImage: "url('/imgs/header.png')" }}
    >

      <div className="relative w-full h-100 md:w-full md:h-70">
        <Image
          src="/imgs/header-texto.svg"
          alt="Texto de destaque do header"
          fill
          className="object-contain"
          priority
        />
      </div>

    </section>
  );
}
