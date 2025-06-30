import Link from "next/link";
import Image from "next/image";
import versionNumber from "../../package.json"

const Footer = () => {
  const commitHash = process.env.GIT_COMMIT_HASH;

  return (
    <footer className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 dark:bg-dark-but-not-that-dark antialiased">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 py-3 md:mb-0">
            <div className="flex items-center">
              <Image width={32} height={64} src="https://storage.googleapis.com/assets.hyperfoundation.xyz/hyperion-foundation-logo-512.png" className="mr-3 h-8" alt="Hyperion Foundation Logo" />
              <span className="self-center text-xl antialiased whitespace-nowrap">Hyperion Foundation</span>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 - {new Date().getFullYear()} <Link href="https://www.hyperfoundation.my.id" target="_blank" className="hover:underline">Hyperion Foundation</Link>. All rights reserved.</span>
          <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
            <Link href={`https://github.com/hyperion-foundation/cdn/commit/${commitHash}`} target="_blank" className="hover:underline">
              v{versionNumber.version} &mdash; {commitHash}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
