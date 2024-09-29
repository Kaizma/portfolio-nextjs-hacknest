import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="flex gap-x-4 items-center flex-row mb-10">
        <Image
          src={"/pp.jpg"}
          alt="profile pic"
          width={100}
          height={100}
          className="rounded-full border-[2px] border-yellow-500 -ml-2 hover:grayscale transition-all duration-300"
        />
        <div>
          <p className="text-xl font-semibold">Kasun Hettiarachchi</p>
          <p className="text-lg text-gray-400">
            Software Engineering Undergraduate
          </p>
        </div>
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter ">
        Welcome to my blog! 👋
      </h1>
      <p className="mb-4">
        An ambitious Software Engineering undergraduate with a passion for
        Software Engineering, Data Engineering, and Data Science. Committed to
        developing skills and applying knowledge to real-world projects. Driven
        to create innovative solutions and contribute to high-impact
        initiatives. Eager to leverage cutting-edge technologies to develop
        software that exceeds industry standards.
      </p>
      <div className="my-8">
        <p className="text-gray-400 text-lg mb-2">From my blog</p>
        <BlogPosts />
      </div>
    </section>
  );
}
