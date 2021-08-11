import { useRouter } from "next/router";
import { useFetchItem } from "../../../hooks/useFetchItem";
import { Card, FlexCol } from "../../../components";

const SingularItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, { loading }] = useFetchItem(id!);

  if (loading) return <div>Loading...</div>;
  console.log(item);

  return (
    <FlexCol>
      <Card item={item} />
    </FlexCol>
  );
};

export default SingularItem;
