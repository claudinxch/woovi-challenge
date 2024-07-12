import { useState } from 'react';
import './qrcode.css'
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { Installment } from '../../data/installments';

interface SnackbarProps {
    open: boolean
    vertical: 'top' | 'bottom'
    horizontal: 'left' | 'center' | 'right';
}

interface QRCodeProps {
    installment: Installment
}

export function QRCode({ installment }: QRCodeProps) {
    const [openSnackbar, setOpenSnackbar] = useState<SnackbarProps>({
        open: false,
        vertical: "top",
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = openSnackbar;
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const navigate = useNavigate()
    const [isCopied, setIsCopied] = useState(false)

    // Since i don't have the code of the qrcode, i will just copy the image alt
    const handleCopy = (installment: Installment) => {
        const qrCode = document.querySelector<HTMLImageElement>('.image img')
        if (qrCode) {
            const altText = qrCode.getAttribute('alt');
            if (altText) {
                navigator.clipboard.writeText(altText)
                setIsCopied(true)
                setSnackbarMessage('Código copiado com sucesso!')
                setOpenSnackbar({ ...openSnackbar, open: true })

                setTimeout(() => {
                    setSnackbarMessage('Pagamento efetuado com sucesso!')
                    setOpenSnackbar({ ...openSnackbar, open: true })

                    if(installment.times > 1) {
                        setTimeout(() => {
                            navigate("/creditcard-payment", { state: { installment: installment } })
                        }, 2000) //3000
                    }

                }, 1000) //5000
            }
        }
    }

    const handleClose = () => {
        setOpenSnackbar({ ...openSnackbar, open: false })
    }

    return (
        <div className="qrcode">
            <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <div className="image">
                <img src="qrcode.png" alt="Qr Code" width={332} height={332} />
            </div>

            <button onClick={() => handleCopy(installment)}> {/* disabled={isCopied} */}
                {/* <span>{isCopied ? 'Copiado' : 'Clique para copiar QR CODE'}</span>
                {isCopied ? <CheckCircleOutlineIcon sx={{ color: '#FFF', marginLeft: '10px' }} /> : <img src="copy.svg" alt="copy icon" />} */}

                Clique para copiar QR CODE
                <img src="copy.svg" alt="copy icon" />
            </button>
        </div>
    )
}