/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

type useFetchReturn = {
    status: number;
    data: any;
    error: any;
    loading: boolean;
};

export default function useFetch(url: string): useFetchReturn {
    const [status, setStatus] = useState<number>(0);
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getData = async (): Promise<void> => {
            setLoading(true);
            try {
                const response: Response = await fetch(url)                
                const json = await response.json();
                setStatus(response.status);
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return { data, loading, status, error };
}

/**
 * usage example:
 * const { data, loading, status } = useFetch(url);
 */
