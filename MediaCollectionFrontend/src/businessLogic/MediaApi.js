//TODO - add better error handling
const baseMediaURL = 'https://localhost:7148/Media';

const checkResponse = async (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    if (response.status !== 204 && response.headers.get('Content-Type')?.includes('application/json')) {
        return await response.json();
    }
    return null;
};

export const fetchMediaData = async () => {
    try {
        const response = await fetch(baseMediaURL);
        return await checkResponse(response);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const insertMedia = async (mediaName, mediaAuthor, mediaDescription) => {
    try {
        const response = await fetch(baseMediaURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mediaName, mediaAuthor, mediaDescription }),
        });
        return await checkResponse(response);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export async function updateMedia(id, mediaName, mediaAuthor, mediaDescription) {
    try {
        const response = await fetch(baseMediaURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, mediaName, mediaAuthor, mediaDescription }),
        });
        return await checkResponse(response);
    } catch (error) {
        console.error('Error updating media:', error);
        throw error;
    }
}

// export const updateMedia = async (id, updatedData) => { ... };
// export const deleteMedia = async (id) => { ... };
