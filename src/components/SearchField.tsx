import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {example: string}

export default function SearchField({setName}:{setName: React.Dispatch<React.SetStateAction<string>>}){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => setName(data.example)

    return (
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center content-normal">
          <label>what are you searching for</label>
          <input className="border-solid border-black border-2 rounded-sm w-1/3  m-2"
          {...register("example", { required: true})} />
          {errors.example && <span>This field is required</span>}
          <input className="border-solid border-black border-2 rounded-sm w-1/4  m-2" type="submit" />
          </div>
        </form>
      )
}