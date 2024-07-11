import './due-date.css'

interface DueDateProps {
    date: Date
}

export function DueDate({ date }: DueDateProps) {

    const formatDate = (date: Date): string => {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const hour = date.getHours()
        const minutes = date.getMinutes()

        const formattedDay = day.toString().padStart(2, '0');
        const formattedMonth = month.toString().padStart(2, '0');
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minutes.toString().padStart(2, '0');

        return `${formattedDay}/${formattedMonth}/${year} - ${formattedHour}:${formattedMinute}`
    }
    return (
        <div className="due-to">
            <p className="due">Prazo de Pagamento:</p>
            <span>{formatDate(date)}</span>
        </div>
    )
}