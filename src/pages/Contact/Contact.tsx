import {faCircleQuestion, faEnvelope, faMessage, faPaperPlane, faUser,} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Contact.css'

function Root({children}) {
    return (
        <aside className='contact' id='contact'>
            {children}
        </aside>
    )
}

function Header() {
    return (
        <header className='contact__header'>
            <h2 className='contact__title' >contato</h2>

            <p className='contact__desc'>
                Precisa falar comigo? <br/> Mande uma mensagem que, em breve, entrarei
                em contato <span aria-hidden>{':)'}</span>
            </p>
        </header>
    )
}

function Form() {
    return (
        <form className='form window-frame' action=''>
            <fieldset className='form__fieldset'>
                <legend className='form__legend'>informações básicas</legend>

                <div className='form__field'>
                    <label className='form__label' htmlFor='name'>
                        <FontAwesomeIcon className='prefix-icon' icon={faUser}/>
                        nome
                    </label>

                    <input
                        className='form__input'
                        type='text'
                        placeholder='thiago'
                        id='name'
                    />
                </div>

                <div className='form__field'>
                    <label className='form__label' htmlFor='email'>
                        <FontAwesomeIcon className='prefix-icon' icon={faEnvelope}/>

                        <span lang='en'>e-mail</span>
                    </label>

                    <input
                        className='form__input'
                        type='email'
                        placeholder='endereco@dominio'
                        id='email'
                    />
                </div>

                <div className='form__field'>
                    <label className='form__label' htmlFor='subject'>
                        <FontAwesomeIcon className='prefix-icon' icon={faCircleQuestion}/>
                        assunto
                    </label>

                    <input className='form__input' type='text' id='subject'/>
                </div>

                <div className='form__field--textarea'>
                    <label className='form__label' htmlFor='message'>
                        <FontAwesomeIcon className='prefix-icon' icon={faMessage}/>
                        mensagem
                    </label>

                    <textarea
                        className='form__textarea'
                        placeholder='Mensagem'
                        id='message'
                    ></textarea>
                </div>
            </fieldset>

            <button className='form__submit link-btn' type='submit'>
                Enviar
                <FontAwesomeIcon className='suffix-icon' icon={faPaperPlane}/>
            </button>
        </form>
    )
}

function Contact() {
    return (
        <Root>
            <Header/>
            <Form/>
        </Root>
    )
}

export {Contact}