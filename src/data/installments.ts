export interface Installment {
    times: number
    price: number
    total: number
    cashback?: number
    cashbackTotal?: number
    fee?: number
}

export const installments: Installment[] = [
    {
        times: 1,
        price: 30500,
        total: 30500,
        cashback: 3,
        cashbackTotal: 300
    },
    {
        times: 2,
        price: 15300,
        total: 30600
    },
    {
        times: 3,
        price: 10196.66,
        total: 30620
    },
    {
        times: 4,
        price: 7725,
        total: 30900,
        fee: -3
    },
    {
        times: 5,
        price: 6300,
        total: 31500
    },
    {
        times: 6,
        price: 5283.33,
        total: 31699.98
    },
    {
        times: 7,
        price: 4542.85,
        total: 31800
    }
]