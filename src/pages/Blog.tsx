import { Calendar, User, Tag, ChevronRight } from 'lucide-react';

function Blog() {
  const featuredPosts = [
    {
      title: "Science and Religion",
      excerpt: "What is the difference between the Cosmos and the Universe?",
      image: "https://source.unsplash.com/random/800x400?space,tourism",
      author: "Zainab Shakruwala",
      date: "February 02, 2021",
      tags: ["Space", "Religion"]
    },
    {
      title: "Reminiscence: An open eyed dream",
      excerpt: "With the night sky as my blanket, I snuggle in, dreaming to a far distance.",
      image: "https://source.unsplash.com/random/800x400?satellite,technology",
      author: "Sarika",
      date: "December 07, 2020",
      tags: ["Memories", "Space"]
    },
    {
      title: "Billionaire Space Race",
      image: "https://source.unsplash.com/random/800x400?mars,planet",
      author: "Jayakrishna Melagiri",
      date: "November 19, 2020",
      tags: ["Space", "Commercialisation"]
    }
  ];

  return (
    <div className="pt-16 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">SEDS Blog</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Insights, updates, and stories from the forefront of student space exploration.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm opacity-75">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="opacity-90 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-blue-600/50 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center">
                    Read more <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Categories</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Tag className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Technology</h3>
              <p className="opacity-75">15 Articles</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Tag className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="opacity-75">12 Articles</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Tag className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Events</h3>
              <p className="opacity-75">8 Articles</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Tag className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Projects</h3>
              <p className="opacity-75">20 Articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="opacity-90 mb-6 max-w-2xl mx-auto">
              Stay updated with the latest articles, news, and insights from the SEDS community.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-white/20 border border-white/30 focus:outline-none focus:border-blue-400"
              />
              <button className="animate-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;