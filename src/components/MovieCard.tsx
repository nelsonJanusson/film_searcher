import { Movie } from "../types/Types";

export default function MovieCard({
  title,
}: {
  title: string;
}) {
    return (
     <p>{title}</p>
    )
}
  