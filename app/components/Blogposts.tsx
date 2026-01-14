import { normalizePages } from 'nextra/normalize-pages'
import { getPageMap } from 'nextra/page-map'
import Link from 'next/link';
import Image from 'next/image';
 
export default async function Blogposts() {
  const posts = await getPosts()
 
  return (
    <div data-pagefind-ignore="all" className="gap-5 px-4 w-full" style={{
      maxWidth: '800px',
      justifySelf: 'center',
      justifyContent: 'center',
    }}>
        {posts.map(post => (
          <div key={post.name} className="blogpostcard overflow-hidden max-w-full">
            <Link href={post.route}>
            <div className="w-full aspect-video relative overflow-hidden">
              <Image 
                src={post.frontMatter.image} 
                alt={post.frontMatter.imagealt} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <div className='text-2xl pl-5 pr-5 pt-5' style={{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}>{post.title}</div>
            <div className='text-sm pl-5 pb-5' style={{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}>{post.frontMatter.date}</div>
            <div className='pl-5 pr-5 pt-3 pb-3 overflow-hidden border-t' style={{
               backgroundColor: 'rgba(0, 0, 0, 0.1)',
               borderColor: 'rgba(255, 255, 255, 0.2)',
            }}>{post.frontMatter.description}</div>
            </Link>
          </div>
      ))}
    </div>
  )
}

async function getPosts() {
  const { directories } = normalizePages({
    list: await getPageMap('/blog'),
    route: '/blog'
  })
  return directories
    .filter(post => post.name !== 'index')
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime())
}