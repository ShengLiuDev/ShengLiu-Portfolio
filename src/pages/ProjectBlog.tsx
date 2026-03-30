import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import MolidataBlog from "@/content/blog/MolidataBlog";
import AmazonNlpBlog from "@/content/blog/AmazonNlpBlog";
import SubletteeBlog from "@/content/blog/SubletteeBlog";
import UfHireLensBlog from "@/content/blog/UfHireLensBlog";
import PepmartBlog from "@/content/blog/PepmartBlog";

const blogPosts: Record<string, { title: string; component: React.ComponentType }> = {
  molidata: {
    title: "Molidata",
    component: MolidataBlog,
  },
  "amazon-nlp": {
    title: "Amazon NLP Sentiment Analysis",
    component: AmazonNlpBlog,
  },
  sublettee: {
    title: "Sublettee",
    component: SubletteeBlog,
  },
  "uf-hirelens": {
    title: "UF HireLens",
    component: UfHireLensBlog,
  },
  pepmart: {
    title: "PepMart",
    component: PepmartBlog,
  },
};

const ProjectBlog = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 pt-40 pb-24 text-center">
          <h1 className="font-display font-bold text-4xl text-foreground mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-8">
            This blog post doesn't exist yet.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const BlogContent = post.component;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-10">
            {post.title}
          </h1>

          <BlogContent />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ProjectBlog;
