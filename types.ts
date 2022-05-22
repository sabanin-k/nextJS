export type TUser = {
    id: number
    name: string
    username: string
    email: string
    address: TAddress
    phone: string
    website: string
    company: TCompany
}

export type TPost = {
    userId: number
    id: number
    title: string
    body: string
}

type TAddress = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: TGeo
}

type TGeo = {
    lat: string
    lng: string
}

type TCompany = {
    name: string
    catchPhrase: string
    bs: string
}