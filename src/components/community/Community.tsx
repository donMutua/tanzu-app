import { CameraIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Male from "../../../public/images/ayo.jpg";

export function Community() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The opportunities{" "}
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Image
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={Male}
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    Photo by{" "}
                    <a href="https://unsplash.com/@armedshutter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                      Ayo Ogunseinde
                    </a>{" "}
                    on{" "}
                    <a href="https://unsplash.com/photos/Nm70URdtf3c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                      Unsplash
                    </a>
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <h2 className="text-base mt-6 mb-4 text-fuchsia-600 font-semibold tracking-wide uppercase">
                Community
              </h2>
              <p className="text-lg text-gray-500">
                Tanzu is a community where everyone thrives. Our goal is to
                combine forces to enable the youth to become great tech leaders.
                The building blocks of success are Learning, Apprenticeship and
                mentorship.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <h2 className="text-base mt-6 mb-4 text-fuchsia-600 font-semibold tracking-wide uppercase">
                Events
              </h2>
              <p className="text-lg text-gray-500">
                What better way to learn and get inspired by people who have
                been there before you? With Events from industry leaders, the
                ability to learn and see the possibilities is unmatched.
              </p>

              <h2 className="text-base mt-6 mb-4 text-fuchsia-600 font-semibold tracking-wide uppercase">
                Mentoring
              </h2>

              <p className="text-lg text-gray-500">
                One of the most important aspects of succeeding is having
                mentors. We aspire to offer mentorship to succeed in your career
                development or building your own startup.
              </p>

              <h2 className="text-base mt-6 mb-4 text-fuchsia-600 font-semibold tracking-wide uppercase">
                Connections
              </h2>

              <p className="text-lg text-gray-500">
                Tanzu community will enable you to create long-term connections.
                Get advice, validate ideas and create great relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
