import axios from "axios";

const getData = async (url: string) => {
  try {
    const res = await axios.get(url);
    const result = await res.data;
    return result;
  } catch (err) {
    if (axios.isCancel(err)) console.log("통신 취소");
    else console.log(err);
  }
};

export default getData;
