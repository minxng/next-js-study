import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

interface IParams {
  id: string;
}

export async function generateMetadata({ params }: { params: IParams }) {
  const { id } = params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: { params: IParams }) {
  const { id } = params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info..</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos..</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
