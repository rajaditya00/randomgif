
import Random from './components/Random'
import Tag from './components/Tag';

export default function App() {
  return (
  
  <div className="  h-screen flex flex-col background relative overflow-x-hidden item-center">
                 <h1 className=" bg-white rounded-md w-full text-center mt-[40px] px-10 py-2 text-4xl font-bold  ">RANDOM GIFS</h1>
                 <div className="flex flex-col w-full items-center mt-[30px] gap-y-10">
                   <Random/> 
                    <Tag/>
                 </div>

    </div>
    
    );
}
