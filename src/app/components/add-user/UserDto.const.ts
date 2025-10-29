export interface UserDto {
assettype: string,
quantity: string,
price: number,
date?: string
}


export const defaultUser: UserDto =  {
    assettype: '',
    quantity: '',
    price: 0,
    date: ''
}