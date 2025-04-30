"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
import Image from 'next/image';

interface CardProps {
    title: string;
    description: string;
    imagePath?: string;
    nextRoute?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imagePath, nextRoute }) => {
    const router = useRouter();

    const handleClick = () => {
        if (nextRoute) {
            router.push(nextRoute);
        }
    };

    return (
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col text-center p-6 h-full">
            {imagePath && (
                <Image
                    src={imagePath}
                    alt={title}
                    className="w-full h-auto max-h-80 object-cover rounded-lg mb-4"
                />
            )}
            <div className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-6">{description}</p>
                <div className="mt-auto">
                    <Button size="l" onClick={handleClick}>
                        {title}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
