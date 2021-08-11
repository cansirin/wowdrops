import { useFetchItems } from "../../../hooks/useFetchItems";
import { clothIds } from "../../../utils/mock-db/cloth-ids";
import { Box } from "../../../components";

const SingularBox = () => {
  const [items] = useFetchItems(clothIds);

  return <Box items={items} />;
};

export default SingularBox;
