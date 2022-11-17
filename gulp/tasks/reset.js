// для проверки и удаления ненужных файлов
import {deleteAsync} from "del"
export const reset = () => {
    return deleteAsync(['dist'])
}