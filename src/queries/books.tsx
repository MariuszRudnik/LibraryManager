
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchBookById = async (id: string): Promise<any> => {
    const response = await fetch(`${BASE_URL}/books/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch book.');
    }
    return response.json();
};

export const fetchBooks = async (): Promise<any> => {
    const response = await fetch(`${BASE_URL}/books`);
    if (!response.ok) {
        throw new Error('Failed to fetch book.');
    }
    return response.json();
};