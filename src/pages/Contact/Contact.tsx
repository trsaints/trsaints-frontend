import {faCircleQuestion, faEnvelope, faMessage, faPaperPlane, faUser,} from '@fortawesome/free-solid-svg-icons'

import {FormField} from '../../components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Contact.css'

function Header() {
    return (
        <header className='contact__header'>
            <h2 className='contact__title'>contato</h2>

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

                <FormField icon={faUser}
                           iconPosition='prefix'
                           placeholder='thiago'
                           inputType='text'
                           label='nome'
                           id='name'/>

                <FormField icon={faEnvelope}
                           iconPosition='prefix'
                           placeholder='endereco@dominio'
                           inputType='email'
                           label='e-mail'
                           id='email'/>

                <FormField icon={faCircleQuestion}
                           iconPosition='prefix'
                           placeholder='Assunto'
                           inputType='text'
                           label='Assunto'
                           id='subject'/>

                <FormField icon={faMessage}
                           iconPosition='prefix'
                           placeholder='Mensagem'
                           label='Mensagem'
                           id='message'/>
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
        <aside className='contact' id='contact'>
            <Header/>
            <Form/>
        </aside>
    )
}

export {Contact}