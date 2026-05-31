import { Navigate, useParams } from "react-router-dom";
import { StoryLayout } from "../components/StoryLayout";
import { SmoothPageTransition } from "../components/SmoothPageTransition";
import { stories } from "../data/stories";

import { useDocumentTitle } from "../utils/useDocumentTitle";

export function StoryDetail() {
  const { slug } = useParams();
  const story = stories.find((item) => item.slug === slug);

  useDocumentTitle(story?.title);

  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  return (
    <SmoothPageTransition>
      <StoryLayout story={story} />
    </SmoothPageTransition>
  );
}
