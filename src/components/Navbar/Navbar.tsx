import DefaultLayout from "../Layouts/DefaultLayout";
import { Icons } from "../Icons/Icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <DefaultLayout>
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              {/* MBL */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="w-10 h-10" />
                </Link>
              </div>
            </div>
          </div>
        </DefaultLayout>
      </header>
    </div>
  );
};

export default Navbar;
