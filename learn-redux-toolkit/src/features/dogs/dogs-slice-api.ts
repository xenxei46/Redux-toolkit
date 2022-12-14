import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = 'live_fMq4y0KDdrWjlI2HL8UTWHvwN5SMRwWYCMRpPjX5QrLZUfQrk1iA1CsygxrpsOw5';

interface Breed {
    id: string;
    name: string;
    image: {
        url: string;
    }
}


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers){
            headers.set('x-api-key', DOGS_API_KEY)

            return headers;
        }
    }),
    endpoints(builder){
        return {
            fetchBreeds: builder.query<Breed[], number|void>({
                query(_limit = 10){
                    return `/breeds?limit=${_limit}`
                }
            })
        }
    }
})

export const { useFetchBreedsQuery } = apiSlice;

// const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://api.thedogapi.com/v1',
//         prepareHeaders(headers) {
//             headers.set('x-api-key', DOGS_API_KEY);

//             return Headers;
//         }
//     }),
//     endpoints(builder) {
//         return {
//             'fetchBreeds': builder.query<Breed[], number|void>({
                
//             })
//         }      
//     },
// })