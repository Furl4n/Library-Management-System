import { api } from "../service/api"
import type { AddLoan, Loan } from "../interfaces/Loan"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const fetchData = async(): Promise<Loan[]> => {
    const response = await api.get<Loan[]>("/loans/user");
    return response.data;
}

export function useLoanData(){
    return useQuery({
        queryFn: fetchData,
        queryKey: ['loans-data']
    })
}

const addLoan = async(data: AddLoan): Promise<Loan> =>{
    const response = await api.post<Loan>("/loans", data);
    return response.data;
}

export function useAddLoan(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addLoan,

        onSuccess() {
            queryClient.invalidateQueries({queryKey: ['loans-data'] })
        },
    })
}

const deleteLoan = async(loanId: number): Promise<void> => {
    await api.delete(`/loans/${loanId}`);
}

export function useDeleteLoan(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteLoan,

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['loans-data']})
        }
    })
}