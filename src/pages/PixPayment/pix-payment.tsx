import { Layout } from "../../components/Layout/layout";
import { DueDate } from "../../components/DueDate/due-date";
import { QRCode } from "../../components/QRCode/qrcode";
import { Installment } from "../../data/installments";
import { formatCurrency } from "../../helpers/price";
import { useLocation } from "react-router-dom";
import './pix-payment.css'
import { PaymentIdentifier } from "../../components/PaymentIdentifier/payment-identifier";
import { PaymentDetails } from "../../components/PaymentDetails/payment-details";

export function PixPayment() {
    const location = useLocation();
    const installment = location.state.installment as Installment
    const date = new Date('2021-12-15T11:17:00.000Z')
    // const steps: Entry[] = []

    // for(let i = 1; i <= installment.times; i++){
    //     if(i === 1){
    //         steps.push({
    //             entry: `${i}º entrada no Pix`,
    //             price: installment.price
    //         })
    //     } else if(i > 1){
    //         steps.push({
    //             entry: `${i}º no cartão`,
    //             price: installment.price
    //     })
    //    }
    // }

    return (
        <div className="pix creditcard">
            <Layout instruction={`João, pague a entrada de ${formatCurrency(installment.price)} pelo Pix`}>
                <div className="pix-content">
                    <QRCode installment={installment} />

                    <DueDate date={date} />

                    {/* was it supposed to be an accordion or not? aaa */}
                    <PaymentDetails installment={installment} />
                </div>

                <PaymentIdentifier id="2c1b951f356c4680b13ba1c9fc889c47" />
            </Layout>
        </div>
    )
}