import {
  Bed,
  HeartCrack,
  Home,
  Lamp,
  Stethoscope,
  User,
  Users,
} from "lucide-react";

export default function Experience() {
  return (
    <>
      <p className="mt-12 text-center ml-12 text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
        What I&#39;m experienced in
      </p>
      <div className="flex flex-col items-center justify-center text-xl mt-6 ml-12 md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 h-screen">
        <p className="flex m-6 items-center">
          <HeartCrack color="black" size={50} /> Chronic Diseases
        </p>
        <p className="flex m-6 items-center">
          <Users size={50} /> Community Health
        </p>
        <p className="flex m-6 items-center">
          <Home size={50} /> Home Health Care
        </p>
        <p className="flex m-6 items-center">
          <User size={50} /> Elder Care
        </p>
        <p className="flex m-6 items-center">
          <Bed size={50} /> Palliative/End of life care
        </p>
        <p className="flex m-6 items-center">
          <Lamp size={50} /> Care Management
        </p>
        <p className="flex m-6 items-center">
          <Stethoscope size={50} /> Nurse Management
        </p>
      </div>
      <hr className="m-24" />
      <p className="text-xl mt-6 ml-12 md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
        As a freelance nurse writer, I craft content that is informative,
        engaging, and tailored to the specific needs of each audience. Whether
        it&#39;s educational articles, blog posts, or medical content, I can
        provide valuable insights across a range of healthcare disciplines. Here
        are some examples of my experience:
      </p>
    </>
  );
}
