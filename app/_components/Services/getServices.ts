export const getServices = async () => {
    // const res = await fetch("http://localhost:3000/services/api/get-all");
    // const services = await res.json();
    // return services;
    let services = null;
    try {
        const res = await fetch("http://localhost:3000/services/api/get-all");
        if (!res.ok) {
            throw new Error("Failed to fetch services");
        }
        services = await res.json();
    } catch (error) {
        console.error("Failed to fetch services:", error);
        services = [];
    }
    return services;
};

export const getServiceDetails = async (id: string) => {
    // const res = await fetch(`http://localhost:3000/services/api/${id}`);
    // const service = await res.json();
    // return service;
    let service = null;
    try {
        const res = await fetch(`http://localhost:3000/services/api/${id}`);
        if (!res.ok) {
            throw new Error("Failed to fetch service");
        }
        service = await res.json();
    } catch (error) {
        console.error("Failed to fetch service:", error);
        service = {};
    }
    return service;
};