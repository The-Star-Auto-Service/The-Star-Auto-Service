import { redirect } from "next/navigation";
export default function Page() {
  redirect("/index.html"); // always serve the static HTML
  return null;
}
