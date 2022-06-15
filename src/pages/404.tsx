import { Container } from '@/components/Container'
import { Nav } from '@/components/Nav'

export default function Page() {
  return (
    <Container>
      <Nav />

      <div className='pt-32 md:pt-56'>
        <div className='flex flex-col text-center items-center px-4 sm:px-6'>
          <h1 className='font-bold mb-2 text-xl md:text-3xl'>
            404 - Page not found
          </h1>
          <h2 className='font-medium md:text-xl text-slate-500'>
            We couldn&apos;t find the page you are looking for.
          </h2>
        </div>
      </div>
    </Container>
  )
}
