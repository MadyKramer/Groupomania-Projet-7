import axios from "axios";

export const getDatas = (setter, navigate) => {
    let token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_API_URL}api/posts/getAll`, config)

      .then((res) => {
        setter(res.data);
      })
      .catch(() => {
        navigate('/')
      })

      
}