export async function getFooterMenu() {
  const res = await fetch(
    "https://eolweqikuqegvflvtsmh.supabase.co/rest/v1/footer_sections?select=*%2Cfooter_links%28*%29&is_active=eq.true&order=display_order.asc&footer_links.order=display_order.asc",
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