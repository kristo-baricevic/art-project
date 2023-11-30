'use client' 

import Image from 'next/image'
import React, { useState } from 'react';

interface ImageContainerProps {
  src: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ src }) => (
  <div className="py-2 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src={src}
      alt="abstract art"
      width={180}
      height={180}
      priority
    />
  </div>
);

const AnimatedImageContainer: React.FC<ImageContainerProps & { selected: boolean }> = ({ src, selected }) => (
  
  <div
    className={`py-2 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] ${selected ? 'animate-slide-in' : ''}`}
  >
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src={src}
      alt="abstract art"
      width={180}
      height={180}
      priority
    />
  </div>
);

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };


  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>What&apos;s up!</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ImageContainer src="/abstract1.png" />
        <ImageContainer src="/abstract2.png" />
        <ImageContainer src="/circles.png" />
        <ImageContainer src="/circless.png" />
        <ImageContainer src="/cray.png" />
        <ImageContainer src="/dippindots.png" />
        <ImageContainer src="/download.png" />
        <ImageContainer src="/funk.png" />
        <ImageContainer src="/o.png" />
      </div>

    
        {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
            <AnimatedImageContainer src={selectedImage} selected={true} />
        </div>
        )}
    </main>
  )
}
