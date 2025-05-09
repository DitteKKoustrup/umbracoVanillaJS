const apiUrl = import.meta.env.VITE_UMBRACO_API_URL;
const apiKey = import.meta.env.VITE_UMBRACO_API_KEY;


export async function fetchContent(contentId) {
    try {
        const response = await fetch(`${apiUrl}/content/item/${contentId}`, {
            method: "GET",
            headers: {
                'Api-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error("Error fetching content:", error);
        return [];
    }
};