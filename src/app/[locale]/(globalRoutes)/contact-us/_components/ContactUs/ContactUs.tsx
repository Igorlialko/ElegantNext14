'use client';

import s from '@/app/[locale]/(globalRoutes)/contact-us/_components/ContactUs/contactUs.module.scss';
import StoreIcon from '@/app/_icons/StoreIcon';
import CallingIcon from '@/app/_icons/CallingIcon';
import MailIcon from '@/app/_icons/MailIcon';
import React, { useEffect, useState } from 'react';

const contactMas = [
  {
    icon: <StoreIcon />,
    title: 'Address',
    text: '234 Hai Trieu, Ho Chi Minh City, Viet Nam',
  },
  {
    icon: <CallingIcon />,
    title: 'Contact Us',
    text: '+84 234 567 890',
  },
  {
    icon: <MailIcon />,
    title: 'Email',
    text: 'hello@3legant.com',
  },
];

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type TComments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
const ContactUs = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.json())
      .then((json: TPost[]) => {
        setPosts(json);
      });
  }, []);

  return (
    <section className={s.contactUs}>
      <div className='_container'>
        <h2 className={s.contactTitle}>Contact Us</h2>
        <div>
          <div>
            {posts.map((postOne) => {
              return <Post post={postOne} key={postOne.id} />;
            })}
          </div>
        </div>
        <div className={s.contactInformation}>
          {contactMas.map((cont) => (
            <div key={cont.title} className={s.contactNumber}>
              {cont.icon}
              <div className={s.contTitle}>{cont.title}</div>
              <div className={s.contactText}>{cont.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Post = ({ post }: { post: TPost }) => {
  const [comments, setComments] = useState<TComments[]>([]);
  const openComments = () => {
    if (!comments.length) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response) => response.json())
        .then((json) => {
          setComments(json);
        });
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 25, paddingTop: 15 }}>{post.title}</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              style={{ backgroundColor: 'green' }}
              onClick={() => {
                openComments();
                setIsOpen(true);
              }}
            >
              Open comments
            </button>
            <button
              style={{ backgroundColor: 'red' }}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Close comments
            </button>
          </div>
        </div>
        <p style={{ fontSize: 16, paddingTop: 10, color: 'grey' }}>{post.body}</p>
      </div>
      <div>
        {isOpen &&
          comments.map((com) => {
            return (
              <div key={com.id} style={{ color: 'blue' }}>
                {com.body}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ContactUs;
