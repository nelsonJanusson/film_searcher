import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

export default function InputField({
  setQueryString
}:{
  setQueryString: React.Dispatch<React.SetStateAction<string>>
}) {

  const { register, handleSubmit } = useForm<{ queryString: string }>();

  return (
    <form  
      onSubmit={handleSubmit(({ queryString }) => setQueryString(queryString))} 
      className = "sticky top-0 bg-blue-200 flex py-6"
      >
      <input 
        className="focus:outline-none h-10 rounded-l-md p-2 ml-12 w-1/2 lg:w-1/4"
        {...register("queryString", { required: true })} 
      />
      <button 
        className="focus:outline-none h-10 rounded-r-md bg-white pr-5" 
        type="submit" 
      >
        <FaSearch/>
      </button>
    </form>
  );
}