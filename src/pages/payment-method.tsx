import { Header } from '../components/Header/header'
import { InstallmentRectangle } from '../components/installment-rectangle.tsx/installment-rectangle'
import './payment-method.css'
import { Installment, installments } from '../data/installments'
import { Footer } from '../components/Footer/footer'
import { useState } from 'react'

export function PaymentMethod(){
    const [checkedInstallment, setCheckedInstallment] = useState(0);
    
    const handleCheck = (installment: Installment) => {
        setCheckedInstallment(installment.times);
    };

    return (
    <div className="payment-method">
        <div className='container'>
            <Header />

            <div className='installments'>
                <div className='first-installment'>
                    <InstallmentRectangle key={installments[0].times} installment={installments[0]} isChecked={checkedInstallment === installments[0].times} handleCheck={() => handleCheck(installments[0])} /> 
                </div>
                <div className='remaining'>
                    {installments.slice(1).map(installment => <InstallmentRectangle key={installment.times} installment={installment} lastInstallment={installments[installments.length - 1].times} isChecked={checkedInstallment === installment.times} handleCheck={() => handleCheck(installment)}/>)}
                </div>
            </div>

            <Footer />
        </div>
    </div>
    )
}