import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content="Website Undangan Pernikahan" />
      <meta name="keywords" content="BridesVow, Undangan, Menikah" />
      <meta name="author" content="Radifan Fariz" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>BridesVow - Error 404</title>
    </Head>
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
        <Link href="/">
          <a
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-[#03385d] rounded hover:bg-[#03385d] hover:bg-opacity-90 focus:outline-none focus:ring"
          >
            Go Back Home
          </a>
        </Link>
      </div>
    </div>
  </>
}
