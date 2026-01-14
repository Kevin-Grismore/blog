import { Layout } from 'nextra-theme-blog';
import { karla, spectral } from './fonts';
import './globals.css';
import type { ReactNode } from 'react';
import { Navbar } from './components/Navbar';
import { getPageMap } from 'nextra/page-map';
import Footer from './components/footer';

export const metadata = {
  title: 'Kevin Grismore',
  description: 'A personal blog about my work experiences and goals.'
}

export default async function RootLayout({
  children
}: {
  children: ReactNode,
}) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" suppressHydrationWarning className={`${karla.variable} ${spectral.variable}`}>
      <body className="flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col">
          <Layout>
            <Navbar pageMap={pageMap}/>
            {children}
          </Layout>
        </div>
        <Footer/>
      </body>
    </html>
  )
}