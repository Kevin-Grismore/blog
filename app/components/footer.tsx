import { SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="mt-auto flex w-full gap-3 sm:gap-5 z-50 px-4 py-8 justify-center"
        style={{
            backdropFilter: 'blur(8px)'
        }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{
                backgroundImage: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
                height: '1px',
                maxWidth: '600px',
                width: '100%'
            }}>
                
            </div>
            <a className='p-3 sm:p-4' target="_blank" href="https://github.com/kevingrismore" rel="noopener noreferrer">
                <SiGithub size="24" className="sm:w-[30px] sm:h-[30px]"/>
            </a>
            <a className='p-3 sm:p-4' target="_blank" href="https://linkedin.com/in/kevingrismore/" rel="noopener noreferrer">
                <FaLinkedin size="24" className="sm:w-[30px] sm:h-[30px]" />
            </a>
            <div className="p-3 sm:p-5 whitespace-nowrap text-sm sm:text-base">Made in 2026 with my brain.</div>
        </div>
    )
}