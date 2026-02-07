export async function getPopularSpecialities() {
  if(!process.env.SUPABASE_ANON_KEY) throw new Error('Missing env var from supabase');
  const res = await fetch(
    "https://eolweqikuqegvflvtsmh.supabase.co/rest/v1/homepage_popular_main_items?select=id%2Cname%2Chomepage_popular_sub_items%28id%2Cdirectory_services%28id%2Cname%2Cslug%2Clevel%29%29&section_type=eq.specialities&order=display_order.asc",
    {
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY!}`,
      },
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch concerns");
  const data = await res.json();
  return data;
}