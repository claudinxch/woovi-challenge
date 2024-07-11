import { useState } from 'react';
import './qrcode.css'

export function QRCode() {
    const [isCopied, setIsCopied] = useState(false)

    // Since i don't have the code of the qrcode, i will just copy the image alt
    const handleCopy = () => {
        const qrCode = document.querySelector<HTMLImageElement>('.image img')
        if (qrCode) {
            const altText = qrCode.getAttribute('alt');
            if(altText){
                navigator.clipboard.writeText(altText)
                setIsCopied(true)
            }
        }
    }

    return (
        <div className="qrcode">
            <div className="image">
                <img src="qrcode.png" alt="Qr Code"  width={332} height={332} />
            </div>

            <button onClick={handleCopy}> {/* disabled={isCopied} */} 
                <span>{isCopied ? 'Copiado' : 'Clique para copiar QR CODE'}</span>
                {!isCopied && <img src="copy.svg" alt="copy icon" />}
            </button>
        </div>
    )
}