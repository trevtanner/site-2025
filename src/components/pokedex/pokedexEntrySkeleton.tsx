"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const PokedexEntrySkeleton: React.FC = () => {
  return (
    <div className="m-auto w-3/4 pt-8">
      <div className="m-auto w-1/2">
        <Card className="mt-4">
          <CardHeader>
            <Skeleton className="h-48 w-48 rounded-full mx-auto" />
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2">
              <div className="text-center">
                <Skeleton className="h-6 mb-2 w-5/6 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
              </div>
              <div className="text-center">
                <Skeleton className="h-3 w-1/3 mx-auto mb-2" />
                <div className="pokedex-entry-text">
                  <Skeleton className="h-3 mb-2 w-1/2 mx-auto" />
                </div>
                <Skeleton className="h-3 mb-2 w-2/3 mx-auto" />
                <Skeleton className="h-3 mb-2 w-5/6 mx-auto" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="block">
            <Skeleton className="h-4 w-5/6 mx-auto mb-2" />
            <Skeleton className="h-4 w-3/4 mx-auto mb-2" />
            <Skeleton className="h-4 w-2/3 mx-auto" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
