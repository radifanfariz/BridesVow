import Link from "next/link";

export default function Custom500() {
    return <>
    <h1>500 - Bad Gateway</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
    </>
  }
