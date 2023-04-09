import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import AllTheHis from "./allTheHis";

const Home: NextPage = () => {
  const { data: getAll, error, isLoading } = api.sayhi.getAll.useQuery();
  console.log("🚀 ~ file: index.tsx:9 ~ getAll:", getAll);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#d7f0b8] to-[#8b8bac]">
        <div className="mx-auto w-full text-black lg:max-w-7xl">
          <div className="items-left flex justify-between py-9">
            <h1 className="text-3xl font-bold tracking-tight sm:text-left sm:text-3xl">
              All the Hi(s)
            </h1>
            <div>
              <Link
                className="inline-block rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                href="/addHi"
              >
                Say Hi
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <AllTheHis data={getAll} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;