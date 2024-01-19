import dayjs from 'dayjs';

export const dateFormatBlog = (date: string) => dayjs(date).format('MMMM D, YYYY');
