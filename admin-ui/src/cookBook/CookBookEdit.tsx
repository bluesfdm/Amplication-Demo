import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const CookBookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="cookType"
          label="cookType"
          choices={[
            { label: "cook", value: "Cook" },
            { label: "fry", value: "Fry" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectArrayInput
          label="label"
          source="label"
          choices={[
            { label: "delicious", value: "Delicious" },
            { label: "recommend", value: "Recommend" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="mainImg" source="mainImg" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
