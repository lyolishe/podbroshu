export interface RideDto {
    id: string;
    from: string;
    To: string;
    passenger_n: number;
    date: string;
    time: string;
}

export type CreateRideDto = Omit<RideDto, 'id'>;
export type UpdateRideDto = CreateRideDto;
