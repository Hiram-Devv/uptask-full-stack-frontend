import { ProjectFormData } from "@/types/index";
import api from "@/lib/axios";
// formData es la información del formulario, data dentro del try es la forma en que trabaja axios
export async function createProject(formData: ProjectFormData) {
  try {
    const { data } = await api.post("/projects", formData);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
