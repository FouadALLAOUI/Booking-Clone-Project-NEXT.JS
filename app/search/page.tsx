'use client'
import { useState } from 'react';
import { useEffect } from 'react';

function SearchPage() {
  // State to keep track of cube rotation
  const [rotation, setRotation] = useState(0);

  // Function to handle cube rotation
  const handleRotation = () => {
    setRotation(rotation + 90); // Rotate by 90 degrees on each click
  };

  // Effect to update rotation when rotation state changes
  useEffect(() => {
    const cube = document.querySelector('.cube');
    cube.style.transform = `rotateY(${rotation}deg)`;
  }, [rotation]);

  return (
    <div className="container">
      <div className={`cube`} style={{ 
        width: '200px',
        height: '200px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s',
      }}>
        <div className={`face front`} style={{ 
          position: 'absolute',
          width: '200px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '4em',
          color: 'white',
          backgroundColor: '#333',
          transform: 'translateZ(100px)',
        }}>Book</div>
        <div className={`face back`} style={{ 
          position: 'absolute',
          width: '200px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '4em',
          color: 'white',
          backgroundColor: '#333',
          transform: 'rotateY(180deg) translateZ(100px)',
        }}>B</div>
        <div className={`face right`} style={{ 
          position: 'absolute',
          width: '200px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '4em',
          color: 'white',
          backgroundColor: '#333',
          transform: 'rotateY(90deg) translateZ(100px)',
        }}>B</div>
        <div className={`face left`} style={{ 
          position: 'absolute',
          width: '200px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '4em',
          color: 'white',
          backgroundColor: '#333',
          transform: 'rotateY(-90deg) translateZ(100px)',
        }}>B</div>
        <div className={`face top`} style={{ 
          position: 'absolute',
          width: '200px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '4em',
          color: 'white',
          backgroundColor: '#333',
          transform: 'rotateX(90deg) translateZ(100px)',
        }}>B</div>
        <div className={`face bottom`} style={{ 
          position: 'absolute',
          width: '200px',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '4em',
          color: 'white',
          backgroundColor: '#333',
          transform: 'rotateX(-90deg) translateZ(100px)',
        }}>B</div>
      </div>
      <button type='button' className="border-red-500" onClick={handleRotation}>Rotate</button>
    </div>
  );
}

export default SearchPage;




/**
 * import { notFound } from "next/navigation";

type Props = {
    serachParams: SearchParams;
};

type SerachParams = {
    url: URL;
    group_adults: string;
    group_children: string;
    no_rooms: string;
    checkin: string;
    checkout: string;
};


function SearchPage({searchParams}: Props) {
    console.log(searchParams);
    if(!searchParams.url) return notFound();

    const results = await fetchResults(searchParams);

    if(!results) return <div>No results...</div>

  return (
    <div>
        <h1>Hello</h1>
      
    </div>
  )
}

export default SearchPage;

 */