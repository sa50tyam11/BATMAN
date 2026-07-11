const { createClient } = require('@supabase/supabase-js');
const slugify = require('slugify');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  const posts = [
    {
      title: "Real Estate Business Platform",
      description: "A complete ecosystem for property buying, selling, and real estate management.",
      content: `
Building a comprehensive real estate platform is no small feat. We aimed to create an ecosystem that simplified the complex processes of property buying and selling.

![Real Estate Business](/e-state.png)

### The Challenge

Real estate platforms often suffer from cluttered interfaces and slow search functionality. We needed to provide an intuitive experience that allowed users to quickly find properties, filter by intricate details, and connect with agents seamlessly.

### Our Approach

We focused on a map-first search experience coupled with a highly optimized database structure to ensure lightning-fast queries, even with thousands of concurrent users filtering through complex property data.

> "The platform's speed and ease of use have dramatically increased our lead generation."

### Key Features
- Advanced property search and filtering
- Interactive map integration
- Secure agent-client communication portal

This project demonstrates our capability to handle complex business logic while delivering a superior user experience.
`,
      tags: ['Development', 'Design', 'Strategy'],
      cover_image_url: '/e-state.png',
    },
    {
      title: "Muzaffarpur Bangles E-Commerce",
      description: "Revitalizing a traditional business with a modern, high-performance web application and admin dashboard.",
      content: `
Muzaffarpur Bangles wanted to expand their reach beyond their physical store. They needed a robust e-commerce solution that could handle bulk orders and inventory management efficiently.

![Muzaffarpur Bangles](/bangle.png)

### The Objective

To build a full-stack e-commerce application that not only looked beautiful but also provided a powerful admin dashboard for managing products, orders, and customer data.

### The Implementation

We built a custom solution using modern web technologies to ensure scalability. The frontend was designed to be highly visual, showcasing the intricate details of the products. 

Key aspects included:
- **Custom Admin Dashboard**: Streamlining inventory and order management.
- **High-Performance Frontend**: Optimizing images and assets for quick loading.
- **Secure Payments**: Integrating reliable payment gateways for seamless transactions.

### The Impact

The new platform has allowed Muzaffarpur Bangles to reach a national audience, significantly increasing their sales volume while simplifying their operational workflow.
`,
      tags: ['Development', 'Branding', 'E-Commerce'],
      cover_image_url: '/bangle.png',
    }
  ];

  for (const post of posts) {
    const slug = slugify(post.title, { lower: true, strict: true });
    const { data, error } = await supabase.from('blog_posts').insert([
      {
        ...post,
        slug,
        published: true
      }
    ]);

    if (error) {
      console.error("Error inserting post:", post.title, error);
    } else {
      console.log("Successfully inserted post:", post.title);
    }
  }
}

seed();
