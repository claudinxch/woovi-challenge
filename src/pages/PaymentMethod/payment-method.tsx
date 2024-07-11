import { InstallmentRectangle } from '../../components/installment-rectangle.tsx/installment-rectangle'
import './payment-method.css'
import { type Installment, installments } from '../../data/installments'
import { useState } from 'react'
import { Container } from '../../components/Container/container';
import { useNavigate } from "react-router-dom";

export function PaymentMethod(){
    const [checkedInstallment, setCheckedInstallment] = useState(0);
    const navigate = useNavigate()

    const handleCheck = (installment: Installment) => {
        setCheckedInstallment(installment.times);
        setTimeout(() => {
            navigate("/pix-payment", { state: { installment: installment } })         
        }, 300)
        console.log("Navigating with installment:", installment);
    };

    return (
    <div className="payment-method">
         <Container instruction='João, como você quer pagar?'>
            <div className='installments'>
                <div className='first-installment'>
                    <InstallmentRectangle 
                    key={installments[0].times} 
                    installment={installments[0]} 
                    isChecked={checkedInstallment === installments[0].times} 
                    handleCheck={() => handleCheck(installments[0])} /> 
                </div>

                <div className='remaining'>
                    {installments.slice(1).map(installment => 
                        <InstallmentRectangle 
                        key={installment.times} 
                        installment={installment} 
                        lastInstallment={installments[installments.length - 1].times} 
                        isChecked={checkedInstallment === installment.times} 
                        handleCheck={() => handleCheck(installment)}/>)}
                </div>
            </div>

        </Container>
    </div>
    )
}