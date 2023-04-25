import React, { ReactElement, Suspense } from "react";

const SearchFetch = ({ result }: any) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Suspense fallback={<h1 className="text-2xl text-sky-500">Loading....</h1>}>
      <div>
        {result ? (
          result.map((ans: any, idx: number) => {
            return (
              <div key={idx} className="text-white pt-10">
                {ans.name} {ans.rating}
              </div>
            );
          })
        ) : (
          <h1 className="text-sky-400 pt-10 text-xl">nothing</h1>
        )}
      </div>
    </Suspense>
  );
};

export default SearchFetch;
