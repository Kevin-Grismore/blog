import { Karla, Spectral } from 'next/font/google'

export const karla = Karla({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-karla',
});

export const spectral = Spectral({
    weight: "400",
    display: 'swap',
    variable: '--font-spectral',
});