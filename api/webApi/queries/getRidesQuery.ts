import {apiClient} from "@/api/webApi";
import {GetRidesKey} from "@/api/webApi/queries/keys";
import {UseQueryOptions} from "@tanstack/react-query";
import {RideDto} from "@/api/webApi/api.dto";

export const getRidesQuery: UseQueryOptions<RideDto[]> = {
    queryKey: [GetRidesKey],
    queryFn: apiClient.getRides
}