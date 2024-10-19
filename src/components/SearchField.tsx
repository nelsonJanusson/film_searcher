import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
    example: string
  }
export default function SearchField({
    setName,
  }: {
    setName: React.Dispatch<React.SetStateAction<string>>;
  }){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => setName(data.example)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>what are you searching for</label>
          <input {...register("example", { required: true })} />
          {errors.example && <span>This field is required</span>}
          <input className="bg-blue" type="submit" />
        </form>
      )
}