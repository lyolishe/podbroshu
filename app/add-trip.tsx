import { useReducer } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputChangeEvent,
  View,
} from "react-native";

type FormFields = "from" | "to" | "date" | "time" | "passengers_n";
type FormValue = Record<FormFields, string>;
type Payload = { field: FormFields; newValue: string };

const fields: FormFields[] = ["from", "to", "date", "time", "passengers_n"];

const initialFormState: FormValue = fields.reduce((acc, fieldId) => {
  acc[fieldId] = "";
  return acc;
}, {} as FormValue);

const AddTripModal = () => {
  const [state, setState] = useReducer<FormValue, [Payload]>((s, p) => {
    return { ...s, [p.field]: p.newValue };
  }, initialFormState);

  const handleFieldChange = (
    field: FormFields,
    event: TextInputChangeEvent,
  ) => {
    console.log("🚀 -> handleFieldChange -> event:", event);
    setState({ field, newValue: (event.target as any).value });
  };

  return (
    <View style={styles.container}>
      {fields.map((fieldId) => (
        <TextInput
          id={fieldId}
          value={state[fieldId]}
          key={fieldId}
          onChange={handleFieldChange.bind(null, fieldId)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default AddTripModal;

// TODO: унести в отдельную папку вне app
