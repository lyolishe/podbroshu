import {CreateRideDto, RideDto} from "@/api/webApi/api.dto";

export class ApiClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getRides = async (): Promise<RideDto[]> => {
        return await fetch(`${this.baseUrl}/rides`).then(this.processResponse).catch(console.error);
    }

    createRide(body: CreateRideDto): Promise<RideDto> {
        return fetch(`${this.baseUrl}/rides`, {
            method: "POST",
            body: JSON.stringify(body)
        }).then(this.processResponse)
    }

    private processResponse(response: Response) {
        console.log(response);
        if (response.ok && [200, 201, 203, 204, 205].includes(response.status)) {
            const r = response.json()
            console.log("Response: ", r)
            return r
        }
    }
}