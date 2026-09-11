"use client";
import React, { useState } from 'react'

const Page = () => {
  const [name, setName] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!name.trim()) {
      setError('Please enter name');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/certificate', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data);
      } else {
        setError(data.message || 'Certificate not found.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-20 transition-colors'>
      <div className='w-full max-w-lg'>

        {/* Form Card */}
        <div className='bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 sm:p-10'>
          <div className='text-center mb-8'>
            <div className='mx-auto mb-4 h-14 w-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center'>
              <svg className='h-7 w-7 text-blue-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' />
              </svg>
            </div>
            <h1 className='text-2xl font-bold text-zinc-950'>
              Get Your Certificate
            </h1>
            <p className='mt-1 text-sm text-zinc-500'>
              Enter your details to fetch your certificate (If certificates not getting fetched then try writing your name starting with upper case ex: John Doe)
            </p>
          </div>

          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-zinc-700 mb-1.5'>
                Full Name
              </label>
              <input
                id='name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='John Doe'
                className='w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors shadow-2xs'
              />
            </div>

            {error && (
              <p className='text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2'>
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className='w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2.5 transition-colors shadow-sm cursor-pointer'
            >
              {loading ? (
                <>
                  <svg className='animate-spin h-4 w-4' viewBox='0 0 24 24' fill='none'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
                  </svg>
                  Fetching...
                </>
              ) : (
                'Fetch Certificate'
              )}
            </button>
          </div>
        </div>

        {/* Result Card */}
        {result && (
          <div className='mt-6 bg-white rounded-2xl shadow-sm border border-zinc-200 p-8'>
            <div className='mb-6 text-center'>
              <h2 className='text-xl font-bold text-zinc-950'>{result.name}</h2>
            </div>

            {/* Certificate */}
            <div className='mb-6'>
              <div className='w-full rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center overflow-hidden min-h-[220px]'>
                {result.certificate ? (
                  <img
                    src={result.certificate}
                    alt='Certificate'
                    className='w-full h-full object-contain'
                  />
                ) : (
                  <p className='text-sm text-zinc-400 px-4 py-10 text-center'>
                    Certificate not generated yet
                  </p>
                )}
              </div>
              {result.certificate && (
                <a
                  href={result.certificate}
                  download={`${result.name.replace(/\s+/g, '_')}_certificate.png`}
                  className='mt-3 block w-full text-center rounded-lg border border-blue-600 text-blue-600 font-semibold py-2.5 hover:bg-blue-600 hover:text-white transition-colors shadow-2xs'
                >
                  Download Certificate
                </a>
              )}
            </div>

            {/* QR Code */}
            <div className='flex flex-col items-center'>
              <p className='text-xs uppercase tracking-wide text-zinc-500 mb-2 font-semibold'>
                Scan QR Code
              </p>
              <div className='w-40 h-40 rounded-lg border border-zinc-200 bg-zinc-50 flex items-center justify-center overflow-hidden p-3'>
                {result.qrCode ? (
                  <img
                    src={result.qrCode}
                    alt='QR Code'
                    className='max-w-full max-h-full object-contain'
                  />
                ) : (
                  <p className='text-xs text-zinc-400 text-center'>
                    No QR code
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page