export async function apiGet<T>(url: string): Promise<T> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json() as Promise<T>;
    } catch (err) {
        throw new Error("Network error");
    }
}
