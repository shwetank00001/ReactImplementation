import React, {Suspense} from 'react'
import Recipe from './Recipe'
import Comments from './Products'
const LazyComments = React.lazy(() => import('./Products'))

const CustomHook = () => {
  return (
    <div className='p-15'>
        <div className='mt-5'>
            <Recipe />
        </div>
        <div className='mt-5'>
          <Suspense fallback={"Lazy loading this component!!"}>
            <LazyComments />
          </Suspense>
        </div>
    </div>
  )
}

export default CustomHook