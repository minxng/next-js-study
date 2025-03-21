import { API_URL } from "../app/constant";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("someting broke...");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
