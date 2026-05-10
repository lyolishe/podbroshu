import {UseMutationOptions} from "@tanstack/react-query";
import {CreateRideKey, GetRidesKey} from "@/api/webApi/queries/keys";
import {apiClient} from "@/api/webApi";
import {CreateRideDto, RideDto} from "@/api/webApi/api.dto";

export const createRideMutation: UseMutationOptions<RideDto, unknown, CreateRideDto> = {
    mutationKey: [CreateRideKey],
    mutationFn: apiClient.createRide,
    onSuccess: (data, _, __, context) => {
        // TODO: почему-то кверя инвалидируется
        context.client.setQueryData([GetRidesKey], (old: RideDto[]) => [...old, data])
    }
}