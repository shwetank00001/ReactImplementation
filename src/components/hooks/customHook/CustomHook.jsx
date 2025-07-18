import React, {Suspense} from 'react'
import Recipe from './Recipe'
import Comments from './Products'
const LazyProducts = React.lazy(() => import('./Products'))

const CustomHook = () => {
  return (
    <div className='p-15'>
      <div className='sm:text-xl lg:text-3xl text-white sm:font-semibold'>
        <p>In this project, I am fetching two APIs using a <span className='sm:text-3xl lg:text-5xl font-bold text-violet-500'>Custom hook: useFetch</span>. The purpose of this is to demonstrate a case where in a project, you need to pull multiple APIs. So instead of writing a useEffect logic for each one of them. You can use a custom hook in this case. </p>
        <br />
        <p>Below is an example of how I am fetching two APIs. A recipe list and a list of products of a store.</p>
        
      </div>
      <>
        <div className='mt-5'>
            <Recipe />
        </div>
        <div className='mt-5'>
          <Suspense fallback={"Lazy loading this component!!"}>
            <LazyProducts />
          </Suspense>
        </div>
      </>
    </div>
  )
}

export default CustomHook