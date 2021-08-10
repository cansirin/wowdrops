import { ApolloError, gql, useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { CreateBoxInput, CreateBoxMutation } from "../../../API";

type useCreateBoxResponse = [
  (box: CreateBoxInput) => Promise<CreateBoxMutation["createBox"] | null>,
  {
    error?: ApolloError;
    loading: boolean;
  }
];

const mutation = gql`
  mutation CreateBox(
    $input: CreateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    createBox(input: $input, condition: $condition) {
      id
      title
      itemIds
      createdAt
      updatedAt
    }
  }
`;

export const useCreateBox = (): useCreateBoxResponse => {
  const [mutate, { error, loading }] = useMutation(mutation);

  const createBox = async (box: CreateBoxInput) => {
    const result = await mutate({
      variables: {
        input: {
          ...box,
          id: uuidv4(),
        } as CreateBoxInput,
      },
    });
    console.log(result);
    return result.data?.createBox;
  };

  return [createBox, { error, loading }];
};
