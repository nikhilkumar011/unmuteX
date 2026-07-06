import Certificate from "@/lib/models/CertificateModel";
import { connectDb } from "@/lib/db";

export default async function Page({ params }) {
    await connectDb();
    const { name } = await params;
    const certificate = await Certificate.findOne({name});

    if (!certificate) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-white dark:bg-black px-4 transition-colors'>
                <div className='w-full max-w-md text-center bg-white dark:bg-black rounded-2xl shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-800 p-10'>
                    <div className='mx-auto mb-4 h-14 w-14 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center'>
                        <svg className='h-7 w-7 text-black dark:text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    </div>
                    <h1 className='text-xl font-semibold text-black dark:text-white'>
                        Certificate Not Found
                    </h1>
                    <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
                        The certificate you're looking for doesn't exist or the link is invalid.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-white dark:bg-black px-4 py-10 transition-colors'>
            <div className='w-full max-w-md bg-white dark:bg-black rounded-2xl shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-800 p-8'>
                <div className='text-center mb-8'>
                    <div className='mx-auto mb-4 h-14 w-14 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center'>
                        <svg className='h-7 w-7 text-black dark:text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' />
                        </svg>
                    </div>
                    <h1 className='text-2xl font-semibold text-black dark:text-white'>
                        Certificate Verified
                    </h1>
                    <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
                        This certificate is authentic and valid
                    </p>
                </div>

                <div className='rounded-lg border border-gray-200 dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800'>
                    <div className='flex justify-between items-center px-4 py-3'>
                        <span className='text-sm text-gray-500 dark:text-gray-400'>Name</span>
                        <span className='text-sm font-medium text-black dark:text-white'>
                            {certificate.name}
                        </span>
                    </div>
                    <div className='flex justify-between items-center px-4 py-3'>
                        <span className='text-sm text-gray-500 dark:text-gray-400'>Phone</span>
                        <span className='text-sm font-medium text-black dark:text-white'>
                            {certificate.mobileNumber}
                        </span>
                    </div>
                </div>

                <div className='mt-6 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400'>
                    <svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' />
                    </svg>
                    Verified via secure certificate lookup
                </div>
            </div>
        </div>
    );
}