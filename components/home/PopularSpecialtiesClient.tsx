"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  popularSpecialities: any[];
}

export default function PopularSpecialtiesClient({ popularSpecialities }: Props) {
  return (
    <section className="bg-[var(--color-primary-600)] text-white">
      <div className="max-w-7xl mx-auto space-y-12 px-4">
        <div>
          <h2 className="mb-4 text-lg font-medium">
            Popular Specialities
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularSpecialities.map((item) => {
              const hasSubItems =
                item.homepage_popular_sub_items?.length > 0;

              return (
                <div key={item.id}>
                  {hasSubItems ? (
                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="
                            group w-full justify-between rounded-lg
                            bg-white px-4 py-2
                            text-[var(--color-primary-700)] font-medium
                            transition-all duration-200
                            hover:bg-white hover:shadow-lg
                          "
                        >
                          {item.name}
                          <ChevronDown
                            className="
                              h-4 w-4
                              transition-transform duration-200
                              group-data-[state=open]:rotate-180
                            "
                          />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="start"
                        sideOffset={4}
                        avoidCollisions={false}
                        className="
                          w-[var(--radix-dropdown-menu-trigger-width)]
                          rounded-lg bg-white p-1
                          animate-in fade-in zoom-in-95
                          data-[state=closed]:animate-out
                          data-[state=closed]:fade-out
                          data-[state=closed]:zoom-out-95
                          duration-150
                        "
                      >
                        {item.homepage_popular_sub_items.map((sub) => (
                          <DropdownMenuItem key={sub.id} asChild>
                            <Link
                              href={`/${sub.directory_services.slug}`}
                              className="
                                w-full rounded-md px-4 py-2 text-sm
                                font-medium text-gray-700
                                transition-colors
                                hover:bg-gray-100
                              "
                            >
                              {sub.directory_services.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Button
                      variant="outline"
                      className="
                        w-full rounded-lg bg-white px-4 py-2
                        text-[var(--color-primary-700)] font-medium
                        transition-all duration-200
                        hover:bg-white hover:shadow-lg
                      "
                    >
                      {item.name}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
