import { PropsWithChildren } from 'react';
import {FaSpinner} from 'react-icons/fa';

interface ButtonProps extends PropsWithChildren {
  isLoading?: boolean
  className?: string
  disabled?: boolean
}

export default function Button({isLoading, className = '', disabled, children, ...props}: ButtonProps) {
  let _className = `inline-block rounded-full pointer transition-all duration-300 ease px-8 py-3 ${className}`;

  return <button className={_className} disabled={disabled || isLoading} {...props}>
    {
      isLoading
        ? <FaSpinner className='animate-spin w-8 h-8 relative m-auto'/>
        : children
    }
  </button>;
}
      /*<Image layout='fill'
        src={`${process.env.ASSETS_BASE}/assets/spinner-black.svg`}
        alt='Spinner'
        style={{
          display: 'block', height: '2.75rem', margin: '15px auto', animation: 'rotation linear 1s infinite',
        }}
      />*/