import { httpAxios } from "@/helper/httpHelper";

export async function form(formData) {
    try {
        const result = await httpAxios.post("/api/contact", formData)
        .then((response) => response.data);
        return result;
    } catch (error) {
        console.log(error);
    }
}