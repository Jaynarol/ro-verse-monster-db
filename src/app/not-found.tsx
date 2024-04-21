import Link from 'next/link'

export const metadata = {
  title: '404 - Not Found',
}

const NotFound = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-white lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Something's missing.
          </p>
          <p className="mb-10 text-lg font-light text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{' '}
          </p>
          <Link
            href="/"
            className="group h-3 w-40 rounded-md bg-purple-500 px-5 py-3 text-sm text-white shadow-sm hover:bg-purple-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
