import Link from "next/link";

import Layout from "../components/Layout";

import "tailwindcss/tailwind.css";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js </h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <div className="bg-white shadow p-3 rounded lg:w-64">
      <div>
        <div className="bg-cover bg-center bg-gray-300 h-32 rounded"></div>
      </div>
      <div className="mt-6">
        <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">Title</p>
        <p className="text-sm text-gray-600 font-hairline">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="mt-6">
        <button className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Default
        </button>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
