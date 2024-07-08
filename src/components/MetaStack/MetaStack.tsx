import {ComponentProps} from 'react'
import './MetaStack.css'

interface IMetaStack extends ComponentProps<'dl'> {
    stack: string
}

function MetaStack(props: IMetaStack) {
    const {stack} = props

    return (
        <dl className='meta'>
            <dt className='meta__key'>
                <span lang='en'>stack</span>
            </dt>

            <dd className='meta__value'>{stack}</dd>
        </dl>
    )
}

export {MetaStack}