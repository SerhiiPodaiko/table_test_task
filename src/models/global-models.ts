export interface Schoolboy {
    Id: number | null
    FirstName: string | null
    SecondName: string | null
    LastName: string | null
}

export interface Schoolboys {
    Items: Schoolboy[]
    Quantity: number | null
}

export interface Column {
    Id: number | null
    Title: string | null
}

export interface Columns {
    Items: Column[]
    Quantity: number | null
}

export interface Rate {
    Id: number
    Title: string | null
    SchoolboyId: number | null
    ColumnId: number | null
}

export interface Rates {
    Items: Rate[]
    Quantity: number | null
}

export interface SetRatePayload {
    SchoolboyId: number | null
    ColumnId: number | null
    Title: string | null
}