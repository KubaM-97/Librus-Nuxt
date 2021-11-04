import { SingleGrade } from './grade'
type Parent = {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
}
type Address = {
    streetName: string,
    streetNr: string,
    flatNr: string,
    postCode: string,
    city: string,
}
export interface Student {
    _id?: Object,
    firstName: string,
    lastName: string,
    pesel: string,
    phone: string,
    email: string,
    grades: SingleGrade[],
    address: Address,
    mother: Parent,
    father: Parent,
}