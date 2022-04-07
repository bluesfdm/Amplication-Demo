import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const CookBookCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
