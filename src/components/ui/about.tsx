import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col  h-screen justify-center m-12 md:flex-row">
      <div className=" md:w-1/2 ">
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
          About me
        </p>
        <p className="text-xl mt-6 md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
          I am a seasoned registered nurse with over 20 years of diverse
          experiences. I learned early on in my nursing career that my passion
          lay outside the confines of the hospital. The bulk of my nursing years
          were spent in home health and outpatient primary care doing care
          management. I love to share insights, knowledge, and experiences
          accumulated over years of dedicated service in the healthcare sector.
          I am excited about the prospect of contributing to the field through
          the written word and continuing to make a positive impact on the
          community.
        </p>
      </div>
      <div className=" order-first md:w-1/2">
        <Image
          height="500"
          className=" rounded-lg"
          src="/mom.png"
          alt="Hannah Gearhart"
          style={{
            aspectRatio: "500/700",
            objectFit: "cover",
            maxWidth: "100%",
          }}
          width="500"
        />
      </div>
    </div>
  );
}
