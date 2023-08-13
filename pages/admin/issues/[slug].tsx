import { useIssueGet } from "@/hooks/api/issues/useIssueGet";
import { useRouter } from "next/router";

import IssueInfoComp from "@/components/IssueBuilder/IssueInfoPage";
import { useCelebsGet } from "@/hooks/api/issues/useCelebsGet";

export default function AdminIssueDetailPage() {
  // const router = useRouter();
  // const { slug } = router.query;
  // const {
  //   data: issueData,
  //   isLoading,
  //   error,
  // } = slug
  //   ? useIssueGet({
  //       slug: slug as string,
  //     })
  //   : { data: null, isLoading: false, error: null };
  const {
    data: issueData,
    isLoading,
    error,
  } = useIssueGet({ slug: "qtYcdbfctm0807013130" });
  const { data: celebsData, error: celebsError } = useCelebsGet();

  if (issueData == null || celebsData == null) {
    return <div>is Loading</div>;
  }
  return (
    <>
      <IssueInfoComp issue={issueData!!} allCelebs={celebsData!!} />
    </>
  );
}
