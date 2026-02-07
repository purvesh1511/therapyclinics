export async function getHomepageConcerns() {
  const res = await fetch(
    "https://eolweqikuqegvflvtsmh.supabase.co/rest/v1/homepage_concerns?select=*,linked_service:directory_services!homepage_concerns_link_service_id_fkey(slug,level)&is_active=eq.true&order=display_order.asc",
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