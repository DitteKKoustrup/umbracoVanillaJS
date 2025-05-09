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

        console.log("log from api")
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching content:", error);
        return [];
    }
};