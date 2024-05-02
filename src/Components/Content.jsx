import Navbar from "./Navbar";
import homeimage from '../assets/images/homeimage.png'
function Content(){
    return(<>

        <div class="p-4 sm:ml-64">
        
   <div class="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700">
   <Navbar/>
      <img class="w-full h-full" src={homeimage}  />
   </div>
</div>
</>
    );
}
export default Content