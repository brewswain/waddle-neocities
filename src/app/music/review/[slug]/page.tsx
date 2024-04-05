import { createClient } from "@/utils/supabase/client";
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;

export async function generateStaticParams() {
  const supabase = createClient();

  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("slug");

  return reviews!.map((review) => ({ slug: encodeURIComponent(review.slug) }));
}
