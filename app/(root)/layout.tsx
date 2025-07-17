import Navbar from "../../components/Navbar";

export default function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar/>
        {children}
    </div>
  )
}
