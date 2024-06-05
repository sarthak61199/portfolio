import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center font-base flex-1">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl text-center">
        Error 404 😔😔
      </h1>
      <Link href="/" className="underline" replace>
        Go Home
      </Link>
    </div>
  );
}
