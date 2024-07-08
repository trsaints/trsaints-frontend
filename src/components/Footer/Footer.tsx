import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='footer'>
            <article className='footer__content'>
                <h2 className='footer__title'>
                    thiago rodrigues santos - desenvolvedor <span lang='en'>front-end</span>
                </h2>

                <time className='footer__time' dateTime={currentYear.toString()}>
                    {currentYear}
                </time>

                <p className='footer__desc'>
                    feito por{' '}
                    <a
                        lang='en'
                        rel='noreferrer'
                        target='_blank'
                        href='https://github.com/trsaints'
                    >
                        @trsaints
                    </a>
                </p>
            </article>
        </footer>
    )
}

export {Footer}
