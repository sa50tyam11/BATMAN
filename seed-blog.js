const { createClient } = require('@supabase/supabase-js');
const slugify = require('slugify');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function seed() {
  const title = "Building Visionary Opticals: A Modern E-Commerce Experience";
  const content = `
Visionary Opticals approached SENO Studio with a simple request: **They needed a website that matched the premium quality of their eyewear.**

### The Challenge

The optical industry is crowded, and standing out requires more than just a template. We needed to build an e-commerce platform that felt bespoke, fast, and incredibly user-friendly.

![Visionary Opticals](/opticle.png)

### The Solution

We utilized Next.js and Tailwind CSS to craft a high-performance web application. 

Key features included:
- **Lightning-fast page loads**: Crucial for e-commerce conversion rates.
- **Sleek UI/UX**: Designed to highlight product details.
- **Seamless Checkout**: Minimizing friction from cart to purchase.

> "The new platform completely transformed how we sell online. It's not just a website; it's a digital storefront that we are proud of."

### The Result

Since launch, Visionary Opticals has seen a significant increase in online engagement and sales. This project stands as a testament to the power of combining solid engineering with premium design.
`;

  const slug = slugify(title, { lower: true, strict: true });

  const { data, error } = await supabase.from('blog_posts').insert([
    {
      title,
      slug,
      description: "How SENO Studio completely transformed the digital presence for Visionary Opticals.",
      content,
      tags: ['case-study', 'e-commerce', 'nextjs'],
      cover_image_url: '/opticle.png',
      published: true
    }
  ]);

  if (error) {
    console.error("Error inserting post:", error);
  } else {
    console.log("Successfully inserted post about Visionary Opticals.");
  }
}

seed();
