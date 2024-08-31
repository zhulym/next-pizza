import React from 'react';
import { cn } from '@/lib/utils';

import Container from './container';
import Image from 'next/image';

interface IProps {
    className?: string;
};

const Header = ({ className }: IProps) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div>
                    <Image src='/logo.png' alt='logo' width={35} height={35} />
                </div>
            </Container>

        </header>
    )
};

export default Header;
