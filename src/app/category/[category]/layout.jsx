import CategoryCards from "@/app/ui/categoryCards";
import CompanyInfo from "@/app/ui/companyInfo";
export default function Layout({ children }) {
  return (
    <main>
      <div>{children}</div>
      <CategoryCards />
      <CompanyInfo />
    </main>
  );
}
