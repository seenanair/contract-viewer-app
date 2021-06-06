import { useEffect, useState } from 'react';

//Custom hook for fetch
export const useFetch = (apiUrl: string) => {
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(undefined);
    useEffect(() => {
        setLoading(true);
        try {
            fetch(apiUrl)
                .then((res) => {
                    if (!res.ok) throw Error(res.statusText);
                    return res.json()
                })
                .then((data) => {
                    setData(data);
                    setLoading(false);
                }).catch(error => {
                    setError(error);
                    setLoading(false);
                });
        } catch (err) {
            setError(err);
            setLoading(false);
        }
       
    }, [apiUrl]);

    return { data, loading, error };
};


