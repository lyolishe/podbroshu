import { useReducer } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputChangeEvent,
  View,
  Text,
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
          <View key={fieldId}>
            <Text>
              {fieldId}
            </Text>
            <TextInput
                id={fieldId}
                value={state[fieldId]}
                style={styles.input}
                onChange={handleFieldChange.bind(null, fieldId)}
            />

          </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
  },
  input: {
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: 1,
    maxWidth: 360,
    borderRadius: 8,
    paddingInline:4
  }
});

export default AddTripModal;

// TODO: унести в отдельную папку вне app
