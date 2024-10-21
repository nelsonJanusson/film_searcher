import { SubmitHandler, useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

type Inputs = {queryString: string}

export default function InputField({setQueryString}:{setQueryString: React.Dispatch<React.SetStateAction<string>>}){
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      
    const onSubmit: SubmitHandler<Inputs> = (data) => setQueryString(data.queryString)

    return (
      
        <form  onSubmit={handleSubmit(onSubmit)} 
        className = " sticky top-0 bg-blue-200 flex flex-row content-normal p-4">
          <input className="p-2 rounded-l-md my-2 ml-1 lg:ml-6 h-10 focus:outline-none w-1/2 lg:w1/4"
          {...register("queryString", { required: true})} />
          <button className="rounded-r-md my-2 h-10 focus:outline-none bg-white pr-5" type="submit" >
            <FaSearch/>
          </button>
        </form>
      )
}