import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        ul: ({ children }) => (
            <ul className="list-disc list-inside ml-4 my-4 space-y-2">
                {children}
            </ul>
        ),
        li: ({ children }) => (
            <li className="var(--color-primary) leading-relaxed">
                {children}
            </li>
        ),
        // Add 'ol' if you use numbered lists as well
        ol: ({ children }) => (
            <ol className="list-decimal list-inside ml-4 my-4 space-y-2">
                {children}
            </ol>
        ),
    }
}