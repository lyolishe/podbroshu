import {apiClient} from "@/api/webApi";
import {GetRides} from "@/api/webApi/queries/keys";
import {UseQueryOptions} from "@tanstack/react-query";
import {RideDto} from "@/api/webApi/api.dto";

export const getRidesQuery: UseQueryOptions<RideDto[]> = {
    queryKey: [GetRides],
    queryFn: apiClient.getRides
}