export interface Id {
    id:string
}

export interface info {
    id: string,
    name: string
}

export interface currentUser {
    name: string
    avatar: string
    details: details
}

export interface details {
    city: string
    company: string
    position: string
}