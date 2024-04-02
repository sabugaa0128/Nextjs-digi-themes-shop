import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your asset delivered to your email and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on out platform is verified by our team to ensure our highest quality standards.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've Pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <main className="flex flex-col items-center text-center mx-auto py-20 max-w-3xl">
          <h1 className="text-4xl text-gray-900 font-bold tracking-tight sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-blue-600">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose">
            Welcome to Digi Themes Shop. Every asset on our platform is verified
            by our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col gap-4 mt-6 sm:flex-row">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </main>

        <section className="border-t border-gray-200 bg-gray-50">
          <DefaultLayout className="py-20">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="flex justify-center md:flex-shrink-0">
                    <div className="flex items-center justify-center rounded-full bg-gray-100 text-gray-900 h-16 w-16 ">
                      {<perk.Icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </DefaultLayout>
        </section>
      </DefaultLayout>
    </>
  );
}
