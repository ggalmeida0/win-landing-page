import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        {/* This is a badge with a CTA, uncomment when it becomes useful */}
        {/* <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Try Convo for Free
          </p>
        </div> */}

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          <span className="text-blue-600">Personalized</span> Meal Plans for
          Balanced Nutrition and Convenience
        </h1>

        <p className="mt-5 max-w-prose text-lg text-zinc-700 sm:text-2xl">
          Create customized meal plans with a focus on specific dietary needs
          and calorie goals, ensuring a balance of nutrition and taste
        </p>
        <div className="m-10 flex flex-col">
          <Input className="outline outline-1" placeholder="Enter email" />
          <Link
            className={cn(
              buttonVariants({
                size: "lg",
                className: "mt-5",
              }),
              "text-lg",
            )}
            href={"/dashboard"}
          >
            Join the Waitlist
          </Link>
        </div>
      </MaxWidthWrapper>

      {/* Value Prop */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>

          <div className="flex justify-center">
            {["create-meal.svg", "dashboard.svg", "cooking.svg"].map(
              (imageName: string) => (
                <div>
                  <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
                    <div className="mt-8 flow-root sm:mt-16">
                      <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                        <Image
                          src={imageName}
                          alt="product preview"
                          width={300}
                          height={600}
                          quality={100}
                          className="rounded-md bg-special p-2 shadow-2xl ring-1 ring-gray-900/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#0a95ff] to-[#95f2fa] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <MaxWidthWrapper>
        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-20 sm:mt-40 sm:gap-40 ">
          {/* Intro */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Launch Your Tailored Nutrition Plan Instantly
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Achieve your health and fitness goals with ease, starting now.
                </p>
              </div>
            </div>
            {/* steps */}

            <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 1
                  </span>
                  <span className="text-xl font-semibold">
                    Customize Your Meal Criteria
                  </span>
                  {/* I can add links to words later if I want, like it was in the original */}
                  <span className="mt-2 text-zinc-700">
                    Choose your desired balance of proteins, carbs, and fats for
                    each meal.
                  </span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 2
                  </span>
                  <span className="text-xl font-semibold">
                    Get Your Personalized Plan
                  </span>
                  <span className="mt-2 text-zinc-700">
                    Access your bespoke meal plan complete with a categorized
                    shopping list.
                  </span>
                </div>
              </li>
              <li className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-blue-600">
                    Step 3
                  </span>
                  <span className="text-xl font-semibold">
                    Customize to Your Contentment
                  </span>
                  <span className="mt-2 text-zinc-700">
                    Easily regenerate any part of your meal plan until it's the
                    perfect fit for your palate.
                  </span>
                </div>
              </li>
            </ol>
          </div>

          {/* Scenarios */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Savor the Variety, Simplify Your Life, and Meet Your Goals
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Embrace the ease and excitement of personalized meal planning.
                </p>
              </div>
            </div>
            {/* steps */}

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Endless Culinary Exploration</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Forget about repetitive, dull meals. Our dynamic meal
                    planner ensures every dish is a new adventure tailored to
                    your taste.
                  </CardDescription>
                  <Image
                    src="/plate1.svg"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Reclaim Your Time</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Leave the hassle of meal planning to us. Gain back hours
                    each week with a meal plan that's ready when you are.
                  </CardDescription>
                  <Image
                    src="/time.svg"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Nutritionally Crafted for You</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Your meals fit within your macro goals and dietary needs, so
                    you can stay focused on your objectives without compromise.
                  </CardDescription>
                  <Image
                    src="/kitchen.svg"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>
              </div>
            </div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mt-4 text-lg text-gray-600">and many more...</p>
              </div>
            </div>
          </div>

          {/* Powered By */}
          {/* <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Powered by
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  These are the technologies behind the scene that make Convo
                  possible
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Whisper AI</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Speech to text
                  </CardDescription>
                  <Image
                    src="/mic.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>GPT 4</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Comprehensive prompts and responses
                  </CardDescription>
                  <Image
                    src="/openai.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>WebSpeech</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Text to speech
                  </CardDescription>
                  <Image
                    src="/speaker.webp"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                    className="rounded-xl"
                  />
                </Card>
              </div>
            </div>
          </div> */}

          {/* Feedback */}
          {/* <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Feedback
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  What are people saying about Convo
                </p>
              </div>
            </div>

            <div>
              <div className="mx-auto flex max-w-6xl justify-center px-6 lg:px-8">
                <div className="flow-root">
                  <div className="-m-2 w-fit rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:-m-4 lg:rounded-2xl lg:p-4">
                    <Image
                      width={2556}
                      height={1436}
                      quality={100}
                      src="/tweet_collage.png"
                      alt="Header image"
                      className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 md:p-8"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div> */}
        </div>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
