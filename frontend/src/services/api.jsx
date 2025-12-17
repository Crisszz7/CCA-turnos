const apiUrl = `${import.meta.env.VITE_API_URL}`;

export const getModules = async ()=> {
    try {
        const response = await fetch(`${apiUrl}/modules/`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        return data.data;

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }

}

export default getModules;

