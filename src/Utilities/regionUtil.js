import { REGION } from "../Constants/componentConstants"
/**
 * 
 * @param {*} name_of_region 
 * @return to get the name of the region the user passed in the input form
 */

export const filterRegionByName = (name_of_region) => {
    const [id] = REGION.filter((state) => {
        if (state.name === name_of_region) {
          return state.value;
        }  
        return null;
    })
    return id.value;
}