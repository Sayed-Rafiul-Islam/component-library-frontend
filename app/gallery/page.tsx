import Gallery from '@/components/image-gallery'
import image1 from '@/images/1.jpg'
import image2 from '@/images/2.jpg'
import image3 from '@/images/3.jpg'

const Gallerypage = () => {

    const sampleImages = [image1,image2,image3]
    return ( 
    <div className='flex items-center justify-center h-screen'>
        <Gallery images={sampleImages} />
    </div>
    );
}
 
export default Gallerypage;