import axios from 'axios';


// axios.defaults.baseURL = process.env.COMMENT_URL

export const CommentService = {
  async getById(id: string | string[] | undefined) {
    const { data } = await axios.get(`http://localhost:3004/comments/${id}/tree`)
    // console.log(data);
    
    return data
  }
}