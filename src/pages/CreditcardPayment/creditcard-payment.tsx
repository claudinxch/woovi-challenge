import { useLocation } from "react-router-dom";
import { Layout } from "../../components/Layout/layout";
import type { Installment } from "../../data/installments";
import { DueDate } from "../../components/DueDate/due-date";
import { PaymentDetails } from "../../components/PaymentDetails/payment-details";
import { PaymentIdentifier } from "../../components/PaymentIdentifier/payment-identifier";
import { PaymentForm } from "../../components/PaymentForm/payment-form";

export function CreditCardPayment() {
    const location = useLocation();
    const installment = location.state.installment as Installment
    const date = new Date('2021-12-15T11:17:00.000Z')

    return (
        <div className="creditcard">
            <Layout instruction={`João, pague o restante em ${installment.times - 1}x no cartão`}>
                <div className="creditcard-content">

                    <PaymentForm />

                    <DueDate date={date} />

                    <PaymentDetails installment={installment}/>

                    <PaymentIdentifier id="2c1b951f356c4680b13ba1c9fc889c47" />
                </div>
            </Layout>
        </div>
    )
}