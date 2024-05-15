import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ post }) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
  dispatch(add(post));
  toast.success("item added to Cart")
  }
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Removed Item")
    }
  return (
    <div className="flex rounded-xl outline gap-3 p-4 mt-10 ml-5  flex-col shadow-black hover:shadow-2xl items-center justify-center hover:scale-110 transition duration-300 ease-in  ">
      <div>
        <p className="text-gray-700 font-semibold truncate w-40 mt-1">{post.title}</p>
      </div>
      <div >
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + " ..."}</p>
      </div>
      <div className="h-[180px]"> 
        <img src={post.image} className="h-full w-full"/>
      </div>
      <div>
        <p>${post.price}</p>
      </div>
        <div>
        {
          cart.some((item) => item.id == post.id) ?
           (<button className="rounded-full bg-indigo-900 text-white border border-yellow-900 px-4 py-1" onClick={removeFromCart}>Remove Item</button>) :
            (<button className="rounded-full bg-gray-800 text-white border border-yellow-900 px-4 py-1" onClick={addToCart}>Add to Cart</button>)
        }
        </div>
    </div>
  );
};

export default Product;
