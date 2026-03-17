import { GithubIcon } from '@/components/icons/Icons'
import { saira } from '@/lib/fonts'
import { montserrat } from '@/lib/google-fonts'
import Link from 'next/link'

export default function Home() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 flex items-center justify-center px-6">
            <div className="max-w-3xl w-full space-y-10">
                {/* Header */}
                <div className="space-y-4">
                    <h1
                        className={`text-4xl sm:text-5xl font-bold tracking-tight ${montserrat.className}`}
                    >
                        Next.js Boilerplate
                    </h1>

                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-light">
                        A clean and scalable starter for building modern web applications with
                        Next.js. Pre-configured with best practices, optimized structure, and
                        developer-friendly tooling.
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-5">
                        <h3 className="font-semibold text-lg">⚡ Next.js App Router</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
                            Modern routing system with layouts, server components, and streaming
                            support.
                        </p>
                    </div>

                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-5">
                        <h3 className="font-semibold text-lg">🎨 Tailwind CSS</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
                            Utility-first styling for fast and consistent UI development.
                        </p>
                    </div>

                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-5">
                        <h3 className={`font-black text-lg ${saira.className}`}>
                            📁 Scalable Structure
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
                            Feature-based architecture designed for large production apps.
                        </p>
                    </div>

                    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-5">
                        <h3 className="font-black text-lg">🚀 Production Ready</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
                            ESLint, TypeScript, optimized fonts, and modern best practices.
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">
                    <Link
                        href="https://nextjs.org/docs"
                        className="px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium"
                    >
                        Documentation
                    </Link>

                    <Link
                        href="https://github.com"
                        className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 font-medium flex gap-2 items-center"
                    >
                        <GithubIcon className="w-5 h-5 mr-2 hover:text-6xl fill-white hover:fill-red-500" />{' '}
                        GitHub Repo
                    </Link>
                </div>

                {/* Footer */}
                <p className="text-sm text-zinc-500 dark:text-zinc-500 pt-10 border-t border-zinc-200 dark:border-zinc-800">
                    Built with Next.js, TypeScript and Tailwind CSS.
                </p>
            </div>
        </main>
    )
}
