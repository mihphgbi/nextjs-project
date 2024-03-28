import {createAppSlice} from "@/lib/createAppSlice";
import {fetchListCustomer} from "@/lib/features/customers/customer-api";

export interface CustomerSlice {
    id: string;
    name: string;
    mail: string;
}

const initialState: CustomerSlice = {
    id: "",
    name: "",
    mail: ""
}

export const customerSlice = createAppSlice({
    name: 'customer',
    initialState,
    reducers: (create) => ({
        getListCustomer: create.asyncThunk(
            async () => {
                const res = await fetchListCustomer();
                return res;
            },
            {
                pending: state => {
                },
                fulfilled: state => {
                },
                rejected: state => {
                }
            }
        )
    }),
    }
)
export const {getListCustomer} = customerSlice.actions;
