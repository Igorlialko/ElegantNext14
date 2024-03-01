'use client';

// import ContactTitle from '@/app/[locale]/(globalRoutes)/contact-us/_components/ContactTitle/ContactTitle';
// import AboutUs from '@/app/[locale]/(globalRoutes)/contact-us/_components/AboutUs/AboutUs';
// import ContactUs from '@/app/[locale]/(globalRoutes)/contact-us/_components/ContactUs/ContactUs';
// import Advantages from '@/app/[locale]/(globalRoutes)/_components/Advantages/Advantages';
// import s from './page.module.scss';
// import Form from '@/app/[locale]/(globalRoutes)/contact-us/_components/Form/Form';
import { FormEvent, useEffect, useState } from 'react';
import TextInput from '@/commonUI/fields/TextInput/TextInput';
import Button from '@/commonUI/Button/Button';

export interface IGetUsers {
  success: boolean;
  total_pages: number;
  total_users: number;
  count: number;
  page: number;
  links: ILinks;
  users: IUser[];
}

export interface ILinks {
  next_url: string;
  prev_url: any;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
  photo: string;
}

//var formData = new FormData(); // file from input type='file' var fileField = document.querySelector('input[type="file"]'); formData.append('position_id', 2); formData.append('name', 'Jhon'); formData.append('email', 'Jhon@gmail.com'); formData.append('phone', '+380955388485'); formData.append('photo', fileField.files[0]);
//fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
// { method: 'POST', body: formData, headers: { 'Token': token, // get token with GET api/v1/token method }, }) .then(function(response) { return response.json(); }) .then(function(data) { console.log(data); if(data.success) { // process success response } else { // proccess server errors } }) .catch(function(error) { // proccess network errors });

export default function ContactUsPage() {
  const [users, setUsers] = useState<IUser[]>();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=10'
      );
      const usersData = (await response.json()) as IGetUsers;
      setUsers(usersData.users);
    })();
  }, []);

  const [fieldName, setFieldName] = useState('');
  const [fieldEmail, setFieldEmail] = useState('');
  const [fieldPhone, setFieldPhone] = useState('');
  const [fieldImage, setFieldImage] = useState<null | File>(null);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    photo: '',
  });

  async function createUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();
    const Errors = { ...errors };
    if (fieldName.length >= 2 && fieldName.length <= 60) {
      formData.append('name', fieldName);
      Errors.name = '';
    } else {
      Errors.name = 'Username should contain 2-60 characters';
    }

    const emailRegExp = fieldEmail.match(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/
    );
    if (fieldEmail.length >= 2 && fieldEmail.length <= 100 && emailRegExp) {
      formData.append('email', fieldEmail);
      Errors.email = '';
    } else {
      Errors.email = 'User email, must be a valid email according to RFC2822';
    }

    const phoneRegExp = fieldPhone.match(/^[\+]{0,1}380([0-9]{9})$/);
    if (phoneRegExp) {
      formData.append('phone', fieldPhone);
      Errors.phone = '';
    } else {
      Errors.phone = 'User phone number. Number should start with code of Ukraine +380';
    }
    console.log(fieldImage);

    // Promise.resolve()
    //   .then(() => {
    //     if (fieldImage) {
    //       const allowedTypes = ['image/jpeg', 'image/jpg'];
    //       const reader = new FileReader();
    //       reader.readAsDataURL(fieldImage);
    //       reader.onload = (e) => {
    //         const image = new Image();
    //         image.src = e.target?.result as string;
    //         image.onload = () => {
    //           const { height, width } = image;
    //           console.log('h-', height);
    //           console.log('w-', width);
    //           if (
    //             fieldImage.size / 1024 < 5120 &&
    //             allowedTypes.includes(fieldImage.type) &&
    //             height >= 70 &&
    //             width >= 70 &&
    //             height === width
    //           ) {
    //             fieldImage && formData.append('photo', fieldImage);
    //             Errors.photo = '';
    //           } else {
    //             Errors.photo =
    //               'Minimum size of photo 70x70px and photo must be equilateral. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb.';
    //           }
    //           console.log(Errors.photo);
    //         };
    //       };
    //     } else {
    //       Errors.photo = 'Is required field!';
    //     }
    //   })
    if (fieldImage) {
      const allowedTypes = ['image/jpeg', 'image/jpg'];
      const reader = new FileReader();
      reader.readAsDataURL(fieldImage);
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target?.result as string;
        image.onload = () => {
          const { height, width } = image;
          console.log('h-', height);
          console.log('w-', width);
          if (
            fieldImage.size / 1024 < 5120 &&
            allowedTypes.includes(fieldImage.type) &&
            height >= 70 &&
            width >= 70 &&
            height === width
          ) {
            fieldImage && formData.append('photo', fieldImage);
            Errors.photo = '';
          } else {
            Errors.photo =
              'Minimum size of photo 70x70px and photo must be equilateral. The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb.';
          }
          console.log(Errors.photo);
        };
      };
    } else {
      Errors.photo = 'Is required field!';
    }
    setErrors(Errors);

    if (Errors.name || Errors.email || Errors.phone || Errors.photo) {
      return;
    }

    const token = (
      await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token').then((res) =>
        res.json()
      )
    ).token;

    const positionId = (
      await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions').then((res) =>
        res.json()
      )
    ).positions[0].id;

    formData.append('position_id', positionId);

    await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      headers: { Token: token },
      body: formData,
    });
  }

  return (
    <main>
      <div>
        {users?.map((user) => {
          return (
            <div key={user.id} style={{ display: 'flex' }}>
              <img src={user.photo} alt={user.name} />
              <div>
                <p>{user.name}</p>
                <p>{user.phone}</p>
                <p>{user.email}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/*<ContactTitle />*/}
      {/*<AboutUs />*/}
      {/*<ContactUs />*/}
      {/*<Form />*/}
      {/*<Advantages className={s.advantages} />*/}
      <form onSubmit={createUser}>
        <TextInput onChange={(e) => setFieldName(e.target.value)} value={fieldName} />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <TextInput onChange={(e) => setFieldEmail(e.target.value)} value={fieldEmail} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <TextInput onChange={(e) => setFieldPhone(e.target.value)} value={fieldPhone} />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        <input type='file' onChange={(e) => setFieldImage(e.target.files?.[0] || null)} />
        {errors.photo && <p style={{ color: 'red' }}>{errors.photo}</p>}
        <Button typeButton={'submit'}>Create user</Button>
      </form>
    </main>
  );
}
