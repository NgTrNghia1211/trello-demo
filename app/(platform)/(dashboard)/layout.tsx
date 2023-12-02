import Navbar from "./_components/navbar";

const DashBoardLayout = ({
  children
} : { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh]">
      <Navbar />
      {children}
    </div>
  )
}

export default DashBoardLayout;