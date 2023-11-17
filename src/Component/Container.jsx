

const Container = ({children}) => {
     return (
          <div>
               <div className=' max-w-[2400px] mx-auto px-1 sm:px-2 lg:px-4 md:px-10 xl:px-20 2xl:px-[200px]'>
                    {children}
               </div>
          </div>
     );
};

export default Container;