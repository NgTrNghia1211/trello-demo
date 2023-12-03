import Sidebar from "../_components/sidebar";

const OrganizationLayout = ({
  children
} : { children: React.ReactNode }) => {
  return (
    // * compared to Antonio, I change some css in main
    <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto 2xl:ml-16"> 
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        { children }
      </div>
    </main>
  )
}

export default OrganizationLayout;