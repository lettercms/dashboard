'use client';

import {ChangeEvent, FormEvent, FormEventHandler, useState} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/input';
import Button from '@/components/button';
import {signIn} from 'next-auth/react';
import Image from 'next/image';

function CTA() {
  return <div className=''>
    <span>
      Don&quot;t you have an account yet?
    </span>
    <Link href='/signin'>
      Register
    </Link>
  </div>;
}

export default function Login() {
  const [isLoad, setIsLoad] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  
  const login = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (!email || !password) {
        alert('Insert data');
        return 
      }

      setIsLoad(true);

      const user = await signIn('credentials', {
        redirect: false,
        email,
        password
      });

      if (user?.ok)
        router.push('/dashboard');
      else if (!user?.error)
        alert('Invalid account');
      else
        alert('Invalid account');
    } catch (err) {
      alert('Error on login');

      throw err;
    } finally {
      setIsLoad(false);
    }
  };

  return <div className='relative h-screen w-full'>
    <div className='absolute z-20 flex items-center justify-center h-full w-full'>
      <div className='flex flex-col items-center md:w-1/2'>
        <div className='relative h-8 w-full mb-8'>
          <Image
            layout='fill'
            src='/assets/lettercms-logo-linear.png'
            alt='LetterCMS Logo White'
            objectFit='contain'
          />
        </div>
        <div className='rounded-xl border border-main-400 flex flex-col items-center p-8 bg-white'>
          <form
            onSubmit={e => {
              login(e);
            }}
            >
            <Input
              className='mb-4'
              disabled={isLoad}
              value={email}
              id='email'
              type='email'
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                const {value} = e.target;

                setEmail(value)
              }}
              label='Email'
            />
            <Input
              className='mb-4'
              disabled={isLoad}
              value={password}
              id='password'
              type="password"
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                const {value} = e.target;
                
                setPassword(value)
              }}
              label='Password'
              />
            <Link href='#' className='text-main-500 text-sm hover:underline'>¿Olvidaste tu contraseña?</Link>
            <Button
              isLoading={isLoad}
              className='bg-main-500 text-white w-full mt-4'
              >
              Log In
            </Button>
          </form>
          <hr className='my-4 border-main-400 w-full'/>
          <Button
            className='border border-main-500 text-main-500 w-full'
          >
            Sign In With Google
          </Button>
          <div className='flex items-center mt-4'>
            <span>{`Don't have account?`}</span>
            <Link href='#' className='text-main-500 ml-1 hover:underline'>Sign up</Link>
          </div>
        </div>
      </div>
      <div className='relative flex flex-col items-center justify-between md:py-36 md:h-screen md:w-1/2'>
        <div className='relative flex-grow w-full'>
          <Image
            layout='fill'
            src='/illustrations/27.svg'
            alt='LetterCMS Logo White'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
    <div className='absolute left-0 bottom-0 w-full'>
      <div className='absolute top-0 left-0 z-10 w-full h-1 bg-white'></div>
      <svg className="w-full bg-main-500 scale-y-100 -scale-x-100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 310">
        <path fill='#fff' d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z"/>
      </svg>
    </div>
  </div>;
}

//#5f4dee
