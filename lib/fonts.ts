import localFont from 'next/font/local'

export const inter = localFont({
    src: '../public/fonts/inter-variable.ttf',
    weight: '100 200 300 400 500 600 700 800 900',
    display: 'swap',
    variable: '--font-inter',
})

export const saira = localFont({
    src: [
        {
            path: '../public/fonts/saira/saira-light.ttf',
            weight: '300',
            style: 'light',
        },
        {
            path: '../public/fonts/saira/saira-regular.ttf',
            weight: '400',
            style: 'regular',
        },
        {
            path: '../public/fonts/saira/saira-medium.ttf',
            weight: '500',
            style: 'medium',
        },
        {
            path: '../public/fonts/saira/saira-semibold.ttf',
            weight: '600',
            style: 'semibold',
        },
        {
            path: '../public/fonts/saira/saira-bold.ttf',
            weight: '700',
            style: 'bold',
        },
        {
            path: '../public/fonts/saira/saira-extrabold.ttf',
            weight: '800',
            style: 'extrabold',
        },
        {
            path: '../public/fonts/saira/saira-black.ttf',
            weight: '900',
            style: 'black',
        },
    ],
    variable: '--font-saira',
    display: 'swap',
})
