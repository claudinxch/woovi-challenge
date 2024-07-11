import './payment-identifier.css'

interface PaymentIdentifier {
    id: string
}

export function PaymentIdentifier({id}: PaymentIdentifier) {
    return (
        <div className='identifier'>
            <p>Identificador:</p>
            <span>{id}</span>
        </div>
    )
}