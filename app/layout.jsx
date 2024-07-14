import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Script from 'next/script';

export const metadata = {
    title: 'Promptopia',
    description: 'discover & share AI prompt',
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <head>
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-EXEDCM9SCQ"/>
                <Script
                    id='google-analytics'
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-EXEDCM9SCQ');
                        `
                    }}
                />
            </head>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;