import {sql} from '@vercel/postgres';
import {unstable_noStore} from "next/cache";
import {Revenue} from "@/model/definition";

export const fetchRevenue = async () => {
    //to prevent the response from being cached
    unstable_noStore();
    try {
        const data = await sql<Revenue> `SELECT * FROM revenue`
        return data.rows;
    } catch (error) {
        console.log('Database Error', error);
        throw new Error('Failed to fetch revenue data.')
    }
}