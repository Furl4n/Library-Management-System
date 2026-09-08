import { api } from "../service/api";
import type { Book, AddBookData } from "../interfaces/Book";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

const fetchData = async(): Promise<Book[]> => {
    const response = await api.get<Book[]>("/books");
    return response.data;
}

export function useBookData(){
    return useQuery({
        queryFn: fetchData,
        queryKey: ['books-data']
    })
}

const addBook = async(data: AddBookData): Promise<Book> =>{
    const response = await api.post("/books", data);
    return response.data;
}

export function useAddBook(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addBook,

        onSuccess() {
            queryClient.invalidateQueries({queryKey: ['books-data'] });
        },
    });
}

const deleteBook = async(bookId: number): Promise<void> => {
    await api.delete(`/books/${bookId}`)
}

export function useDeleteBook(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteBook,

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['books-data']});
        }
    });
}