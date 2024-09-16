export interface User {
    address?: {
        geolocation?: {
            lat?: number;
            long?: number;
        },
        city: string;
        street: string;
        number: number;
        zipcode: any;
    },
    id?: number;
    email: string;
    username?: string;
    password?: string;
    name: {
        firstname: string;
        lastname: string;
    },
    phone: any;
}