type Nullable<T> = T | null;
export type SingleGrade = {
    score: Nullable<number>,
    weight: Nullable<number>,
    description: string,
    date: string
}