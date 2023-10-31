import loading from './90-ring.svg'
import Image from 'next/image'

function Loading() {
  return (
    <div className='w-auto h-auto flex justify-center border-2 rounded bg-white text-primary-600 p-2 mt-4'> 
      <Image src={loading} alt={'loading'} />
    </div>
  )
}

export default Loading