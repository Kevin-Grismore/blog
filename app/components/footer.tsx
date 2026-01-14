import { SiGithub } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="fixed flex w-full gap-5 bottom-0 left-0 right-0 z-50 margin-auto px-4 justify-center"
        style={{
            backdropFilter: 'blur(8px)'
        }}
        >
            <div className="fixed top-0" style={{
                backgroundImage: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
                height: '1px',
                maxWidth: '600px',
                width: '100%'
            }}>
                
            </div>
            <a className='pa-4 pb-4 pr-2 pl-2' target="_blank" href="https://github.com/kevingrismore" rel="noopener noreferrer">
                <SiGithub size="30"/>
            </a>
            <a className='pa-4 pb-4 pr-2 pl-2' target="blank" href="https://linkedin.com/in/kevingrismore/" rel="nooopener noreferrer">
                <FaLinkedin size="30" />
            </a>
            <div className="pa-5 pb-5 pr-2 pl-2 whitespace-nowrap">Made in 2026 with my brain.</div>
        </div>
    )
}