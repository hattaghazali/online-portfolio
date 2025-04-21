import Link from 'next/link';
import Image from 'next/image';

import img_person from '@/../public/imgs/img_person.webp';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center gap-x-2'>
            <Image alt='Avatar' src={img_person} height={40} width={40} />
            <span className='text-tertiary font-dmsans text-2xl font-medium -tracking-[1.8px]'>
                Hatta
            </span>
        </Link>
    );
};
export default Logo;
