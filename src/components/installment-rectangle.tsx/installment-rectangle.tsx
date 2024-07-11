import { ComponentProps } from 'react'
import { formatCurrency } from '../../helpers/price'

import './installment-rectangle.css'
import { CheckboxButton } from '../CheckboxButton/checkbox-button'
import type { Installment } from '../../data/installments'

interface InstallmentProps extends ComponentProps<'div'> {
    installment: Installment
    lastInstallment?: number
    isChecked: boolean,
    handleCheck: () => void
}

export function InstallmentRectangle({ installment, lastInstallment, isChecked, handleCheck, ...props }: InstallmentProps) {
    const firstInstallment = installment.times === 1 ? true : false
    const secondInstallment = installment.times === 2 ? true : false
    const last = installment.times === lastInstallment

    return (
        <div {...props} className={`installment ${isChecked ? "checked" : ""} ${firstInstallment ? 'first' : secondInstallment ? 'second' : last ? 'last' : isChecked ? "checked" : "" }`}>
            <div className='content'>
                <div className='information'>
                    <p>{installment.times}x <span>{formatCurrency(installment.price)}</span></p>
                    {installment.times > 1 ? <p className='total'>Total: <span>{formatCurrency(installment.total)}</span></p> : <p className='cashback'>Ganhe <span>{installment.cashback}%</span> de Cashback</p>}
                </div>

                <div>
                    <CheckboxButton isChecked={isChecked} handleCheck={handleCheck}/>
                </div>
            </div>

            {installment.times === 1 &&
                <div className='banner'>
                    <p className='banner-text'>&#129297; {formatCurrency(300)} <span>de volta no seu Pix na hora</span></p>
                </div>}

            {installment.fee &&
                <div className='banner'>
                    <p className='banner-text'>{installment.fee} de juros: <span>Melhor opção de parcelamento</span></p>
                </div>}

            {installment.times === 1 && <div className='pix'>
                <p>Pix</p>
            </div>} {installment.times === 2 && <div className='pix'>
                <p>Pix Parcelado</p>
            </div>}
        </div>)
}