import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { AddReservation, Reservation } from "../interfaces/Reservation"
import { api } from "../service/api"

const fetchData = async(): Promise<Reservation[]> => {
    const response = await api.get<Reservation[]>("/reservations/user");
    return response.data;
}

export function useReservationData(){
    return useQuery({
        queryFn: fetchData,
        queryKey: ['reservations-data']
    })
}

const addReservation = async(data: AddReservation): Promise<Reservation> => {
    const response = await api.post<Reservation>("/reservations", data);
    return response.data;
}

export function useAddReservation(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addReservation,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['reservations-data']})
        }
    })
}

const deleteReservation = async(reservationId: number): Promise<void> => {
    await api.delete(`/reservations/${reservationId}`);
}

export function useDeleteReservation(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteReservation,

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['reservations-data']})
        }
    })
}