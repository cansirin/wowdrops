import { useCreateBox } from "../../features/Box/hooks/useCreateBox";
import { FlexCol } from "../../components";
import { ChangeEvent, FormEvent, useState } from "react";
import { CreateBoxInput } from "../../API";

const initialState: CreateBoxInput = {
  id: "",
  title: "",
  itemIds: [],
};

const NewBoxPage = () => {
  const [createBox] = useCreateBox();
  const [box, setBox] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBox(() => ({ ...box, [e.target.name]: e.target.value }));
  };

  const createNewBox = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await createBox(box);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FlexCol>
      <form onSubmit={createNewBox}>
        <p>Box name</p>
        <input
          onChange={onChange}
          type="text"
          name="title"
          id="boxTitle"
          placeholder="Box Name"
          value={box.title}
        />
        <button type="submit">Save</button>
      </form>
    </FlexCol>
  );
};

export default NewBoxPage;
