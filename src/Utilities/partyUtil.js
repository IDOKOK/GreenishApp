import { PARTIES } from "../Constants/componentConstants";
/**
 *
 * @param {*} name_of_party
 * @return to get the name of the party the candidate passed in the input form
 */

export const filterPartyByName = (name_of_party) => {
  const [id] = PARTIES.filter((party) => {
    if (party.name === name_of_party) {
      return party.value;
    }
    return null;
  });
  return id.value;
};
