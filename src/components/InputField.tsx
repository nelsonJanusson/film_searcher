import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {queryString: string}

export default function InputField({setQueryString}:{setQueryString: React.Dispatch<React.SetStateAction<string>>}){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
      
    const onSubmit: SubmitHandler<Inputs> = (data) => setQueryString(data.queryString)

    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center content-normal p-8">
          <label className=" m-2 content-normal">what are you searching for</label>
          <input className="border-solid border-black border-2 rounded-sm w-1/4  m-2 max-w-screen-xl h-10"
          {...register("queryString", { required: true})} />
          {errors.queryString && <span>This field is required</span>}
          <input className="border-solid border-black border-2 rounded-sm w-1/5  m-2 h-10" type="submit" />
          </div>
        </form>
      )
}