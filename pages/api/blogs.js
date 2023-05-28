import axios from "axios";

export default async function handler(req, res) {
  const axiosInstance = axios.create({
    timeout: 10000,
  });
  try {
    const blogRes = await axiosInstance.get(
      `https://qqtech-server.quadque.digital/api/manage-blogs`
    );
    console.log("blogRes.data", blogRes.data);
    console.log("blogRes?.data", blogRes?.data?.data);

    // if (blogRes?.data?.status === 200) {
    //   return {
    //     props: { blogs: blogRes?.data?.data },
    //   };
    // }
  } catch (error) {
    console.log(error);
    // return {
    //   props: { blogs: [] },
    // };
  }
  res.status(200).json({ name: "John Doe" });
}
