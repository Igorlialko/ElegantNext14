import { TBlog } from '@/modules/blog/types';
import { axiosInstance } from '@/api';
import { AxiosResponse } from 'axios';

export const getBlogs = async (
  page = 1,
  limit = 9
): Promise<AxiosResponse<{ total: number; limit: number; page: number; results: TBlog[] }>> =>
  await axiosInstance.get(`/blogs`, {
    params: {
      page,
      limit,
    },
  });

export const getBlogFromSlug = async (slug: string): Promise<AxiosResponse<TBlog>> =>
  await axiosInstance.get(`/blogs/${slug}`);

// export const getBlogs = async (page = 1, limit = 9): Promise<TBlog[]> => {
//   try {
//     const res = await fetch(`${process.env.SERVER_URL}/blogs?page=${page}&limit=${limit}`);
//     if (res.ok) {
//       return await res.json();
//     }
//     console.log('Some SimpleSnackbar in  get blogs');
//     return [];
//   } catch (e) {
//     console.log('Some SimpleSnackbar in  get blogs');
//     return [];
//   }
// };
//
// export const getBlogFromSlug = async (slug: string): Promise<TBlog | null> => {
//   try {
//     const res = await fetch(`${process.env.SERVER_URL}/blogs/${slug}`);
//     if (res.ok) {
//       return await res.json();
//     }
//     console.log('Some SimpleSnackbar in  get blogs');
//     return null;
//   } catch (e) {
//     console.log('Some SimpleSnackbar in  get blogs');
//     return null;
//   }
// };
