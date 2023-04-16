import { ReactNode } from 'react'
import '../globals.css'

interface Props {
    children: ReactNode
}

export const metadata = {
    title: 'Emilio Blanco | Full Stack Developer',
    description: 'Emilio Blanco es un desarrollador web full stack con más de 5 años de experiencia en el sector.',
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="es">
            <body>
                {children}
            </body>
        </html>
    )
}
