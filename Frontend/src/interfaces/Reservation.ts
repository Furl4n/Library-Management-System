import type { Book } from "./Book"

export interface Reservation{
    id: number,
    book: Book,
    reservationDate: string,
    expirationDate: string,
    status: string
}

export interface AddReservation{
    bookId: number,
    reservationDate: string,
    expirationDate: string,
    status: string
}