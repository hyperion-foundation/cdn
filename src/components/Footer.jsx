import Image from 'next/image'
import Link from 'next/link'
import versionNumber from '../../package.json'
import HyperionFoundationLogo512 from '../../public/img/hyperion-foundation-logo-512.png'

export function Footer() {
  return (
    <footer className='p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 dark:bg-dark-but-not-that-dark antialiased'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='md:flex md:justify-between'>
            <div className='mb-6 py-3 md:mb-0'>
                <Link href='/' className='flex items-center'>
                    <Image width={32} height={64} src={HyperionFoundationLogo512} className='mr-3 h-8' alt='Hyperion Foundation Logo' />
                    <span className='self-center text-xl antialiased whitespace-nowrap dark:text-white'>Hyperion Foundation</span>
                </Link>
            </div>
        </div>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-xs text-gray-500 sm:text-center dark:text-gray-400'>&copy; 2023 - {new Date().getFullYear()} <Link href='https://www.hyperfoundation.xyz' className='hover:underline'>Hyperion Foundation</Link>. All rights reserved.</span>
          <span className='text-xs text-gray-500 sm:text-center dark:text-gray-400'><Link href='https://github.com/hyperion-foundation/cdn' className='hover:underline'>v{versionNumber.version}</Link></span>
        </div>
      </div>
    </footer>
  )
}