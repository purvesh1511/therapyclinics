export async function getHomepageSpecialties() {
  const res = await fetch(
    "https://eolweqikuqegvflvtsmh.supabase.co/rest/v1/homepage_specialties?select=*%2Clinked_service%3Adirectory_services%21homepage_specialties_link_service_id_fkey%28slug%2Clevel%29&is_active=eq.true&order=display_order.asc",
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