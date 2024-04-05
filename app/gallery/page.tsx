import Gallery from '@/components/image-gallery'
import image1 from '@/images/1.jpg'
import image2 from '@/images/2.jpg'
import image3 from '@/images/3.jpg'
import Link from 'next/link'

const Gallerypage = () => {

    const sampleImages = [image1,image2,image3]
    return ( 
    <div className='pb-20'>
        <div className='flex items-center justify-center h-screen'>
            <Gallery images={sampleImages} />
        </div>
        <div className="p-4">
            <h1 className="text-3xl font-bold mt-0">Installation</h1>
            <p className="dark:text-slate-600 mt-2">To use this you have to install <b>@headlessui/react</b></p>
            <p className="dark:text-slate-600 mt-2">Go to
            <Link 
                className="text-slate-300 font-bold hover:text-white transition-all mx-2" 
                target="_blank" 
                href='https://www.npmjs.com/package/@headlessui/react'
            >
                npmjs.com
            </Link>
             to install it.
            </p>
        </div>
        <div className="p-4">
            <h1 className="text-2xl font-bold mt-0">
                <Link 
                    className='text-slate-300 font-bold hover:text-white transition-all'
                    href='https://github.com/Sayed-Rafiul-Islam/component-library-frontend/tree/main/components/image-gallery'
                >
                    Source Codes
                </Link>
            </h1>
        </div>
    </div>
    );
}
 
export default Gallerypage;