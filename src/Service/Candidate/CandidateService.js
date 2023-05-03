import ApiService from "../../API/route";


export const registerCandidate = async (data) => {
  try {
    const candidateService = new ApiService("candidate");
    const res = await candidateService.add(data);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const fetchAllCandidates = async () => {
  try {
    const candidateService = new ApiService("candidate/all");
    const res = await candidateService.getAll();
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
};



