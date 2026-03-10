import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  { title: "The Science Behind Bakuchiol", category: "Ingredients", read: "5 min read", excerpt: "Why this plant-based retinol alternative is revolutionizing anti-aging skincare." },
  { title: "Morning vs Evening Routines", category: "Rituals", read: "4 min read", excerpt: "How to structure your skincare for maximum efficacy throughout the day." },
  { title: "Understanding Your Skin Barrier", category: "Education", read: "6 min read", excerpt: "The essential guide to maintaining a healthy, resilient skin microbiome." },
];

const BlogSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Knowledge</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Beauty Secrets</h2>
        <div className="divider-botanical" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <AnimatedSection key={post.title} delay={i * 0.12}>
            <div className="glass-card rounded-2xl overflow-hidden magnetic-hover h-full group">
              <div className="h-48 bg-sage-light/60 flex items-center justify-center">
                <span className="font-display text-3xl text-sage/30 italic">{post.category}</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-xs tracking-widest uppercase text-clay-dark">{post.category}</span>
                  <span className="font-body text-xs text-muted-foreground">· {post.read}</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-sage-dark transition-colors">{post.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
