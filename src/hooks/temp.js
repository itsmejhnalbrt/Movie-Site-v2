const API_BASE_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export function useApi() {
//  const dispatch = useDispatch()
//  const { token, isLoggedIn } = useSelector((state: any) => state.auth)

// headers = {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: `Bearer ${API_KEY}`,
// }

    const request = async (
        method,
        url,
        body,
        params = "",
        headers) => { 
        try {
            const finalHeaders = {
                Accept: "application/json",
                ...headers,
            };

            // if (isLoggedIn && token) {
            //     finalHeaders.Authorization = `Bearer ${token}`
            // }

            if (body && !finalHeaders['Content-Type']) {
                finalHeaders['Content-Type'] = 'application/json'
            }

            const response = await fetch(
                `${API_BASE_URL}/${url}${params ? `?${params}` : ""}`,
                {
                    method: method,
                    headers: { ...finalHeaders },
                    body: body ? JSON.stringify(body) : undefined,
                },
            );

            if (!response.ok) {
                const errorData = await response.json()
                throw errorData
            }

            return await response.json();
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const get = (url, params = '') =>
        request('GET', API_BASE_URL, `${url}${params ? `?${params}` : ''}`)

    const post = (url, body = {}) =>
        request('POST', API_BASE_URL, url, body)

    return { get, post }
}

