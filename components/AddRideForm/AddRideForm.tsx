import { useReducer} from "react";
import {
    StyleSheet,
    TextInput,
    TextInputChangeEvent,
    View,
    Text, Button,
} from "react-native";
import {useMutation} from "@tanstack/react-query";
import {createRideMutation} from "@/api/webApi/queries/createRideMutation";
import {CreateRideDto} from "@/api/webApi/api.dto";
import {useRouter} from "expo-router";

type FormFields = keyof CreateRideDto;
type FormValue = Record<FormFields, string>;
type Payload = { field: FormFields; newValue: string };

const fields: FormFields[] = ["from", "To", "date", "time", "passenger_n"];

const initialFormState: FormValue = fields.reduce((acc, fieldId) => {
    acc[fieldId] = "";
    return acc;
}, {} as FormValue);

export const AddRideForm = () => {
    const [state, setState] = useReducer<FormValue, [Payload]>((s, p) => {
        return { ...s, [p.field]: p.newValue };
    }, initialFormState);
    const createRide = useMutation(createRideMutation)
    const {navigate} = useRouter();

    const handleFieldChange = (
        field: FormFields,
        event: TextInputChangeEvent,
    ) => {
        setState({ field, newValue: (event.target as any).value });
    };

    const handleSubmit = () => {
        createRide.mutate(
            {...state, passenger_n: Number(state.passenger_n)},
            {
                onSuccess: () => {
                    navigate('/MyRidesScreen')
                }
            }
        )
    }

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
            <Button title="Создать" onPress={handleSubmit}/>
        </View>
    );
}


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