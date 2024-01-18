import CategoryCards from "@/app/ui/categoryCards";
import CompanyInfo from "@/app/ui/companyInfo";
import GoBack from "@/app/ui/goBack";
export default function Layout({ children }) {
  return (
    <main>
      <GoBack />
      <div>{children}</div>
      <CategoryCards />
      <CompanyInfo />
    </main>
  );
}
