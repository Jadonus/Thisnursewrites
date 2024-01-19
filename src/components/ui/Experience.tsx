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
      <p className="mt-12 ml-12 text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
        What I'm experienced in
      </p>
      <div className="flex flex-col text-xl mt-6 ml-12 md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 h-screen">
        <p>
          <HeartCrack size={50} />
          Chronic Diseases
        </p>
        <p>
          {" "}
          <Users size={50} /> Community Health
        </p>{" "}
        <p>
          {" "}
          <Home size={50} />
          Home Health Care
        </p>
        <p>
          <User size={50} /> Elder Care
        </p>
        <p>
          <Bed size={50} /> Palliative/End of life care
        </p>{" "}
        <p>
          {" "}
          <Lamp size={50} />
          Care Management
        </p>{" "}
        <p>
          <Stethoscope size={50} /> Nurse Management
        </p>
      </div>
      <p className="text-xl mt-6 ml-12 md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
        As a freelance nurse writer, I craft content that is informative,
        engaging, and tailored to the specific needs of each audience. Whether
        it's educational articles, blog posts, or medical content, I can provide
        valuable insights across a range of healthcare disciplines. Here are
        some examples of my experience:
      </p>
    </>
  );
}
