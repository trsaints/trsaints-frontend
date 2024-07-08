import {IMetaDeploy} from './IMetaDeploy'
import './MetaDeploy.css'

function MetaDeploy(props: IMetaDeploy) {
    const {deployUrl} = props
    const hasDeploy   = deployUrl !== undefined

    return hasDeploy && (
        <dl className='meta'>
            <dt className='meta__key'>deploy</dt>

            <dd className='meta__value'>{deployUrl}</dd>
        </dl>
    )
}

export {MetaDeploy}