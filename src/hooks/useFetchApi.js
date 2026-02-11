const API_BASE_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export function useApi() {
//  const dispatch = useDispatch()
//  const { token, isLoggedIn } = useSelector((state: any) => state.auth)

    const get = async (
        url,
        params = ""
    ) => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/${url}${params ? `?${params}` : ""}`,
                {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${API_KEY}`,
                    },
                },
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "GET Request failed"); 
            }

            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const post = async (
        url,
        params = "",
        body = {},
    ) => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/${url}${params ? `?${params}` : ""}`,
                {
                    method: 'POST',
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${API_KEY}`,
                    },
                    body: JSON.stringify(body)
                },
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "POST Request failed"); 
            }

            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return { get, post }
}

