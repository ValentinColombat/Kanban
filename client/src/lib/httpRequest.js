async function httpRequest(endpoint, body, method = 'GET') {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
}

export { httpRequest };
