import React, { Fragment, useCallback } from 'react';

import dynamic from 'next/dynamic';
import type { GetServerSideProps, NextPage } from 'next/types';

import Card from '@/components/Issue/Card';
import Circular from '@/components/Loader/Circular';
import { isSSR } from '@/constants';

// const CommonLayout = dynamic(
//   () => import('@/components/CommonLayout/CommonLayout'),
// );

// const IssuesPage: NextPage = () => {
//   const { fetchNextPage, data, hasNextPage, isFetching, isFetchingNextPage } =
//     useInfinityIssues();

//   const fetchNextPageHandler = useCallback(() => {
//     fetchNextPage().then();
//   }, [fetchNextPage]);

//   const { ref } = useInfinityEffect({
//     handler: fetchNextPageHandler,
//     hasNextPage,
//   });

//   return (
//     <CommonLayout>
//       <section className="mb-4 w-full bg-gray-100 p-4 pb-24 md:bg-white md:pt-12 lg:px-12">
//         <h1 className="text-xl font-bold text-gray-800">얼룩소 이슈!</h1>
//         <p className="mt-2 break-all text-gray-400">
//           계속 업데이트되는 살아있는 이슈들
//         </p>
//         <div className="mt-4 space-y-4">
//           {data?.pages.map((page, i) => (
//             <Fragment key={i}>
//               {page.content.map((item) => (
//                 <Card key={item.id} {...item} />
//               ))}
//             </Fragment>
//           ))}
//           {hasNextPage ? (
//             <div
//               ref={isFetching || isFetchingNextPage ? null : ref}
//               className="flex h-20 w-full items-center justify-center bg-white"
//             >
//               <Circular />
//             </div>
//           ) : null}
//         </div>
//       </section>
//     </CommonLayout>
//   );
// };

// export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
//   async (context) => {
//     const { initialZustandState, queryClient } = await authServerProcess(
//       context,
//     );
//     const isFetching = queryClient.isFetching({
//       queryKey: [QueryKeyList.InfinityIssues],
//     });
//     const data = queryClient.getQueryData<Liviews>([
//       QueryKeyList.InfinityIssues,
//     ]);

//     if (!data || !isFetching) {
//       await Promise.all([
//         queryClient.fetchInfiniteQuery([QueryKeyList.InfinityIssues], () =>
//           getIssues({ pageParam: 0, size: 10 }),
//         ),
//       ]);
//     }

//     return {
//       props: {
//         initialZustandState,
//         dehydratedState: serializeDehydrate(queryClient),
//       },
//     };
//   },
// );

// export default IssuesPage;

export default function IssuesPage() {
  return <>Issues Page</>;
}
