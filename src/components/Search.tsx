import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Search() {
  const { keyword } = useParams();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/videos/${search}`);
    setSearch('');
  };

  useEffect(() => {
    setSearch(keyword || '');
  }, [keyword]);

  return (
    <header className='w-full flex p-4 border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center cursor-pointer'>
        <BsYoutube className='text-brand text-4xl ' />
        <h1 className='font-bold text-3xl ml-2'>YouTube</h1>
      </Link>
      <form
        className='w-full flex justify-center'
        onSubmit={e => handleSubmit(e)}
      >
        <input
          className='w-7/12 outline-none text-gray-50 bg-black p-2 '
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='검색...'
        />
        <button className='bg-zinc-600 p-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
