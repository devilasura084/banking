
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from 'next/image'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const LoggedIn={
      $id: "",
     email:"",
     userId: "",
     dwollaCustomerUrl:"",
     dwollaCustomerId:"",
     firstName: "Subhoraj",
     lastName: "Das",
     address1: "",
     city: "",
     state: "",
     postalCode: "",
     dateOfBirth: "",
     ssn: "",
    };
    return (
      <main className="flex h-screen w-full font-inter ">
        <Sidebar user={LoggedIn} />
        <div className="flex size-full flex-col">
          <div className=" root-layout ">
            <Image src='/icons/logo.svg' alt="Logo" width={30} height={30} />
            <div>
              <MobileNav user={LoggedIn}/>
            </div>
          </div>
          {children}
        </div>
        
      </main>
    );
  }